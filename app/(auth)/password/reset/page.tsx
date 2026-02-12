'use client';
import { Button, Form, Input } from 'antd';

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Reset Password</h1>
      <p className="text-center mb-12 text-neutral-500">
        Please enter a new password below to change your password.
      </p>
      <Form variant="filled" layout="vertical" size="large">
        <Form.Item>
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Confim Password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary">
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
