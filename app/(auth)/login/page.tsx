'use client';
import Google from '@/icons/google';
import { Button, Divider, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('auth');

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">
        {t('login.title')}
      </h1>
      <p className="text-center mb-12 text-neutral-500">
        {t('login.subtitle')} <a href="/signup">{t('login.signupLink')}</a>
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
            {t('login.submit')}
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center">
            <a
              href="/password/forgot"
              className="text-neutral-500 underline hover:text-primary-500"
            >
              {t('login.forgotPassword')}
            </a>
          </p>
        </Form.Item>
      </Form>
    </>
  );
}
