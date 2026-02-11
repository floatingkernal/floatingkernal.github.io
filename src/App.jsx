import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AskAI from './components/AskAI';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './data/resume.json';

const RESUME_URL =
  'https://raw.githubusercontent.com/floatingkernal/floatingkernal.github.io/react-source/src/data/resume.json';

function App() {
  const [data, setData] = useState(resumeData);
  const [isFresh, setIsFresh] = useState(false);

  useEffect(() => {
    const cacheKey = Math.floor(Date.now() / 60000);
    fetch(`${RESUME_URL}?v=${cacheKey}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((freshData) => {
        setData(freshData);
        setIsFresh(true);
      })
      .catch(() => {
        // Fetch failed — isFresh stays false, bundled fallback used for safe sections
      });
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage and document class when darkMode changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const saved = localStorage.getItem('darkMode');
      if (saved === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero data={data} showResumeLink={isFresh} />
        <About data={data} />
        <AskAI />
        {isFresh && <Experience data={data} />}
        <Skills data={data} />
        {isFresh && <Projects data={data} />}
        <Education data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}

export default App;
