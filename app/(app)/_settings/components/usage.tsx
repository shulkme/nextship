'use client';
import { Table } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const UsagePane: React.FC = () => {
  const t = useTranslations('app.settings.usage');
  return (
    <>
      <Table
        pagination={{
          showTotal: (total) => t('total', { total }),
        }}
        columns={[
          {
            title: t('columns.detail'),
          },
          {
            title: t('columns.type'),
          },
          {
            title: t('columns.date'),
          },
          {
            title: t('columns.creditsChange'),
          },
        ]}
      />
    </>
  );
};

export default UsagePane;
