// Shared section header — keeps every section visually consistent.
// Reads its eyebrow/title/subtitle from data.sections[name] so all copy
// lives in resume.json. Explicit eyebrow/title/subtitle props override.
export default function SectionHeader({ icon: Icon, data, name, eyebrow, title, subtitle, center }) {
  const meta = (data && name && data.sections && data.sections[name]) || {};
  const eyebrowText = eyebrow ?? meta.eyebrow;
  const titleText = title ?? meta.title;
  const subtitleText = subtitle ?? meta.subtitle;

  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-2 text-accent text-sm font-semibold tracking-wide uppercase mb-3 ${
          center ? 'justify-center' : ''
        }`}
      >
        {Icon && <Icon size={16} />}
        {eyebrowText}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content">
        {titleText}
      </h2>
      <div
        className={`mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand to-brand-2 ${
          center ? 'mx-auto' : ''
        }`}
      />
      {subtitleText && (
        <p className={`mt-5 text-muted leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitleText}
        </p>
      )}
    </div>
  );
}
