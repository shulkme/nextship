'use client';
import { Button, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('auth');

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">
        {t('reset.title')}
      </h1>
      <p className="text-center mb-12 text-neutral-500">
        {t('reset.subtitle')}
      </p>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input.Password placeholder={t('reset.newPassword')} />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder={t('reset.confirmPassword')} />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            {t('reset.submit')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
