'use client';
import Google from '@/icons/google';
import { Button, Divider, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('auth');

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">
        {t('signup.title')}
      </h1>
      <p className="text-center mb-12 text-neutral-500">
        {t('signup.subtitle')} <a href="/login">{t('signup.loginLink')}</a>
      </p>
      <div>
        <Button size="large" icon={<Google width={18} height={18} />} block>
          {t('common.googleContinue')}
        </Button>
      </div>
      <Divider plain>{t('common.dividerOr')}</Divider>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input placeholder={t('common.email')} />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder={t('common.password')} />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            {t('common.continue')}
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center text-neutral-500 text-xs">
            {t('signup.agreement')}{' '}
            <a href={process.env.NEXT_PUBLIC_SERVICE_AGREEMENT}>
              {t('signup.termsOfService')}
            </a>{' '}
            {t('signup.and')}{' '}
            <a href={process.env.NEXT_PUBLIC_PRIVACY_POLICY}>
              {t('signup.privacyPolicy')}
            </a>{' '}
            .
          </p>
        </Form.Item>
      </Form>
    </>
  );
}
