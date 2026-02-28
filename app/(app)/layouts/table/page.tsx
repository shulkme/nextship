'use client';
import { data } from '@/app/(app)/layouts/table/mock';
import Pager from '@/components/pager';
import { Table } from 'antd';

export default function Page() {
  return (
    <Pager
      size="large"
      title={'Table'}
      description={'Use Table for structured data with comparison.'}
    >
      <Table
        pagination={{
          showTotal: (total) => `Total ${total} items`,
        }}
        scroll={{
          x: 768,
        }}
        rowKey="key"
        dataSource={data}
        columns={[
          {
            title: 'Date',
            dataIndex: 'date',
          },
          {
            title: 'Type',
            dataIndex: 'type',
          },
          {
            title: 'Amount',
            dataIndex: 'amount',
          },
          {
            title: 'Payment Method',
            dataIndex: 'payment',
          },
          {
            title: 'Status',
            dataIndex: 'status',
          },
        ]}
      />
    </Pager>
  );
}
