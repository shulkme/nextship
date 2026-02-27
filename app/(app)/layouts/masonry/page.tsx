'use client';
import { data } from '@/app/(app)/layouts/masonry/mock';
import Pager from '@/components/pager';
import Toggle from '@/components/toggle';
import { Avatar, Masonry } from 'antd';
import Image from 'next/image';

export default function Page() {
  const items = data;
  return (
    <Pager
      size="large"
      title={'Masonry'}
      description={'Use Masonry for visual galleries with uneven heights.'}
    >
      <div className="sticky top-0 z-10 bg-background overflow-auto py-4">
        <Toggle.Group
          defaultValue="all"
          options={[
            {
              label: 'All',
              value: 'all',
            },
            {
              label: 'Branding',
              value: 'branding',
            },
            {
              label: 'Posters & Ads',
              value: 'posters_and_ads',
            },
            {
              label: 'Illustration',
              value: 'illustration',
            },
            {
              label: 'UI Layout',
              value: 'ui_layout',
            },
            {
              label: 'Character Design',
              value: 'character_design',
            },

            {
              label: 'Video & Storyboards',
              value: 'video_and_storyboards',
            },

            {
              label: 'Product Design',
              value: 'product_design',
            },

            {
              label: 'Architectural Design',
              value: 'architectural_design',
            },
          ]}
        />
      </div>
      <div className="">
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          gutter={{ xs: 8, sm: 12, md: 16 }}
          items={items}
          itemRender={({ data }) => (
            <div className="">
              <div
                className="w-full relative bg-neutral-100 rounded-lg overflow-hidden"
                style={{
                  paddingBottom: `${(data.height / data.width) * 100}%`,
                }}
              >
                <Image
                  fill
                  className="absolute inset-0 hover:scale-105 transition-all"
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
