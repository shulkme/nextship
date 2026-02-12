'use client';
import Google from '@/icons/google';
import { Button, Divider, Form, Input } from 'antd';

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Welcome Back</h1>
      <p className="text-center mb-12 text-neutral-500">
        Don't have an account? <a href="/signup">Create your account →</a>
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
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <p className="text-center">
            <a
              href="/password/forgot"
              className="text-neutral-500 underline hover:text-primary-500"
            >
              Forgot password?
            </a>
          </p>
        </Form.Item>
      </Form>
    </>
  );
}
