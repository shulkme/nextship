'use client';

import { Button, Result } from 'antd';
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Here you can also send error to error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="flex items-center justify-center min-h-screen p-4">
          <Result
            status="error"
            title="Oops! Something went wrong"
            subTitle={
              process.env.NODE_ENV === 'development'
                ? this.state.error?.message
                : 'We encountered an unexpected error. Please try again.'
            }
            extra={[
              <Button type="primary" key="retry" onClick={this.handleReset}>
                Try Again
              </Button>,
              <Button
                key="home"
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                Go Home
              </Button>,
            ]}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
