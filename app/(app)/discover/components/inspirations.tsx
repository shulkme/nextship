'use client';
import { inspirations } from '@/app/(app)/discover/mock';
import Toggle from '@/components/toggle';
import { RiSparklingFill } from '@remixicon/react';
import { Button, Masonry } from 'antd';
import Image from 'next/image';
import React from 'react';
const Inspirations: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-medium">Inspirations</h3>
      <div className="py-6 bg-(--ant-layout-body-bg) sticky top-0 z-20">
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
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
          gutter={{ xs: 8, sm: 12, md: 16 }}
          items={inspirations}
          itemRender={({ data }) => (
            <div className="relative rounded-lg overflow-hidden group/item">
              <div className="absolute z-10 top-2 left-2 bg-black/30 backdrop-blur-sm text-xs text-white px-2 py-0.5 rounded-full">
                <span>Style</span>
              </div>
              <div
                className="w-full relative bg-(--ant-color-fill-tertiary)"
                style={{
                  paddingBottom: `${(data.height / data.width) * 100}%`,
                }}
              >
                <Image
                  fill
                  className="absolute inset-0 group-hover/item:scale-110 transition-all duration-300"
                  src={data.cover}
                  alt={data.title}
                  loading="lazy"
                  // width={data.width}
                  // height={data.height}
                />
              </div>
              <div className="absolute group-hover/item:translate-y-0 translate-y-full transition-all bottom-0 left-0 right-0 p-4 z-10 bg-linear-to-t from-black/60 to-transparent">
                <Button
                  shape="round"
                  className="border-0 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
                  block
                  icon={<RiSparklingFill size={18} />}
                >
                  Generate
                </Button>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Inspirations;
