import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-5 md:py-7 bg-light-primary/95 dark:bg-dark-primary/95 backdrop-blur-xl border-b border-brand-slate-light/20 dark:border-brand-slate/20 transition-all duration-300 shadow-elevation-1">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <a
            href="#"
            className="font-display text-2xl md:text-3xl font-bold text-gradient transition-all hover:scale-110 inline-block duration-500"
            aria-label="AgentX home"
          >
            AgentX
          </a>

          <ul className="hidden md:flex gap-4 lg:gap-6 items-center">
            <li>
              <a
                href="#ai-advisory"
                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-teal-mid after:to-brand-emerald-mid after:transition-all after:duration-500 hover:after:w-full text-sm lg:text-base"
                aria-label="View AI advisory services"
              >
                AI Advisory
              </a>
            </li>
            <li>
              <a
                href="#agentic-transformation"
                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-teal-mid after:to-brand-emerald-mid after:transition-all after:duration-500 hover:after:w-full text-sm lg:text-base"
                aria-label="View AI transformation services"
              >
                AI Experts
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-teal-mid after:to-brand-emerald-mid after:transition-all after:duration-500 hover:after:w-full text-sm lg:text-base"
                aria-label="View solutions"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-teal-mid after:to-brand-emerald-mid after:transition-all after:duration-500 hover:after:w-full text-sm lg:text-base"
                aria-label="View industries"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#case-studies"
                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-teal-mid after:to-brand-emerald-mid after:transition-all after:duration-500 hover:after:w-full text-sm lg:text-base"
                aria-label="View case studies"
              >
                Case Studies
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-light-secondary/90 dark:bg-dark-secondary/90 hover:scale-110 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-elevation-1 border border-brand-slate-light/20 dark:border-brand-slate/20"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <Moon className="w-6 h-6 text-brand-blue-mid" />
                ) : (
                  <Sun className="w-6 h-6 text-brand-amber-mid" />
                )}
              </button>
            </li>
            <li>
              <a
                href="#demo-form"
                className="btn-ripple inline-block bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:-translate-y-2 hover:shadow-glow-lg hover:scale-110 transition-all duration-500 min-h-[48px] flex items-center relative overflow-hidden group shadow-elevation-2 border-2 border-white/20"
                aria-label="Request a demo"
              >
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </li>
          </ul>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-light-secondary/90 dark:bg-dark-secondary/90 hover:scale-110 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-elevation-1 border border-brand-slate-light/20 dark:border-brand-slate/20"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-brand-blue-mid" />
              ) : (
                <Sun className="w-6 h-6 text-brand-amber-mid" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl bg-light-secondary/90 dark:bg-dark-secondary/90 hover:scale-110 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-elevation-1 border border-brand-slate-light/20 dark:border-brand-slate/20"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-brand-coral-mid" />
              ) : (
                <Menu className="w-7 h-7 text-brand-teal-mid" />
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-brand-slate-light/20 dark:border-brand-slate/20 animate-fadeInUp bg-light-secondary/50 dark:bg-dark-secondary/50 backdrop-blur-sm rounded-b-2xl -mx-4 px-4">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#ai-advisory"
                  className="block py-3 px-4 text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-300 hover:pl-6 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Advisory
                </a>
              </li>
              <li>
                <a
                  href="#agentic-transformation"
                  className="block py-3 px-4 text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-300 hover:pl-6 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Experts
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="block py-3 px-4 text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-300 hover:pl-6 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="block py-3 px-4 text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-300 hover:pl-6 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="block py-3 px-4 text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-300 hover:pl-6 hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#demo-form"
                  className="block text-center bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:shadow-elevation-3 hover:scale-105 transition-all duration-300 min-h-[52px] shadow-elevation-2 border-2 border-white/20 flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
