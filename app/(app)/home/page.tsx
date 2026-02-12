'use client';
import Pager from '@/components/pager';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return <Pager title={t('app.page.dashboard.title')}></Pager>;
}
