import { Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
    onOpenPrivacy: () => void;
    onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="aurora-bg bg-gradient-to-b from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary border-t border-brand-slate-light/20 dark:border-brand-slate/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-gradient-alt pointer-events-none opacity-25" />
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-teal-mid/10 to-brand-emerald-mid/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue-mid/10 to-brand-teal-mid/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3 hover:scale-110 transition-all duration-500 cursor-pointer">
                            <img src="/logo.png" alt="Agenticoslabs Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                            <h3 className="font-sans text-2xl md:text-3xl font-bold text-gradient">
                                Agenticoslabs
                            </h3>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base">
                                <a href="#services" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    Services
                                </a>
                                <a href="#features" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    Features
                                </a>
                                <a href="#ag-ui" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    RAG Data Retrieval
                                </a>
                                <a href="#demo-form" className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110">
                                    Contact
                                </a>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/company/agenticoslabs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-elegant w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-soft-lg transition-all duration-500 group shadow-soft"
                                    aria-label="Visit Agenticoslabs on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 text-brand-blue-mid group-hover:text-brand-teal-mid soft-glow transition-all duration-300" />
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-elegant w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-soft-lg transition-all duration-500 group shadow-soft"
                                    aria-label="Visit Agenticoslabs on Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-brand-teal-mid group-hover:text-brand-emerald-mid soft-glow transition-all duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-brand-slate-light/20 dark:border-brand-slate/20 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm md:text-base text-center md:text-left font-medium">
                            &copy; {currentYear} Agenticoslabs. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base">
                            <button
                                onClick={onOpenPrivacy}
                                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={onOpenTerms}
                                className="text-text-light-secondary dark:text-text-dark-secondary font-bold hover:text-gradient transition-all duration-500 hover:scale-110"
                            >
                                Terms of Service
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
