'use client';

import { Button, Result } from 'antd';

/**
 * Global Error Component
 * This catches errors in the root layout
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen p-4">
          <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
              <Button type="primary" onClick={reset}>
                Try Again
              </Button>
            }
          />
        </div>
      </body>
    </html>
  );
}
