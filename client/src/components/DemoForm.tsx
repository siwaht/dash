import { FormEvent, useState, useRef } from 'react';
import { CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useIntersectionObserver(sectionRef, { staggerDelay: 100 });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Capture form reference
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      jobTitle: formData.get('job_title') as string,
      serviceInterest: formData.get('service_interest') as string,
    };

    try {
      // 1. Save to local database first
      const dbResponse = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!dbResponse.ok) {
        console.error('Failed to save to database, but proceeding to webhook');
      }

      // 2. Send to Make.com Webhook
      const webhookResponse = await fetch('https://hook.eu2.make.com/mrcku77cr9m4cfi1lcp79kj8ch5ej2kv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!webhookResponse.ok) {
        throw new Error('Failed to submit consultation request to webhook');
      }

      setSubmitStatus('success');
      form.reset(); // Use captured reference
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="demo-form" aria-labelledby="demo-form-heading" className="py-16 md:py-24 bg-gradient-to-b from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary transition-colors relative overflow-hidden aurora-bg">
      <div className="absolute inset-0 bg-mesh-gradient-alt pointer-events-none opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-blue-mid/10 to-brand-teal-mid/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-brand-emerald-mid/10 to-brand-teal-mid/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto card-elegant p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-elegant relative overflow-hidden">

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <div className="inline-flex items-center gap-3 card-elegant px-6 py-3 rounded-full mb-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 group border-gradient">
                <Sparkles className="w-5 h-5 text-brand-emerald-mid soft-glow group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid">
                  Start Your AI Transformation
                </span>
              </div>

              <h2 id="demo-form-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient tracking-tight">
                Get Your Free Consultation
              </h2>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium px-2">
                Discover how AI agents can transform your business operations. Schedule a personalized consultation with our team to explore voice agents, chat bots, AI avatars, and workflow automation tailored to your needs.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="scroll-reveal mb-6 md:mb-8 p-5 sm:p-6 md:p-8 bg-green-50 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-elevation-2 animate-fadeInScale">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for your interest. Our AI solutions team will contact you within 24 hours to discuss your needs and schedule a personalized consultation.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="scroll-reveal mb-6 md:mb-8 p-5 sm:p-6 md:p-8 bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-elevation-2 animate-fadeInScale">
                <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                    Submission Failed
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {errorMessage || 'Please try again or contact us directly.'}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="scroll-reveal flex flex-col group">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="John Doe"
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.1s' }}>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="john@company.com"
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.2s' }}>
                <label
                  htmlFor="company"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="scroll-reveal flex flex-col group" style={{ animationDelay: '0.3s' }}>
                <label
                  htmlFor="job-title"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 group-focus-within:text-gradient transition-all duration-300"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="job_title"
                  required
                  disabled={isSubmitting}
                  className="bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1"
                  placeholder="Product Manager"
                />
              </div>

              <div className="scroll-reveal md:col-span-2" style={{ animationDelay: '0.4s' }}>
                <label
                  htmlFor="service-interest"
                  className="text-sm font-bold text-text-light-secondary dark:text-text-dark-secondary mb-3 block"
                >
                  Service Interest
                </label>
                <select
                  id="service-interest"
                  name="service_interest"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-light-primary/95 dark:bg-dark-primary/95 border border-brand-slate-light/30 dark:border-brand-slate/30 text-text-light-primary dark:text-text-dark-primary px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:border-brand-teal-mid focus:ring-2 focus:ring-brand-emerald-mid/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-elevation-1 mb-5 md:mb-6"
                >
                  <option value="">Select a service</option>
                  <option value="chat-agents">Chat AI Agents</option>
                  <option value="voice-agents">Voice Calling AI Agents</option>
                  <option value="ai-avatars">AI Avatars</option>
                  <option value="rag-retrieval">RAG Data Retrieval</option>
                  <option value="all-services">All Services</option>
                </select>
              </div>

              <div className="scroll-reveal md:col-span-2" style={{ animationDelay: '0.5s' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shine-effect w-full bg-gradient-brand text-white py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:-translate-y-2 hover:shadow-elegant-hover transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 shadow-elegant relative overflow-hidden group border border-white/20"
                >
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Request Consultation'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
