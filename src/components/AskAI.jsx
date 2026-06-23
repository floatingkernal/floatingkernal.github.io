import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { SiAnthropic, SiOpenai, SiGooglegemini } from 'react-icons/si';
import Toast from './Toast';
import SectionHeader from './SectionHeader';

// Icon components can't live in JSON — map a string key from resume.json
// (askAI.services[].icon) to the actual icon component here.
const iconMap = {
  anthropic: SiAnthropic,
  openai: SiOpenai,
  gemini: SiGooglegemini,
  message: FiMessageCircle,
};

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

export default function AskAI({ data }) {
  const [toast, setToast] = useState(null);

  const prompt = data.askAI?.prompt || '';
  const services = data.askAI?.services || [];

  const handleClick = (e, service) => {
    e.preventDefault();
    copyToClipboard(prompt);
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
    <section id="askai" className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={FiMessageCircle} data={data} name="askai" />

        {/* AI Service Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FiMessageCircle;
            const swatch = service.color || service.colorLight || '#6366f1';
            return (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleClick(e, service)}
                className="group card flex items-center gap-4 p-5 text-left no-underline"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: `${swatch}15` }}
                >
                  <Icon
                    size={24}
                    className={service.colorDark ? 'text-black dark:text-gray-200' : ''}
                    style={service.color ? { color: service.color } : undefined}
                  />
                </div>
                <div>
                  <div className="font-semibold text-content">{service.name}</div>
                  <div className="text-sm text-muted">Ask {service.name} about me</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </section>
  );
}
