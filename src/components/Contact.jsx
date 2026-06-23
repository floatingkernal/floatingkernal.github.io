import { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

const iconMap = {
  email: FiMail,
  phone: FiPhone,
  linkedin: FiLinkedin,
  github: FiGithub,
};

const inputClass =
  'w-full px-4 py-2.5 bg-surface-2 border border-line rounded-lg text-content placeholder:text-muted/70 focus:border-accent outline-none transition-all';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xpwzgkqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          icon={FiMail}
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-content mb-2">
              Contact Information
            </h3>

            {data.contacts.map((contact) => {
              const Icon = iconMap[contact.type];
              if (!Icon) return null;

              return (
                <a
                  key={contact.type}
                  href={contact.href}
                  target={['linkedin', 'github'].includes(contact.type) ? '_blank' : undefined}
                  rel={['linkedin', 'github'].includes(contact.type) ? 'noopener noreferrer' : undefined}
                  className="card flex items-center gap-4 p-4 group"
                >
                  <div className="p-3 bg-accent-soft rounded-lg text-accent">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted capitalize">{contact.type}</div>
                    <div className="text-content font-medium truncate group-hover:text-accent transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold text-content mb-4">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 text-emerald-500 rounded-lg text-sm">
                  <FiCheck size={20} className="shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
                  <FiAlertCircle size={20} className="shrink-0" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-brand to-brand-2 hover:shadow-lg hover:shadow-brand/30 disabled:opacity-60 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
