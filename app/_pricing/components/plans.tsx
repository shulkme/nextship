'use client';
import { RiCheckLine } from '@remixicon/react';
import { Button, Card, Tag } from 'antd';
import React from 'react';

const DISCOUNT = 0.167;

const discountedPrice = (price: number, mode: 'monthly' | 'annual') => {
  if (mode === 'monthly') return price;
  return (price * (1 - DISCOUNT)).toLocaleString('en-US', {
    maximumFractionDigits: 1,
  });
};

const Plans: React.FC<{
  mode: 'monthly' | 'annual';
}> = ({ mode = 'annual' }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">Free</h3>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">$0</strong>
            <span className="text-neutral-400">/ mo</span>
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">For getting started</p>
          </div>
          <div className="mb-4">
            <Button color="default" variant="filled" block>
              Current Plan
            </Button>
          </div>
          <div>
            <ul>
              <li className="space-y-2">
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>25</strong> credits per month
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>2GB</strong> disk space
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    Create up to <strong>200</strong> projects
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Unlimited project sharing</span>
                </li>
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">Pro</h3>
            {mode === 'annual' && <Tag color="blue">{DISCOUNT * 100} %</Tag>}
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">${discountedPrice(20, mode)}</strong>
            <span className="text-neutral-400">/ mo</span>
            {mode === 'annual' && (
              <span className="line-through text-neutral-400 font-medium">
                $20
              </span>
            )}
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">Unlock more features</p>
          </div>
          <div className="mb-4">
            <Button color="primary" variant="filled" block>
              Upgrade
            </Button>
          </div>
          <div>
            <ul>
              <li className="space-y-2">
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>100</strong> credits per month
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>100GB</strong> disk space
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Unlimited project sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Credits rollovers</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Custom domain</span>
                </li>
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold">Max</h3>
            {mode === 'annual' && <Tag color="blue">{DISCOUNT * 100} %</Tag>}
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <strong className="text-3xl">${discountedPrice(100, mode)}</strong>
            <span className="text-neutral-400">/ mo</span>
            {mode === 'annual' && (
              <span className="line-through text-neutral-400 font-medium">
                $100
              </span>
            )}
          </div>
          <div className="mb-6">
            <p className="text-neutral-400">Full access to the best</p>
          </div>
          <div className="mb-4">
            <Button color="primary" variant="solid" block>
              Upgrade
            </Button>
          </div>
          <div>
            <ul>
              <li className="space-y-2">
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>500</strong> credits per month
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>100GB</strong> disk space
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Unlimited project sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Credits rollovers</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine size={16} />
                  <span>
                    <strong>2x</strong> compute resources (versus Pro)
                  </span>
                </li>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Plans;
