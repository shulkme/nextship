'use client';

import { Button, Result } from 'antd';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/**
 * Not Found Component
 * This is displayed when a page is not found (404)
 */
export default function NotFound() {
  const t = useTranslations('error.404');

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Result
        status="404"
        title={t('title')}
        subTitle={t('subtitle')}
        extra={
          <Link href="/">
            <Button type="primary">{t('backHome')}</Button>
          </Link>
        }
      />
    </div>
  );
}
