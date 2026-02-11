import { RiGithubFill } from '@remixicon/react';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="flex flex-col mx-auto max-w-7xl items-center">
        <Image
          className="size-40"
          src="/images/logo.png"
          width={256}
          height={256}
          alt="logo"
        />
        <h1 className="text-5xl font-bold mt-8">
          {process.env.NEXT_PUBLIC_APP_NAME || 'NextShip'}
        </h1>
        <p className="text-xl text-neutral-500 mt-8">
          🚀 A production-ready Next.js starter template for building SaaS and
          global products
        </p>

        <div className="space-x-4 mt-12">
          <Button href="/dashboard" size="large" type="primary" shape="round">
            Get Started
          </Button>
          <Button
            size="large"
            icon={<RiGithubFill size={18} />}
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            shape="round"
          >
            Github
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
