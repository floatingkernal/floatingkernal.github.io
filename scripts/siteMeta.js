// Generates agent- and search-engine-facing metadata from resume.json so that
// llms.txt and the JSON-LD Person schema always stay in sync with the single
// source of truth (see CLAUDE.md content rule). No hand-authored bio content.

/** Build a schema.org Person object (https://schema.org/Person) from resume data. */
export function buildJsonLd(data, siteUrl) {
  const byType = Object.fromEntries((data.contacts || []).map((c) => [c.type, c]));
  const sameAs = (data.contacts || [])
    .filter((c) => ['linkedin', 'github'].includes(c.type))
    .map((c) => c.href);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.title,
    description: data.tagline,
    url: siteUrl,
  };

  if (byType.email) jsonLd.email = byType.email.href.replace(/^mailto:/, '');
  if (sameAs.length) jsonLd.sameAs = sameAs;
  if (data.workExp?.[0]) {
    jsonLd.worksFor = { '@type': 'Organization', name: data.workExp[0].company };
  }
  if (data.educations?.[0]) {
    jsonLd.alumniOf = { '@type': 'CollegeOrUniversity', name: data.educations[0].school };
  }
  const knowsAbout = Object.values(data.skills || {}).flat();
  if (knowsAbout.length) jsonLd.knowsAbout = knowsAbout;

  return jsonLd;
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** Build an llms.txt (https://llmstxt.org) markdown summary from resume data. */
export function buildLlmsTxt(data, siteUrl) {
  const out = [];

  out.push(`# ${data.name}`, '');
  if (data.title || data.tagline) {
    out.push(`> ${[data.title, data.tagline].filter(Boolean).join(' — ')}`, '');
  }
  if (data.about) out.push(data.about, '');

  if (data.workExp?.length) {
    out.push('## Experience', '');
    for (const job of data.workExp) {
      const loc = job.location ? `, ${job.location}` : '';
      out.push(`- **${job.position}**, ${job.company} (${job.start} – ${job.end})${loc}`);
      for (const d of job.description || []) out.push(`  - ${d}`);
    }
    out.push('');
  }

  if (data.skills && Object.keys(data.skills).length) {
    out.push('## Skills', '');
    for (const [category, list] of Object.entries(data.skills)) {
      out.push(`- **${category}:** ${list.join(', ')}`);
    }
    out.push('');
  }

  if (data.projects?.length) {
    out.push('## Projects', '');
    for (const p of data.projects) {
      const when = p.when ? ` — ${p.when}` : '';
      const link = p.link ? ` (${p.link})` : '';
      out.push(`- **${p.name}**${when}: ${p.desc}${link}`);
    }
    out.push('');
  }

  if (data.educations?.length) {
    out.push('## Education', '');
    for (const e of data.educations) {
      out.push(`- ${e.degree}, ${e.school} (${e.start} – ${e.end})`);
    }
    out.push('');
  }

  out.push('## Contact', '');
  for (const c of data.contacts || []) {
    out.push(`- ${cap(c.type)}: ${c.value} (${c.href})`);
  }
  if (data.resumeLink) out.push(`- Resume: ${data.resumeLink}`);
  out.push(`- Website: ${siteUrl}`, '');

  return out.join('\n');
}
