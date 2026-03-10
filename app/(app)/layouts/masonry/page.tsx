'use client';
import { data } from '@/app/(app)/layouts/masonry/mock';
import Pager from '@/components/pager';
import Toggle from '@/components/toggle';
import { Avatar, Masonry } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Page() {
  const tLayout = useTranslations('app.layouts.masonry');
  const tCategories = useTranslations('app.discover.inspirations.categories');

  return (
    <Pager size="large" title={tLayout('title')} description={tLayout('description')}>
      <div className="sticky top-0 z-10 bg-(--ant-layout-body-bg) overflow-auto py-4">
        <Toggle.Group
          defaultValue="all"
          options={[
            {
              label: tCategories('all'),
              value: 'all',
            },
            {
              label: tCategories('branding'),
              value: 'branding',
            },
            {
              label: tCategories('postersAds'),
              value: 'posters_and_ads',
            },
            {
              label: tCategories('illustration'),
              value: 'illustration',
            },
            {
              label: tCategories('uiLayout'),
              value: 'ui_layout',
            },
            {
              label: tCategories('characterDesign'),
              value: 'character_design',
            },

            {
              label: tCategories('videoStoryboards'),
              value: 'video_and_storyboards',
            },

            {
              label: tCategories('productDesign'),
              value: 'product_design',
            },

            {
              label: tCategories('architecturalDesign'),
              value: 'architectural_design',
            },
          ]}
        />
      </div>
      <div>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          gutter={{ xs: 8, sm: 12, md: 16 }}
          items={data}
          itemRender={({ data }) => (
            <div className="">
              <div
                className="w-full relative bg-(--ant-color-fill-tertiary) rounded-lg overflow-hidden"
                style={{
                  paddingBottom: `${(data.height / data.width) * 100}%`,
                }}
              >
                <Image
                  fill
                  className="absolute inset-0 hover:scale-110 transition-all duration-300"
                  src={data.cover}
                  alt={data.title}
                  loading="lazy"
                  // width={data.width}
                  // height={data.height}
                />
              </div>
              <div className="flex items-center gap-2 pt-4 pb-3">
                <div className="flex-none">
                  <Avatar src={data.avatar} size={32}>
                    {data.author.charAt(0)}
                  </Avatar>
                </div>
                <div className="flex-auto">
                  <div className="line-clamp-1">{data.title}</div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </Pager>
  );
}
