'use client';
import { data } from '@/app/(app)/layouts/table/mock';
import Pager from '@/components/pager';
import { Table } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.layouts.table');

  return (
    <Pager size="large" title={t('title')} description={t('description')}>
      <Table
        pagination={{
          showTotal: (total) => t('pagination.total', { total }),
        }}
        scroll={{
          x: 768,
        }}
        rowKey="key"
        dataSource={data}
        columns={[
          {
            title: t('columns.date'),
            dataIndex: 'date',
          },
          {
            title: t('columns.type'),
            dataIndex: 'type',
          },
          {
            title: t('columns.amount'),
            dataIndex: 'amount',
          },
          {
            title: t('columns.paymentMethod'),
            dataIndex: 'payment',
          },
          {
            title: t('columns.status'),
            dataIndex: 'status',
          },
        ]}
      />
    </Pager>
  );
}
