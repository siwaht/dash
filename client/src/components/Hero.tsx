import AnimatedVisual from './AnimatedVisual';
import { Bot, Clock, TrendingDown } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 0 });

  return (
    <section ref={sectionRef} id="hero" aria-label="Hero section" className="py-12 sm:py-16 md:py-24 lg:py-32 text-center bg-gradient-to-b from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary transition-colors relative overflow-hidden aurora-bg">
      <div className="absolute inset-0 bg-mesh-gradient-alt pointer-events-none opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-blue-mid/10 to-brand-teal-mid/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-emerald-mid/10 to-brand-teal-mid/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal inline-flex items-center gap-2 card-elegant px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 group border-gradient" aria-label="Privacy-First Enterprise AI">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-brand-emerald-mid group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
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
            Automate customer support, sales, and operations on WhatsApp with intelligent agents that understand your business and your customers.
          </p>

          <div className="scroll-reveal max-w-4xl mx-auto mb-8 md:mb-10 px-4" style={{ animationDelay: '0.25s' }}>
            <div className="card-elegant p-4 sm:p-6 rounded-3xl shadow-elegant elegant-hover">
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
              className="shine-effect inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-2 hover:shadow-elegant-hover transition-all duration-500 min-h-[52px] sm:min-h-[60px] flex items-center justify-center shadow-elegant group relative border border-white/20"
              aria-label="Book a consultation with our AI experts"
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Book a Consultation</span>
            </a>
            <a
              href="#ai-advisory"
              className="card-elegant inline-block text-text-light-primary dark:text-text-dark-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-2 hover:shadow-elegant-hover transition-all duration-500 min-h-[52px] sm:min-h-[60px] flex items-center justify-center group"
              aria-label="Explore our AI advisory services"
            >
              <span className="group-hover:text-gradient transition-all duration-300">Explore Advisory Services</span>
            </a>
          </div>

          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-16 px-4" style={{ animationDelay: '0.4s' }}>
            <div className="card-elegant flex items-center justify-start gap-3 sm:gap-4 p-5 md:p-6 rounded-2xl shadow-soft hover:shadow-elegant-hover elegant-hover group" aria-label="24/7 Availability">
              <div className="p-3 rounded-xl bg-gradient-to-br from-brand-blue-mid/20 to-brand-blue-mid/10 group-hover:from-brand-blue-mid/30 group-hover:to-brand-blue-mid/20 transition-all duration-300">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-brand-blue-mid flex-shrink-0 soft-glow" aria-hidden="true" />
              </div>
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-mid to-brand-teal-mid leading-none mb-1">24/7</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary font-medium">Availability</div>
              </div>
            </div>
            <div className="card-elegant flex items-center justify-start gap-3 sm:gap-4 p-5 md:p-6 rounded-2xl shadow-soft hover:shadow-elegant-hover elegant-hover group" aria-label="10x Efficiency Boost">
              <div className="p-3 rounded-xl bg-gradient-to-br from-brand-emerald-mid/20 to-brand-emerald-mid/10 group-hover:from-brand-emerald-mid/30 group-hover:to-brand-emerald-mid/20 transition-all duration-300">
                <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-brand-emerald-mid flex-shrink-0 soft-glow" aria-hidden="true" />
              </div>
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald-mid to-brand-teal-mid leading-none mb-1">10x</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary font-medium">Efficiency</div>
              </div>
            </div>
            <div className="card-elegant flex items-center justify-start gap-3 sm:gap-4 p-5 md:p-6 rounded-2xl shadow-soft hover:shadow-elegant-hover elegant-hover group" aria-label="70% Cost Reduction">
              <div className="p-3 rounded-xl bg-gradient-to-br from-brand-teal-mid/20 to-brand-teal-mid/10 group-hover:from-brand-teal-mid/30 group-hover:to-brand-teal-mid/20 transition-all duration-300">
                <TrendingDown className="w-7 h-7 sm:w-8 sm:h-8 text-brand-teal-mid flex-shrink-0 soft-glow" aria-hidden="true" />
              </div>
              <div className="text-left flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-blue-mid leading-none mb-1">70%</div>
                <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary font-medium">Cost Reduction</div>
              </div>
            </div>
          </div>

          <AnimatedVisual />
        </div>
      </div>
    </section>
  );
}
