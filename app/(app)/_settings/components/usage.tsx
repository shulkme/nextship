import { Card, ConfigProvider, Table } from 'antd';
import React from 'react';
const UsagePane: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            // headerBg: 'transparent',
            colorBgContainer: 'transparent',
          },
        },
      }}
    >
      <Card
        classNames={{
          body: 'p-0',
        }}
      >
        <Table
          classNames={{
            body: {
              row: '[&.ant-table-placeholder>td]:border-0',
            },
          }}
          columns={[
            {
              title: 'Detail',
            },
            {
              title: 'Type',
            },
            {
              title: 'Date',
            },
            {
              title: 'Credits change',
            },
          ]}
        />
      </Card>
    </ConfigProvider>
  );
};

export default UsagePane;
