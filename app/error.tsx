'use client';

import { Button, Result } from 'antd';
import { useEffect } from 'react';

/**
 * Next.js Error Component
 * This error component handles errors that occur in the root layout or pages
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught:', error);
    }

    // Here you can send error to error reporting service
    // logErrorToService(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Result
        status="error"
        title="Oops! Something went wrong"
        subTitle={
          process.env.NODE_ENV === 'development'
            ? error.message
            : 'We encountered an unexpected error. Please try refreshing the page.'
        }
        extra={[
          <Button type="primary" key="retry" onClick={reset}>
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
