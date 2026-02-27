'use client';
import Plans from '@/app/_pricing/components/plans';
import { RiArrowRightUpLine } from '@remixicon/react';
import { Card, Progress, Switch, Tag } from 'antd';
import React, { useMemo, useState } from 'react';
const PlansCreditsPane: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const mode = useMemo(() => {
    return annual ? 'annual' : 'monthly';
  }, [annual]);
  return (
    <>
      <Card>
        <h3 className="font-medium text-base mb-2">Credits remaining</h3>
        <div>
          <Progress percent={50} />
        </div>
        <div className="flex justify-between items-center gap-2 text-neutral-500 mt-1">
          <span>Credits reset on Feb 20</span>
          <span>100/200</span>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between py-6">
          <h3 className="font-medium text-base">Plans</h3>
          <div>
            <a className="inline-flex items-center gap-1" href="#">
              <span>Manage Billing</span>
              <RiArrowRightUpLine size={16} />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <Switch value={annual} onChange={setAnnual} />
          <span className="font-medium">Annual</span>
          <Tag color="green">Save 16.7%</Tag>
        </div>
        <Plans mode={mode} />
      </div>
    </>
  );
};

export default PlansCreditsPane;
