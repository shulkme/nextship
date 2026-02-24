'use client';
import Plans from '@/app/_pricing/components/plans';
import { Segmented } from 'antd';
import React, { useState } from 'react';
const PricingContent: React.FC = () => {
  const [mode, setMode] = useState<'monthly' | 'annual'>('monthly');
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center">Pricing</h2>
      <p className="text-base text-neutral-500 mb-6 text-center">
        Free to start. Flexible to scale.
      </p>
      <div className="mb-8 text-center">
        <Segmented
          value={mode}
          options={[
            {
              label: 'Monthly',
              value: 'monthly',
            },
            {
              label: (
                <>
                  <span>Annual</span>
                  <span> • </span>
                  <span className="text-primary-500 font-medium">
                    Save 16.7%
                  </span>
                </>
              ),
              value: 'annual',
            },
          ]}
          onChange={setMode}
        />
      </div>
      <Plans mode={mode} />
    </div>
  );
};

export default PricingContent;
