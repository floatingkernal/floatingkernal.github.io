import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} {data.name}. Built with</span>
            <FiHeart className="text-red-500" size={16} />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {data.contacts
              .filter((c) => ['email', 'linkedin', 'github'].includes(c.type))
              .map((contact) => {
                let Icon;
                switch (contact.type) {
                  case 'email':
                    Icon = FiMail;
                    break;
                  case 'linkedin':
                    Icon = FiLinkedin;
                    break;
                  case 'github':
                    Icon = FiGithub;
                    break;
                  default:
                    return null;
                }

                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={contact.type}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-4 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
