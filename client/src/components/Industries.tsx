import { Heart, Building2, ShoppingBag, Shield } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 150 });

  const industries = [
    {
      icon: Heart,
      name: 'Healthcare',
      tagline: 'HIPAA-Compliant AI for Patient Care',
      description: 'Transform clinical workflows with AI agents that understand the complexity of healthcare delivery while maintaining the highest standards of patient data security and regulatory compliance.',
      gradient: 'from-brand-coral-start via-brand-coral-mid to-brand-amber-start',
      applications: [
        'Clinical documentation automation',
        'Patient scheduling and triage',
        'Medical records management',
        'Care coordination and follow-ups',
        'HIPAA-compliant data handling'
      ],
      stats: {
        efficiency: '60%',
        label: 'Admin Time Saved'
      }
    },
    {
      icon: Building2,
      name: 'Banking & Financial Services',
      description: 'Deploy secure, compliant AI agents for financial operations. From fraud detection to customer service, our solutions meet stringent regulatory requirements including SOC 2, PCI-DSS, and regional banking regulations.',
      gradient: 'from-brand-blue-start via-brand-blue-mid to-brand-teal-start',
      tagline: 'Secure & Compliant Financial AI',
      applications: [
        'Fraud detection and prevention',
        'Customer service automation',
        'Loan processing and underwriting',
        'Risk assessment and compliance monitoring',
        'Regulatory reporting automation'
      ],
      stats: {
        efficiency: '75%',
        label: 'Faster Processing'
      }
    },
    {
      icon: ShoppingBag,
      name: 'E-commerce & Supply Chain',
      tagline: 'Intelligent Commerce Operations',
      description: 'Optimize every touchpoint in your commerce operations. Our AI agents enhance customer experience, streamline logistics, and provide real-time insights into demand patterns and inventory optimization.',
      gradient: 'from-brand-emerald-start via-brand-teal-mid to-brand-blue-start',
      applications: [
        'Intelligent inventory management',
        'Customer experience personalization',
        'Order processing automation',
        'Demand forecasting and planning',
        'Logistics and route optimization'
      ],
      stats: {
        efficiency: '85%',
        label: 'Order Accuracy'
      }
    },
  ];

  return (
    <section ref={sectionRef} id="industries" aria-labelledby="industries-heading" className="py-16 md:py-24 bg-light-secondary dark:bg-dark-primary transition-colors relative overflow-hidden border-t border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 bg-mesh-gradient-alt pointer-events-none opacity-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-light-secondary/90 dark:bg-dark-primary/90 px-5 py-2.5 rounded-full border border-brand-blue-mid/30 mb-6 shadow-elevation-2">
            <Building2 className="w-5 h-5 text-brand-blue-mid" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid to-brand-teal-mid">
              Industry Solutions
            </span>
          </div>

          <h2 id="industries-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Privacy-first, compliance-ready AI solutions tailored to your industry's unique challenges and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 mb-12 md:mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="scroll-reveal group relative bg-light-secondary/90 dark:bg-dark-primary/90 rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-4 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="p-6 sm:p-8 md:p-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 shadow-elevation-3 border-2 border-white/30 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                  {industry.name}
                </h3>

                <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid mb-4">
                  {industry.tagline}
                </p>

                <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="mb-6 p-4 bg-light-primary/50 dark:bg-dark-secondary/50 rounded-xl border border-brand-slate-light/20 dark:border-brand-slate/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">{industry.stats.efficiency}</div>
                    <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{industry.stats.label}</div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-emerald-mid" />
                    Key Applications
                  </h4>
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-start gap-2 text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">
                      <span className="text-brand-teal-mid dark:text-brand-emerald-mid mt-0.5 flex-shrink-0 font-bold">•</span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a
            href="#demo-form"
            className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 shadow-elevation-3"
            aria-label="See how we serve your industry"
          >
            See How We Serve Your Industry
          </a>
        </div>
      </div>
    </section>
  );
}
