import {
  RiArrowRightSLine,
  RiBardFill,
  RiBardLine,
  RiCalendarScheduleLine,
  RiQuestionLine,
} from '@remixicon/react';
import { Button, Popover } from 'antd';
import React from 'react';

const CreditsPopover: React.FC = () => {
  return (
    <Popover
      classNames={{
        container: 'p-4',
      }}
      placement="bottomRight"
      arrow={false}
      content={
        <div className="min-w-60">
          <div className="flex items-center pb-4 border-b border-dashed border-(--ant-color-border-secondary)">
            <div className="flex-auto">
              <h3 className="text-lg font-medium font-serif">Free</h3>
            </div>
            <div className="flex-none">
              <Button
                variant="solid"
                color="default"
                size="small"
                shape="round"
              >
                Upgrade
              </Button>
            </div>
          </div>
          <div className="pt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="flex items-center gap-2">
                  <RiBardLine size={18} />
                  <span className="font-medium text-sm">Credits</span>
                  <span className="text-neutral-400">
                    <RiQuestionLine size={16} />
                  </span>
                </h3>
                <span>1,234</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Free Credits</span>
                <span>1,234</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="flex items-center gap-2">
                  <RiCalendarScheduleLine size={18} />
                  <span className="font-medium text-sm">
                    Daily refresh credits
                  </span>
                  <span className="text-neutral-400">
                    <RiQuestionLine size={16} />
                  </span>
                </h3>
                <span>1,234</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 text-xs">
                <span>Refresh to 1,234 at 00:00 every day</span>
              </div>
            </div>
            <div>
              <a
                className="inline-flex items-center gap-1"
                href="#settings/usage"
              >
                <span>View usage</span>
                <span>
                  <RiArrowRightSLine size={16} />
                </span>
              </a>
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
