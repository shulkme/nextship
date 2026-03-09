'use client';
import Apps from '@/app/(app)/discover/components/apps';
import Banner from '@/app/(app)/discover/components/banner';
import Inspirations from '@/app/(app)/discover/components/inspirations';
import Pager from '@/components/pager';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.discover');

  return (
    <Pager title={t('title')}>
      <div className="space-y-12">
        <Banner />
        <Apps />
        <Inspirations />
      </div>
    </Pager>
  );
}
