'use client';
import { RiArrowLeftLine } from '@remixicon/react';
import { Button, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('auth');

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">
        {t('forgot.title')}
      </h1>
      <p className="text-center mb-12 text-neutral-500">
        {t('forgot.subtitle')}
      </p>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input placeholder={t('common.email')} />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            {t('common.continue')}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            href="/login"
            block
            type="text"
            icon={<RiArrowLeftLine size={18} />}
          >
            {t('forgot.backToLogin')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
