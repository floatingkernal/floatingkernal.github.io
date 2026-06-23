import { FiMail, FiLinkedin, FiGithub, FiChevronDown, FiFileText, FiArrowRight } from 'react-icons/fi';

const iconMap = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
};

export default function Hero({ data, showResumeLink }) {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16 overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-accent-soft/60 via-bg to-bg" />
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Floating glow blobs */}
      <div className="absolute top-24 -left-10 w-80 h-80 bg-brand/20 rounded-full blur-3xl -z-10 animate-float" />
      <div
        className="absolute bottom-24 -right-10 w-80 h-80 bg-brand-2/20 rounded-full blur-3xl -z-10 animate-float"
        style={{ animationDelay: '-4s' }}
      />

      <div className="text-center max-w-3xl mx-auto">
        {/* Greeting */}
        <p
          className="text-accent font-medium mb-3 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          {data.hero?.greeting}
        </p>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient mb-4 animate-fade-up"
          style={{ animationDelay: '0.18s' }}
        >
          {data.name}
        </h1>

        {/* Title */}
        <h2
          className="font-display text-2xl sm:text-3xl font-semibold text-content mb-5 animate-fade-up"
          style={{ animationDelay: '0.26s' }}
        >
          {data.title}
        </h2>

        {/* Tagline */}
        <p
          className="text-lg text-muted mb-9 max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.34s' }}
        >
          {data.tagline}
        </p>

        {/* Social Links */}
        <div
          className="flex justify-center items-center gap-3 mb-9 animate-fade-up"
          style={{ animationDelay: '0.42s' }}
        >
          {data.contacts
            .filter((c) => ['email', 'linkedin', 'github'].includes(c.type))
            .map((contact) => {
              const Icon = iconMap[contact.type];
              return (
                <a
                  key={contact.type}
                  href={contact.href}
                  target={contact.type !== 'email' ? '_blank' : undefined}
                  rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl border border-line bg-surface/70 text-muted hover:text-accent hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={contact.type}
                >
                  <Icon size={22} />
                </a>
              );
            })}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-brand to-brand-2 text-white font-medium rounded-xl shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            {data.hero?.ctaPrimary}
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          {showResumeLink && (
            <a
              href={data.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-line text-content font-medium rounded-xl hover:border-accent/50 hover:bg-surface hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiFileText size={18} />
              {data.hero?.ctaResume}
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FiChevronDown size={30} />
      </button>
    </section>
  );
}
