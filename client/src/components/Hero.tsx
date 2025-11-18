import AnimatedVisual from './AnimatedVisual';
import { Bot, Clock, TrendingDown } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 0 });

  return (
    <section ref={sectionRef} id="hero" aria-label="Hero section" className="py-12 sm:py-16 md:py-24 lg:py-32 text-center bg-light-secondary dark:bg-dark-primary transition-colors relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal inline-flex items-center gap-2 bg-light-primary/90 dark:bg-dark-secondary/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-brand-teal-mid/30 dark:border-brand-emerald-mid/30 mb-6 sm:mb-8 shadow-elevation-2 hover:border-brand-emerald-mid/50 transition-all duration-300" aria-label="Privacy-First Enterprise AI">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-brand-emerald-mid" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid via-brand-teal-mid to-brand-emerald-mid">
              Privacy-First, Globally Compliant Enterprise AI
            </span>
          </div>

          <h1 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.35] mb-6 md:mb-8 tracking-tight" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient block mb-4 sm:mb-6 leading-[1.35] py-2">
              The Only Agentic AI OS
            </span>
            <span className="text-text-light-primary dark:text-text-dark-primary block leading-[1.35] py-2">
              Your Enterprise Will Ever Need
            </span>
          </h1>

          <p className="scroll-reveal text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4 font-medium" style={{ animationDelay: '0.2s' }}>
            Upgrade every workflow, every system, and every team with intelligent agents that understand your business as deeply as you do.
          </p>

          <div className="scroll-reveal max-w-4xl mx-auto mb-8 md:mb-10 px-4" style={{ animationDelay: '0.25s' }}>
            <div className="bg-light-secondary/50 dark:bg-dark-secondary/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-brand-slate-light/20 dark:border-brand-slate/20">
              <h2 className="text-lg sm:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                A New Operating Layer for the Enterprise
              </h2>
              <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary mb-4 leading-relaxed">
                Modern enterprises need more than chatbots — they need autonomous digital workers that:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Understand your systems, data, and business logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Execute multi-step tasks end-to-end</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Integrate seamlessly across your tech stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Learn continuously from outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Adapt instantly to new processes and rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-emerald-mid mt-0.5">✓</span>
                  <span>Privacy-first with HIPAA, GDPR compliance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="scroll-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-16 px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="#demo-form"
              className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 min-h-[52px] sm:min-h-[60px] flex items-center justify-center shadow-elevation-3"
              aria-label="Book a consultation with our AI experts"
            >
              Book a Consultation
            </a>
            <a
              href="#ai-advisory"
              className="inline-block bg-light-primary/80 dark:bg-dark-tertiary/80 backdrop-blur-sm text-text-light-primary dark:text-text-dark-primary border-2 border-border-light dark:border-border-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-3 hover:border-brand-teal-mid transition-all duration-300 min-h-[52px] sm:min-h-[60px] flex items-center justify-center"
              aria-label="Explore our AI advisory services"
            >
              Explore Advisory Services
            </a>
          </div>

          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-16 px-4" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-start gap-3 sm:gap-4 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2" aria-label="24/7 Availability">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-brand-blue-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary leading-none mb-1">24/7</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Availability</div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 sm:gap-4 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2" aria-label="10x Efficiency Boost">
              <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-brand-emerald-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary leading-none mb-1">10x</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Efficiency</div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 sm:gap-4 bg-light-primary/95 dark:bg-dark-secondary/95 p-5 md:p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2" aria-label="70% Cost Reduction">
              <TrendingDown className="w-7 h-7 sm:w-8 sm:h-8 text-brand-teal-mid flex-shrink-0" aria-hidden="true" />
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary leading-none mb-1">70%</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Cost Reduction</div>
              </div>
            </div>
          </div>

          <AnimatedVisual />
        </div>
      </div>
    </section>
  );
}
