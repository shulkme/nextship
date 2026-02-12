'use client';

import { Modal } from 'antd';
import { useRouter } from 'next/navigation';

export default function PricingModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal open onCancel={handleClose} title="Pricing" width={800}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">✅ Modal is working!</h2>
        <p>This modal is rendered via intercept route @modal/(.)pricing</p>
        <p className="mt-2 text-sm text-gray-500">
          Check the browser console for mount log.
        </p>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded">
          <p className="font-semibold">
            ✓ Soft navigation from (app) → Modal opens
          </p>
          <p className="font-semibold">✓ Hard refresh → Full page renders</p>
        </div>
      </div>
    </Modal>
  );
}
