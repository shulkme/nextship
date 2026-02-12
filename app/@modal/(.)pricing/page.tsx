'use client';

import PricingContent from '@/app/_pricing';
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
      }}
      footer={false}
      open
      onCancel={handleClose}
      title="Pricing"
      width="100vw"
    >
      <PricingContent />
    </Modal>
  );
}
