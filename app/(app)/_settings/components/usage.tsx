import { Table } from 'antd';
import React from 'react';
const UsagePane: React.FC = () => {
  return (
    <>
      <Table
        pagination={{
          showTotal: (total) => `Total ${total} items`,
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
    </>
  );
};

export default UsagePane;
