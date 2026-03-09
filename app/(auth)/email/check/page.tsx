'use client';
import { Button, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('auth');

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">
        {t('verify.title')}
      </h1>
      <p className="text-center mb-12 text-neutral-500">
        {t.rich('verify.subtitle', {
          email: () => <strong>xxx@example.com</strong>,
          inbox: () => <strong>{t('verify.inbox')}</strong>,
          spam: () => <strong>{t('verify.spam')}</strong>,
        })}
      </p>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input.OTP
            className="flex justify-between"
            classNames={{
              input: 'px-3.5',
            }}
            length={6}
            separator={(i) => i === 2 && <span>-</span>}
          />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            {t('verify.submit')}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button disabled block type="text">
            {t('verify.resend', { seconds: 60 })}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
