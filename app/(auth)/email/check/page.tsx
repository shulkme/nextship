'use client';
import { Button, Form, Input } from 'antd';

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-4">Verify email</h1>
      <p className="text-center mb-12 text-neutral-500">
        A verification code has been sent to <strong>xxx@example.com</strong>.
        Please check your <strong>inbox</strong> and{' '}
        <strong>spam folder</strong> .
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
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Button disabled block type="text">
            Resend code (60s)
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
