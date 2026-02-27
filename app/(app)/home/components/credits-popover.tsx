import { RiBardFill } from '@remixicon/react';
import { Button, Popover } from 'antd';
import React from 'react';

const CreditsPopover: React.FC = () => {
  return (
    <Popover
      placement="bottomRight"
      arrow={false}
      content={
        <div className="min-w-60">
          <div className="flex items-center">
            <div className="flex-auto">
              <h3 className="text-lg font-medium">Free</h3>
            </div>
            <div className="flex-none">
              <Button size="small" shape="round" type="primary">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <Button shape="round" icon={<RiBardFill size={18} />}>
        1,234
      </Button>
    </Popover>
  );
};

export default CreditsPopover;
