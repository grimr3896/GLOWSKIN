import React, { Component, ReactNode, ErrorInfo } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary Caught:', error, errorInfo);
    // Log to error tracking service (e.g., Sentry) here
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#1A0809] flex items-center justify-center p-6 text-slate-300">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-[#0A0E27] border border-[#FF6B6B] rounded-xl p-8 text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#FF6B6B]">
              <AlertCircle className="text-[#FF6B6B]" size={32} />
            </div>

            <h1 className="font-serif text-2xl text-white italic mb-3">Something Went Wrong</h1>
            <p className="text-[#B0B0B0] text-sm mb-6 leading-relaxed">
              An unexpected error occurred. Please try reloading the page.
            </p>

            <details className="mb-6 text-left">
              <summary className="text-xs text-[#B0B0B0] uppercase tracking-widest cursor-pointer hover:text-white">
                Error Details
              </summary>
              <pre className="mt-3 bg-black/40 p-3 rounded text-[#FF6B6B] text-[10px] overflow-auto max-h-32 border border-[#FF6B6B]/20 font-mono">
                {this.state.error?.message}
              </pre>
            </details>

            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full flex items-center justify-center gap-2 bg-[#00E5FF] text-black py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition"
              >
                <RotateCcw size={16} />
                Try Again
              </button>
              <a
                href="/"
                className="block w-full border border-[#1DB679] text-[#1DB679] py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-[#1DB679]/10 transition text-center"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
