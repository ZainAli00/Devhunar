import { useState, type FormEvent } from 'react';
import axios from 'axios';
import Section from '../components/ui/Section';
import Sticker from '../components/ui/Sticker';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormState): FieldError {
  const errors: FieldError = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus('loading');
    try {
      const { data } = await axios.post('/api/contact', form);
      setServerMsg(data.message ?? 'Message sent!');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data?.message
          ? (err.response.data.message as string)
          : 'Something went wrong. Please try again.';
      setServerMsg(msg);
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FieldError) =>
    `w-full px-4 py-3.5 rounded-2xl border text-sm bg-white/80 outline-none transition-all duration-200 focus:ring-2 focus:ring-dark/20 focus:border-dark ${
      errors[field] ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <section id="contact" className="bg-mint py-24">
      <div className="max-w-5xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <Sticker
              emoji="👋"
              label="say hi"
              rotate={-5}
              color="#FFE4E4"
              className="inline-flex mb-6"
              animate="float"
            />
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Ready to{' '}
              <span
                className="inline-block px-3 rounded-xl"
                style={{ backgroundColor: '#FEF3C7' }}
              >
                build something?
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              Drop us a message. Zain personally reads every single one and replies within 24 hours.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Info side */}
            <div className="space-y-8">
              <div>
                <p className="font-bold text-dark text-lg mb-1">Zain Ali</p>
                <p className="text-gray-500 text-sm">CEO & Co-founder, Devhunar</p>
              </div>

              {[
                {
                  icon: '📧',
                  label: 'Email',
                  value: 'hello@devhunar.com',
                  href: 'mailto:hello@devhunar.com',
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'Remote — worldwide',
                  href: null,
                },
                {
                  icon: '⏱',
                  label: 'Response time',
                  value: 'Within 24 hours',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/70 flex items-center justify-center text-xl flex-shrink-0 shadow-soft">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-dark hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-dark">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Decorative */}
              <div className="pt-4">
                <div className="rounded-3xl p-5 bg-white/60 shadow-soft">
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    &ldquo;Every great product started with one honest conversation. Let&apos;s have ours.&rdquo;
                  </p>
                  <p className="mt-2 text-sm font-bold text-dark">— Zain Ali</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft-lg">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display font-extrabold text-dark text-xl mb-2">Message sent!</h3>
                  <p className="text-gray-600 text-sm">{serverMsg}</p>
                  <button
                    onClick={() => { setStatus('idle'); setServerMsg(''); }}
                    className="mt-6 px-6 py-3 bg-dark text-white rounded-2xl text-sm font-bold hover:bg-dark-soft transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5" htmlFor="name">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ada Lovelace"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ada@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5" htmlFor="message">
                      What are you building?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — the problem, the goal, rough timeline..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {serverMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-dark text-white rounded-2xl font-bold text-sm hover:bg-dark-soft transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      'Send message →'
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No spam, ever. We reply within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
