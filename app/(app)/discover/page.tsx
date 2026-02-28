'use client';
import Apps from '@/app/(app)/discover/components/apps';
import Banner from '@/app/(app)/discover/components/banner';
import Inspirations from '@/app/(app)/discover/components/inspirations';
import Pager from '@/components/pager';

export default function Page() {
  return (
    <Pager title={'Discover'}>
      <div className="space-y-12">
        <Banner />
        <Apps />
        <Inspirations />
      </div>
    </Pager>
  );
}
