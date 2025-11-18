import { Users, TrendingUp, Zap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AgenticTransformation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.scroll-reveal');
            reveals.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'High ROI Guarantee',
      description: 'Proven knowledge and hands-on experience with the latest agentic AI developments. Our team has delivered measurable results at Fortune 100 companies.',
      gradient: 'from-brand-emerald-start to-brand-emerald-mid',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'No delays in hiring process. Quick onboarding and PoC implementation — see results in weeks, not months. Our experts hit the ground running.',
      gradient: 'from-brand-blue-start to-brand-teal-mid',
    },
    {
      icon: Award,
      title: 'Zero Overhead',
      description: 'Save your enterprise from the overhead of hiring, onboarding, benefits, and administrative tasks. Access world-class talent without the commitment.',
      gradient: 'from-brand-teal-mid to-brand-emerald-start',
    },
  ];

  return (
    <section ref={sectionRef} id="agentic-transformation" aria-labelledby="transformation-heading" className="py-16 md:py-24 bg-light-secondary dark:bg-dark-primary transition-colors relative overflow-hidden border-t border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-mid/5 via-transparent to-brand-emerald-mid/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center gap-2 bg-light-primary/90 dark:bg-dark-secondary/90 px-5 py-2.5 rounded-full border border-brand-emerald-mid/30 mb-6 shadow-elevation-2">
              <Users className="w-5 h-5 text-brand-emerald-mid" />
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid">
                Agentic AI Experts
              </span>
            </div>

            <h2 id="transformation-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
              Agentic AI Transformation Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed mb-4">
              On-demand access to highly curated AI experts with 50+ years of collective AI experience.
            </p>
          </div>

          <div className="scroll-reveal bg-gradient-to-br from-light-primary via-light-secondary to-light-primary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary p-6 sm:p-8 md:p-12 rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-3 mb-10 md:mb-12 mx-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue-start to-brand-emerald-mid flex items-center justify-center flex-shrink-0 shadow-elevation-3 border-2 border-white/30">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                  Elite AI Talent Pool
                </h3>
                <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                  Our team has built and led agent systems at Fortune 100 companies including leading tech giants, financial institutions, and healthcare organizations. We bring battle-tested experience in deploying production-grade agentic AI at enterprise scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-brand-slate-light/20 dark:border-brand-slate/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">100+</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">24-48h</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Onboarding Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">10x</div>
                <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">Faster Than Hiring</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="scroll-reveal relative bg-light-primary/95 dark:bg-dark-secondary/95 p-6 sm:p-8 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-emerald-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-elevation-2 border-2 border-white/20`}>
                  <benefit.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center px-4">
            <a
              href="#demo-form"
              className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 shadow-elevation-3"
              aria-label="Connect with our AI experts"
            >
              Connect with Our AI Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
