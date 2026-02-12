'use client';
import { RiArrowLeftLine } from '@remixicon/react';
import { Button, Form, Input } from 'antd';

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Forget Password</h1>
      <p className="text-center mb-12 text-neutral-500">
        We will sent you a link to reset your password.
      </p>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            Continue
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            href="/login"
            block
            type="text"
            icon={<RiArrowLeftLine size={18} />}
          >
            Back to login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
