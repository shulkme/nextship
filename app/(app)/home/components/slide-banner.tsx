'use client';
import { Carousel, ConfigProvider } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Banner: React.FC<{
  title: string;
  desc: string;
  image: string;
}> = ({ title, desc, image }) => {
  return (
    <div className="w-full bg-(--ant-color-fill-tertiary) flex">
      <div className="flex flex-auto flex-col justify-center gap-2 py-4 px-6">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-neutral-400 text-xs">{desc}</p>
      </div>
      <div className="flex-none h-24">
        <img className="h-full w-auto" src={image} alt={title} />
      </div>
    </div>
  );
};

const SlideBanner: React.FC = () => {
  const t = useTranslations('app.home.slideBanner');

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            colorBgContainer: '#ccc',
          },
        },
      }}
    >
      <div className="w-lg max-w-full">
        <Carousel
          className="[&>.slick-list]:rounded-lg [&>.slick-list]:overflow-hidden [&>.slick-dots]:-bottom-4"
          autoplay={{ dotDuration: true }}
          autoplaySpeed={5000}
        >
          <Banner
            title={t('personalize.title')}
            desc={t('personalize.desc')}
            image={
              'https://files.manuscdn.com/webapp/_next/static/media/personalizationAdCardLight.2b0d3502.webp'
            }
          />
          <Banner
            title={t('skills.title')}
            desc={t('skills.desc')}
            image={
              'https://files.manuscdn.com/webapp/_next/static/media/skillAdCardLight.574de9ed.webp'
            }
          />
          <Banner
            title={t('agent.title')}
            desc={t('agent.desc')}
            image={
              'https://files.manuscdn.com/webapp/_next/static/media/telegramAdCardLight.efb2a9fd.png'
            }
          />
        </Carousel>
      </div>
    </ConfigProvider>
  );
};

export default SlideBanner;
