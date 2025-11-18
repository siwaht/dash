import { Brain, Users, Zap, Plug } from 'lucide-react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  useIntersectionObserver(sectionRef, { staggerDelay: 120 });

  const solutions = [
    {
      icon: Brain,
      title: 'Context Intelligence',
      tagline: 'Your Business Becomes the AI\'s Native Environment',
      description: 'Our platform comprehends your business landscape — your data, terminology, workflows, and constraints — with unmatched precision. Context Intelligence transforms raw information into actionable insights that drive intelligent decision-making.',
      gradient: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-start',
      capabilities: [
        'Deep understanding of business data and systems',
        'Domain-specific terminology and knowledge graphs',
        'Real-time workflow comprehension',
        'Constraint-aware decision making',
        'Continuous learning from business outcomes'
      ]
    },
    {
      icon: Users,
      title: 'Agent Workforces',
      tagline: 'Digital Workers That Plan, Reason, and Act',
      description: 'Deploy specialized agents that function like a digital workforce. Each agent masters specific domains, collaborates with other agents, and executes complex multi-step tasks with human-level reasoning and judgment.',
      gradient: 'from-brand-teal-mid via-brand-emerald-start to-brand-emerald-mid',
      capabilities: [
        'Multi-agent orchestration and coordination',
        'Autonomous planning and task execution',
        'Goal-oriented reasoning and decision making',
        'Inter-agent communication and collaboration',
        'Adaptive learning from task outcomes'
      ]
    },
    {
      icon: Zap,
      title: 'Enterprise Automation',
      tagline: 'End-to-End Process Transformation',
      description: 'From operations to finance to customer experience, automate multi-step processes that previously required human supervision. Our agents handle exceptions, make informed decisions, and escalate intelligently when needed.',
      gradient: 'from-brand-emerald-mid via-brand-teal-end to-brand-blue-mid',
      capabilities: [
        'Intelligent workflow automation',
        'Exception handling and decision making',
        'Cross-functional process orchestration',
        'Smart escalation and human-in-the-loop',
        'Continuous process optimization'
      ]
    },
    {
      icon: Plug,
      title: 'Integration Everywhere',
      tagline: 'Connect to Any System, Legacy or Modern',
      description: 'Seamlessly integrate with your existing technology stack. Our agents connect to databases, APIs, CRMs, ERPs, and legacy systems, creating a unified intelligence layer across your entire enterprise infrastructure.',
      gradient: 'from-brand-blue-mid via-brand-teal-start to-brand-emerald-start',
      capabilities: [
        'Universal API and system connectivity',
        'Legacy system integration and modernization',
        'Real-time data synchronization',
        'Secure authentication and access control',
        'Enterprise-grade scalability and reliability'
      ]
    },
  ];

  return (
    <section ref={sectionRef} id="solutions" aria-labelledby="solutions-heading" className="py-16 md:py-24 bg-light-tertiary dark:bg-dark-tertiary transition-colors relative overflow-hidden border-t border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-mid/5 via-transparent to-brand-emerald-mid/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-light-primary/90 dark:bg-dark-primary/90 px-5 py-2.5 rounded-full border border-brand-teal-mid/30 mb-6 shadow-elevation-2">
            <Brain className="w-5 h-5 text-brand-teal-mid" />
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid">
              Enterprise Solutions
            </span>
          </div>

          <h2 id="solutions-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-text-light-primary dark:text-text-dark-primary tracking-tight">
            Enterprise-Scale Intelligence, Delivered End-to-End
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-4xl mx-auto leading-relaxed mb-4">
            We combine advanced agents, automated reasoning, and context-aware intelligence to transform how organizations operate.
          </p>
          <p className="text-lg sm:text-xl font-bold text-gradient max-w-3xl mx-auto">
            Our context intelligence is unparalleled.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto px-4 mb-12 md:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-elevation-3 border-2 border-white/30`}>
                  <solution.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                  {solution.title}
                </h3>

                <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal-mid to-brand-emerald-mid mb-4">
                  {solution.tagline}
                </p>

                <p className="text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
                  {solution.description}
                </p>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="bg-light-primary/95 dark:bg-dark-primary/95 p-6 sm:p-8 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-2">
                  <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald-mid"></span>
                    Core Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {solution.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-3 text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary">
                        <span className="text-brand-teal-mid dark:text-brand-emerald-mid mt-1 flex-shrink-0 font-bold">✓</span>
                        <span className="leading-relaxed">{capability}</span>
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
            aria-label="Explore our solutions"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
