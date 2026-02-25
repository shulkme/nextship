'use client';
import { defaultLocale, languages } from '@/i18n/config';
import { RiComputerLine, RiMoonLine, RiSunLine } from '@remixicon/react';
import { Button, List, Segmented, Select, Switch } from 'antd';
import React from 'react';
const GeneralPane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[
            <Select
              defaultValue={defaultLocale}
              className="w-32"
              size="small"
              key="select"
              options={languages}
            />,
          ]}
        >
          <List.Item.Meta
            title={'Languages'}
            description={'Select your preferred language'}
          />
        </List.Item>
        <List.Item
          actions={[
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
            />,
          ]}
        >
          <List.Item.Meta
            title={'Theme'}
            description={'Choose your preferred color scheme'}
          />
        </List.Item>
        <List.Item
          actions={[<Switch size="small" key="switch" defaultChecked />]}
        >
          <List.Item.Meta
            title={'Suggestions'}
            description={`Get relevant in-chat suggestions to refine your project.`}
          />
        </List.Item>
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              Manage
            </Button>,
          ]}
        >
          <List.Item.Meta title={'Manage Cookies'} />
        </List.Item>
      </List>
    </>
  );
};

export default GeneralPane;
