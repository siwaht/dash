import { FileText, ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 150 });

  const caseStudies = [
    {
      industry: 'Healthcare',
      client: 'Major Healthcare Network',
      problem: 'Manual patient documentation was consuming 40% of clinician time, leading to burnout and reduced patient care quality. Legacy systems made it difficult to access patient histories quickly.',
      solution: 'Deployed HIPAA-compliant AI agents for automated clinical documentation and intelligent patient data retrieval. Integrated with existing EHR systems for seamless workflow.',
      results: [
        { metric: '60%', label: 'Reduction in admin time' },
        { metric: '95%', label: 'Documentation accuracy' },
        { metric: '3 weeks', label: 'Implementation time' }
      ],
      testimonial: 'Our clinicians can now focus on what they do best — caring for patients. The AI handles documentation seamlessly.',
      gradient: 'from-brand-coral-start to-brand-amber-mid',
      stats: {
        roi: '340%',
        timeline: '12 weeks',
        savings: '$2.4M annually'
      }
    },
    {
      industry: 'Financial Services',
      client: 'Global Investment Bank',
      problem: 'Manual compliance checks and risk assessments created bottlenecks in loan processing. Outdated fraud detection led to false positives affecting customer experience.',
      solution: 'Implemented agentic AI system for real-time compliance monitoring, risk assessment automation, and advanced fraud detection with explainable AI for regulatory audit trails.',
      results: [
        { metric: '75%', label: 'Faster loan processing' },
        { metric: '90%', label: 'Fraud detection accuracy' },
        { metric: '50%', label: 'Reduction in false positives' }
      ],
      testimonial: 'The AI system has transformed our operations while keeping us fully compliant with all regulatory requirements.',
      gradient: 'from-brand-blue-start to-brand-teal-mid',
      stats: {
        roi: '425%',
        timeline: '16 weeks',
        savings: '$5.8M annually'
      }
    },
    {
      industry: 'E-commerce',
      client: 'Leading Online Retailer',
      problem: 'Inventory mismatches and manual order processing led to stockouts, overstock situations, and customer service delays. Demand forecasting was reactive rather than predictive.',
      solution: 'Built end-to-end AI agent system for inventory optimization, automated order processing, and predictive demand forecasting integrated across supply chain touchpoints.',
      results: [
        { metric: '85%', label: 'Order accuracy rate' },
        { metric: '45%', label: 'Reduction in stockouts' },
        { metric: '30%', label: 'Lower inventory costs' }
      ],
      testimonial: 'Our supply chain is now intelligent and self-optimizing. Customer satisfaction has never been higher.',
      gradient: 'from-brand-emerald-start to-brand-teal-mid',
      stats: {
        roi: '380%',
        timeline: '10 weeks',
        savings: '$3.2M annually'
      }
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" aria-labelledby="case-studies-heading" className="py-16 md:py-24 bg-light-tertiary dark:bg-dark-secondary transition-colors relative overflow-hidden border-t border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-mid/5 via-transparent to-brand-emerald-mid/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-light-primary/90 dark:bg-dark-secondary/90 px-5 py-2.5 rounded-full border border-brand-emerald-mid/30 mb-6 shadow-elevation-2">
            <FileText className="w-5 h-5 text-brand-emerald-mid" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid">
              Proven Results
            </span>
          </div>

          <h2 id="case-studies-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Case Studies
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable impact. See how we've helped enterprises achieve breakthrough results with agentic AI.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="scroll-reveal group bg-light-primary/95 dark:bg-dark-secondary/95 rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 hover:border-brand-teal-mid dark:hover:border-brand-emerald-mid transition-all duration-300 shadow-elevation-2 hover:shadow-elevation-4 overflow-hidden"
            >
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${study.gradient} text-white text-sm font-bold rounded-full shadow-elevation-1`}>
                        {study.industry}
                      </span>
                      <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary font-medium">
                        {study.client}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-coral-mid"></span>
                          Problem
                        </h4>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed pl-4">
                          {study.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-teal-mid"></span>
                          Solution
                        </h4>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed pl-4">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-emerald-mid"></span>
                          Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-light-secondary/50 dark:bg-dark-primary/50 p-4 rounded-xl border border-brand-slate-light/20 dark:border-brand-slate/20 text-center">
                              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1.5 leading-none">{result.metric}</div>
                              <div className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary leading-tight">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-light-secondary/50 dark:bg-dark-primary/50 p-4 rounded-xl border-l-4 border-brand-emerald-mid">
                      <p className="text-sm italic text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                        "{study.testimonial}"
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-secondary p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
                          Impact Metrics
                        </h4>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-emerald-start to-brand-emerald-mid flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gradient">{study.stats.roi}</div>
                              <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary">ROI</div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue-start to-brand-teal-mid flex items-center justify-center flex-shrink-0">
                              <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gradient">{study.stats.timeline}</div>
                              <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Timeline</div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal-mid to-brand-emerald-start flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-gradient">{study.stats.savings}</div>
                              <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Annual Savings</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="mt-6 w-full bg-gradient-brand text-white py-3 px-4 rounded-xl font-bold text-sm hover:shadow-elevation-3 transition-all duration-300 flex items-center justify-center gap-2 group">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <a
            href="#demo-form"
            className="inline-block bg-gradient-brand text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 shadow-elevation-3"
            aria-label="View all case studies"
          >
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
