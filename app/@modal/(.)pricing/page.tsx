'use client';

import PricingContent from '@/app/_pricing';
import { RiArrowRightUpLine } from '@remixicon/react';
import { Modal } from 'antd';
import { useRouter } from 'next/navigation';

export default function PricingModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal
      className="max-w-none h-screen top-0"
      classNames={{
        container: 'rounded-none h-full',
        // wrapper: 'transform-none',
      }}
      footer={false}
      open
      mask={false}
      onCancel={handleClose}
      width="100vw"
    >
      <div className="py-16">
        <PricingContent />
      </div>
      <div className="text-center">
        <a className="inline-flex items-center gap-1" href="#">
          <span>Manage Billing</span>
          <RiArrowRightUpLine size={16} />
        </a>
      </div>
    </Modal>
  );
}
