'use client';

import Chatbox from '@/app/(app)/home/components/chatbox';
import CreditsPopover from '@/app/(app)/home/components/credits-popover';
import SlideBanner from '@/app/(app)/home/components/slide-banner';
import {
  RiBrushAiLine,
  RiNotification3Line,
  RiSlideshow3Line,
  RiSmartphoneLine,
  RiWindowLine,
} from '@remixicon/react';
import { Alert, Button, Tooltip } from 'antd';

export default function Page() {
  return (
    <div className="w-full flex-auto h-screen px-4 flex flex-col overflow-hidden">
      <div className="flex-none sticky top-0 flex items-center justify-between py-4">
        <div></div>
        <div className="flex items-center gap-3">
          <Tooltip title={'Notifications'}>
            <Button shape="circle" icon={<RiNotification3Line size={18} />} />
          </Tooltip>
          <CreditsPopover />
        </div>
      </div>
      <div className="mt-[20vh] max-w-full sm:max-w-3xl w-full mx-auto">
        <div className="flex relative flex-col items-center gap-10 mb-10">
          <div className="absolute -top-10 left-1/2 -translate-y-full -translate-x-1/2">
            <Alert
              classNames={{
                root: 'border-none',
                title: 'whitespace-nowrap',
              }}
              type="info"
              showIcon
              icon={
                <span className="inline-block text-xs rounded-full px-2 py-1 bg-primary-500 text-white font-medium">
                  New
                </span>
              }
              title={'The next version is already available!'}
              action={
                <a className="font-medium whitespace-nowrap">
                  Start free trial
                </a>
              }
            />
          </div>
          <h1 className="font-serif text-4xl">What can I do for you?</h1>
        </div>
        <Chatbox />
        <div className="flex flex-col items-center mt-6">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Button shape="round" icon={<RiSlideshow3Line size={18} />}>
              Create slides
            </Button>
            <Button shape="round" icon={<RiWindowLine size={18} />}>
              Build website
            </Button>
            <Button shape="round" icon={<RiSmartphoneLine size={18} />}>
              Develop apps
            </Button>
            <Button shape="round" icon={<RiBrushAiLine size={18} />}>
              Design
            </Button>
            <Button shape="round">More</Button>
          </div>
        </div>
      </div>
      <div className="pt-6 mt-auto mb-12 flex justify-center">
        <SlideBanner />
      </div>
    </div>
  );
}
