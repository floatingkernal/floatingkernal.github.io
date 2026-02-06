import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { SiAnthropic, SiOpenai, SiGooglegemini } from 'react-icons/si';
import Toast from './Toast';

const PROMPT = 'Please visit https://salmansharif.me and tell me about Salman Sharif - what makes him a strong candidate, and what can he bring to my organization?';

const AI_SERVICES = [
  {
    name: 'Claude',
    url: 'https://claude.ai',
    Icon: SiAnthropic,
    color: '#D4A574',
  },
  {
    name: 'ChatGPT',
    url: 'https://chatgpt.com',
    Icon: SiOpenai,
    color: '#10A37F',
  },
  {
    name: 'DeepSeek',
    url: 'https://chat.deepseek.com',
    Icon: FiMessageCircle,
    color: '#4D6BFE',
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com/app',
    Icon: SiGooglegemini,
    color: '#8E75B2',
  },
  {
    name: 'Grok',
    url: 'https://grok.com',
    Icon: FiMessageCircle,
    colorLight: '#000000',
    colorDark: '#E7E7E7',
  },
];

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export default function AskAI() {
  const [toast, setToast] = useState(null);

  const handleClick = (e, service) => {
    e.preventDefault();
    copyToClipboard(PROMPT);
    setToast(`Prompt copied! Opening ${service.name}...`);
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = service.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1000);
  };

  return (
    <section id="askai" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <FiMessageCircle className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ask AI About Me
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
          Click any button below to open an AI assistant. A prompt will be copied to your clipboard — just paste it to learn more about me.
        </p>

        {/* AI Service Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_SERVICES.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleClick(e, service)}
              className="group flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-left no-underline"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color || service.colorLight}15`,
                }}
              >
                <service.Icon
                  size={24}
                  className={service.colorDark ? 'text-black dark:text-gray-200' : ''}
                  style={service.color ? { color: service.color } : undefined}
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {service.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Ask {service.name} about me
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </section>
  );
}
