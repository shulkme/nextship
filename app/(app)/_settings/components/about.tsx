'use client';
import Listy from '@/components/listy';
import { Button } from 'antd';
import React from 'react';
const AboutPane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
          title={'Terms of Use'}
          action={
            <Button className="px-4" size="small" key="button">
              View
            </Button>
          }
        />
        <Listy.Item
          title={'Privacy Policy'}
          action={
            <Button className="px-4" size="small" key="button">
              View
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default AboutPane;
