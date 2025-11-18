import { Lightbulb, Compass, Shield } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function AIAdvisory() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 150 });

  const advisoryServices = [
    {
      icon: Lightbulb,
      title: 'Opportunity Estimation',
      description: 'We identify where AI can create the greatest impact within your organization. Our consultants assess your data ecosystem, process maturity, and business goals to uncover practical, high-ROI AI opportunities.',
      gradient: 'from-brand-amber-start via-brand-coral-mid to-brand-coral-end',
      details: [
        'AI opportunity landscape and value estimation',
        'Feasibility analysis and readiness assessment',
        'Use case prioritization matrix with ROI forecasting'
      ]
    },
    {
      icon: Compass,
      title: 'Data & AI Strategy',
      description: 'Turn insights into execution with a comprehensive AI roadmap tailored to your business. We align AI initiatives with your strategic objectives, ensuring data foundations, governance, and talent readiness are in place.',
      gradient: 'from-brand-teal-start via-brand-teal-mid to-brand-emerald-start',
      details: [
        'Data strategy and architecture blueprint',
        'AI implementation roadmap and milestone planning',
        'Organizational readiness and change management plan'
      ]
    },
    {
      icon: Shield,
      title: 'Agentic AI Governance',
      description: 'Build AI responsibly with a robust governance framework that ensures transparency, fairness, and accountability. Stay compliant with evolving global regulations including HIPAA, GDPR, and industry-specific standards.',
      gradient: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-mid',
      details: [
        'Governance framework design and policy implementation',
        'Ethical AI principles and compliance alignment',
        'AI risk management and continuous monitoring systems'
      ]
    },
  ];

  return (
    <section ref={sectionRef} id="ai-advisory" aria-labelledby="ai-advisory-heading" className="py-16 md:py-24 bg-light-primary dark:bg-dark-secondary transition-colors relative overflow-hidden border-t border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal-mid/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-light-secondary/90 dark:bg-dark-primary/90 px-5 py-2.5 rounded-full border border-brand-teal-mid/30 mb-6 shadow-elevation-2">
            <Compass className="w-5 h-5 text-brand-teal-mid" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid to-brand-emerald-mid">
              AI Advisory Services
            </span>
          </div>

          <h2 id="ai-advisory-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            AI Lifecycle Advisory
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            Expert guidance to unlock AI's full potential — from opportunity discovery to responsible implementation.
          </p>
          <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            End-to-end consulting that transforms AI from concept to compliant, revenue-generating reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 mb-12 md:mb-16">
          {advisoryServices.map((service, index) => (
            <div key={index} className="scroll-reveal relative group">
              <div className="relative bg-light-secondary/90 dark:bg-dark-primary/90 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-3 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-elevation-3 border-2 border-white/30 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 md:mb-4 text-text-light-primary dark:text-text-dark-primary text-center">
                  {service.title}
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-center text-sm sm:text-base font-medium mb-6">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-brand-slate-light/20 dark:border-brand-slate/20">
                  <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-3 text-center">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-text-light-secondary dark:text-text-dark-secondary flex items-start leading-relaxed">
                        <span className="text-brand-teal-mid dark:text-brand-emerald-mid mr-2.5 flex-shrink-0 font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a
            href="#demo-form"
            className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 shadow-elevation-3"
            aria-label="Learn more about our AI advisory services"
          >
            Learn More About Our Advisory Services
          </a>
        </div>
      </div>
    </section>
  );
}
