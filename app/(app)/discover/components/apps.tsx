'use client';
import { apps } from '@/app/(app)/discover/mock';
import SliderScroller from '@/components/slider-scroller';
import React from 'react';

const AppItem: React.FC<{
  title?: string;
  desc?: string;
  image?: string;
}> = ({ title, image, desc }) => {
  return (
    <div className="w-64 aspect-square relative bg-neutral-100 rounded-lg overflow-hidden group/item">
      <img
        className="absolute inset-0 object-cover transition-all group-hover/item:scale-110"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-0 inset-x-0 p-4 text-white">
        <h3 className="text-base font-bold mb-1">{title}</h3>
        <p className="text-sm font-light leading-tight">{desc}</p>
      </div>
    </div>
  );
};

const Apps: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4">Quick apps</h3>
      <div>
        <SliderScroller
          classNames={{
            scroller: 'gap-2 sm:gap-3 md:gap-4',
          }}
        >
          {apps.map((app, index) => (
            <AppItem key={index} {...app} />
          ))}
        </SliderScroller>
      </div>
    </section>
  );
};

export default Apps;
