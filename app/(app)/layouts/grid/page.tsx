import { data } from '@/app/(app)/layouts/grid/mock';
import Pager from '@/components/pager';
import { dayjs, setDayjsLocale } from '@/lib/dayjs';
import { Card } from 'antd';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations('app.layouts.grid');

  // Set dayjs locale for server-side rendering
  setDayjsLocale(locale);

  return (
    <Pager title={t('title')} description={t('description')} size="large">
      <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              classNames={{
                body: 'p-3',
              }}
            >
              <div className="w-full relative overflow-hidden aspect-3/2 bg-(--ant-color-fill-tertiary) rounded-sm">
                <Image
                  className="absolute inset-0 hover:scale-110 transition-all duration-300"
                  src={item.data.cover}
                  fill
                  alt={item.data.title}
                  unoptimized
                />
              </div>
              <div className="pt-3">
                <h3 className="text-sm">{t('untitled')}</h3>
                <p className="text-xs text-(--ant-color-text-description)">
                  {t('lastRefined', { date: dayjs().format('LL') })}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Pager>
  );
}
