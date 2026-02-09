import { Button, Result } from 'antd';
import Link from 'next/link';

/**
 * Not Found Component
 * This is displayed when a page is not found (404)
 */
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}
