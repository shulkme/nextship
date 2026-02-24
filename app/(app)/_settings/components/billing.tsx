import { RiBankCardLine } from '@remixicon/react';
import { Avatar, Button, Card } from 'antd';
import React from 'react';
const BillingPane: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-base mb-2">Current Plan</h3>
        <Card>
          <div className="flex items-center">
            <div className="flex-auto">
              <h3 className="font-bold text-base">Free Plan</h3>
              <p className="text-neutral-400">Next reset time: 2026-01-01</p>
            </div>
            <div className="flex-none">
              <Button type="primary">Upgrade</Button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <h3 className="font-medium text-base mb-2">Payment Method</h3>
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-none">
              <Avatar
                className="bg-transparent text-neutral-400 border border-(--ant-color-border)"
                icon={<RiBankCardLine size={24} />}
                shape="square"
                size={48}
              />
            </div>
            <div className="flex-auto">
              <h3 className="font-medium">No payment method added</h3>
              <p className="text-neutral-400">
                Add a payment method to your account.
              </p>
            </div>
            <div className="flex-none">
              <Button>Add Card</Button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <h3 className="font-medium text-base mb-2">Invoices</h3>
        <Card>
          <div className="flex items-center gap-4">
            <div className="flex-auto">
              <h3 className="font-medium">Invoices</h3>
              <p className="text-neutral-400">
                View invoice records for previous subscription periods.
              </p>
            </div>
            <div className="flex-none">
              <Button>Get Invoices</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BillingPane;
