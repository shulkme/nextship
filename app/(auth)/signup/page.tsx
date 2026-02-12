'use client';
import Google from '@/icons/google';
import { Button, Divider, Form, Input } from 'antd';

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Get Started</h1>
      <p className="text-center mb-12 text-neutral-500">
        Already have an account? <a href="/login">Log in now →</a>
      </p>
      <div>
        <Button size="large" icon={<Google width={18} height={18} />} block>
          Continue with Google
        </Button>
      </div>
      <Divider plain>OR</Divider>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            Continue
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center text-neutral-500 text-xs">
            By signing up, you agree to the{' '}
            <a href={process.env.NEXT_PUBLIC_SERVICE_AGREEMENT}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href={process.env.NEXT_PUBLIC_PRIVACY_POLICY}>Privacy Policy</a>{' '}
            .
          </p>
        </Form.Item>
      </Form>
    </>
  );
}
