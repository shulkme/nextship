'use client';
import { Button, Card, Result } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const KeysPane: React.FC = () => {
  const t = useTranslations('app.settings.keys');
  return (
    <>
      <p className="mb-4">{t('description')}</p>

      <Card className="border-dashed">
        <Result
          icon={false}
          subTitle={t('noKeysAdded')}
          extra={
            <>
              <Button>{t('newKey')}</Button>
            </>
          }
        />
      </Card>
    </>
  );
};

export default KeysPane;
