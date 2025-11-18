import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ size = 'md', text, fullScreen = false }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <Loader2 className={`${sizeClasses[size]} text-brand-teal-mid animate-spin`} />
        <div className="absolute inset-0 blur-lg opacity-50">
          <Loader2 className={`${sizeClasses[size]} text-brand-emerald-mid animate-spin`} />
        </div>
      </div>
      {text && (
        <p className={`${textSizeClasses[size]} font-medium text-text-light-secondary dark:text-text-dark-secondary text-center`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-light-primary/95 dark:bg-dark-primary/95 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-light-secondary/90 dark:bg-dark-secondary/90 backdrop-blur-md rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-4 p-12">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
}

// Additional skeleton loader for content
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-light-tertiary dark:bg-dark-tertiary rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-light-tertiary dark:bg-dark-tertiary rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-light-tertiary dark:bg-dark-tertiary rounded w-5/6"></div>
    </div>
  );
}

// Loading card component
export function LoadingCard() {
  return (
    <div className="bg-light-secondary/90 dark:bg-dark-secondary/90 p-6 rounded-2xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-2 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-light-tertiary dark:bg-dark-tertiary"></div>
        <div className="flex-1">
          <div className="h-4 bg-light-tertiary dark:bg-dark-tertiary rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-light-tertiary dark:bg-dark-tertiary rounded w-3/4"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-light-tertiary dark:bg-dark-tertiary rounded"></div>
        <div className="h-3 bg-light-tertiary dark:bg-dark-tertiary rounded w-5/6"></div>
        <div className="h-3 bg-light-tertiary dark:bg-dark-tertiary rounded w-4/6"></div>
      </div>
    </div>
  );
}
