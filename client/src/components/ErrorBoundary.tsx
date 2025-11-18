import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-light-primary dark:bg-dark-primary flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-light-secondary/90 dark:bg-dark-secondary/90 backdrop-blur-sm rounded-3xl border border-brand-slate-light/30 dark:border-brand-slate/30 shadow-elevation-4 p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6 shadow-elevation-3">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
                Oops! Something went wrong
              </h1>

              <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-8 max-w-lg">
                We apologize for the inconvenience. An unexpected error has occurred. Our team has been notified and is working on a fix.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <details className="w-full mb-8 text-left bg-light-primary/50 dark:bg-dark-primary/50 rounded-xl p-4 border border-brand-slate-light/20 dark:border-brand-slate/20">
                  <summary className="cursor-pointer font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary font-mono overflow-auto">
                    <p className="mb-2">
                      <strong>Error:</strong> {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="whitespace-pre-wrap text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={this.handleReset}
                  className="inline-block bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-elevation-4 transition-all duration-300 shadow-elevation-3"
                >
                  Try Again
                </button>
                <a
                  href="/"
                  className="inline-block bg-light-primary/80 dark:bg-dark-tertiary/80 backdrop-blur-sm text-text-light-primary dark:text-text-dark-primary border-2 border-border-light dark:border-border-dark px-8 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-elevation-3 hover:border-brand-teal-mid transition-all duration-300"
                >
                  Go to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
