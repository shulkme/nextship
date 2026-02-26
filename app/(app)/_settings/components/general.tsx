'use client';
import Listy from '@/components/listy';
import { defaultLocale, languages } from '@/i18n/config';
import { RiComputerLine, RiMoonLine, RiSunLine } from '@remixicon/react';
import { Button, Segmented, Select, Switch } from 'antd';
import React from 'react';
const GeneralPane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
          title={'Language'}
          description={'Select your preferred language'}
          action={
            <Select
              defaultValue={defaultLocale}
              className="w-32"
              size="small"
              key="select"
              options={languages}
            />
          }
        />
        <Listy.Item
          title={'Theme'}
          description={'Choose your preferred color scheme'}
          action={
            <Segmented
              classNames={{
                label: 'flex items-center',
              }}
              size="small"
              key="segmented"
              options={[
                {
                  value: 'light',
                  icon: <RiSunLine size={16} />,
                },
                {
                  value: 'dark',
                  icon: <RiMoonLine size={16} />,
                },
                {
                  value: 'system',
                  icon: <RiComputerLine size={16} />,
                },
              ]}
            />
          }
        />
        <Listy.Item
          title={'Suggestions'}
          description={`Get relevant in-chat suggestions to refine your project.`}
          action={<Switch size="small" key="switch" defaultChecked />}
        />
        <Listy.Item
          title={'Manage Cookies'}
          action={
            <Button className="px-4" size="small" key="button">
              Manage
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default GeneralPane;
