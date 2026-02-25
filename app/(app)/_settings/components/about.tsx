'use client';
import { Button, List } from 'antd';
import React from 'react';
const AboutPane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              View
            </Button>,
          ]}
        >
          <List.Item.Meta title={'Terms of Use'} />
        </List.Item>
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              View
            </Button>,
          ]}
        >
          <List.Item.Meta title={'Privacy Policy'} />
        </List.Item>
      </List>
    </>
  );
};

export default AboutPane;
