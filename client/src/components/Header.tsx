import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-5 md:py-7 card-elegant backdrop-blur-xl border-b border-brand-slate-light/20 dark:border-brand-slate/20 transition-all duration-300 shadow-soft">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="font-sans text-xl sm:text-2xl font-bold text-brand-blue-dark tracking-tight transition-colors duration-300">
              Agenticoslabs
            </span>
          </div>

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
                className="card-elegant p-3 rounded-xl hover:scale-110 hover:shadow-soft-lg transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-soft group"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <Moon className="w-6 h-6 text-brand-blue-mid soft-glow" />
                ) : (
                  <Sun className="w-6 h-6 text-brand-amber-mid soft-glow" />
                )}
              </button>
            </li>
            <li>
              <a
                href="#demo-form"
                className="shine-effect inline-block bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:-translate-y-2 hover:shadow-elegant-hover transition-all duration-500 min-h-[48px] flex items-center relative overflow-hidden group shadow-elegant border border-white/20"
                aria-label="Request a demo"
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Request Demo</span>
              </a>
            </li>
          </ul>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="card-elegant p-3 rounded-xl hover:scale-110 hover:shadow-soft-lg transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-soft"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-brand-blue-mid soft-glow" />
              ) : (
                <Sun className="w-6 h-6 text-brand-amber-mid soft-glow" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="card-elegant p-3 rounded-xl hover:scale-110 hover:shadow-soft-lg transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-soft"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-brand-coral-mid soft-glow" />
              ) : (
                <Menu className="w-7 h-7 text-brand-teal-mid soft-glow" />
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-brand-slate-light/20 dark:border-brand-slate/20 animate-fadeInUp card-elegant rounded-b-2xl -mx-4 px-4 shadow-soft-lg">
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
                  className="shine-effect block text-center bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:shadow-elegant-hover hover:scale-105 transition-all duration-500 min-h-[52px] shadow-elegant border border-white/20 flex items-center justify-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Request Demo</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
