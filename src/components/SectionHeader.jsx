// Shared section header — keeps every section visually consistent.
export default function SectionHeader({ icon: Icon, eyebrow, title, subtitle, center }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-2 text-accent text-sm font-semibold tracking-wide uppercase mb-3 ${
          center ? 'justify-center' : ''
        }`}
      >
        {Icon && <Icon size={16} />}
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand to-brand-2 ${
          center ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p className={`mt-5 text-muted leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
