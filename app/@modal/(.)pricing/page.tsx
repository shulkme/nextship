'use client';

import PricingContent from '@/app/_pricing';
import { ArrowUpRightStroke } from '@boxicons/react';
import { Modal } from 'antd';
import { useRouter } from 'next/navigation';

export default function PricingModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal
      className="max-w-none h-screen top-0 m-0"
      classNames={{
        container: 'rounded-none h-full overflow-hidden p-0',
        // wrapper: 'transform-none',
        body: 'h-full overflow-auto p-6',
      }}
      footer={false}
      open
      mask={false}
      onCancel={handleClose}
      width="100vw"
    >
      <div className="max-w-7xl mx-auto">
        <div className="py-16">
          <PricingContent />
        </div>
        <div className="text-center">
          <a className="inline-flex items-center gap-1" href="#">
            <span>Manage Billing</span>
            <ArrowUpRightStroke size="xs" />
          </a>
        </div>
      </div>
    </Modal>
  );
}
