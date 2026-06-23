import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const iconFor = { email: FiMail, linkedin: FiLinkedin, github: FiGithub };

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-bg border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-muted text-sm">
            <span>© {currentYear} {data.name}. Built with</span>
            <FiHeart className="text-red-500" size={15} />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {data.contacts
              .filter((c) => ['email', 'linkedin', 'github'].includes(c.type))
              .map((contact) => {
                const Icon = iconFor[contact.type];
                if (!Icon) return null;
                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-lg border border-line text-muted hover:text-accent hover:border-accent/50 transition-colors"
                    aria-label={contact.type}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            Back to top <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
