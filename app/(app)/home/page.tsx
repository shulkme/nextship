'use client';

import CreditsPopover from '@/app/(app)/home/components/credits-popover';
import { RiNotification3Line, RiUserLine } from '@remixicon/react';
import { Avatar, Button, Tooltip } from 'antd';

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className=""></div>
        <div className="flex items-center gap-3">
          <Tooltip title={'Notifications'}>
            <Button shape="circle" icon={<RiNotification3Line size={18} />} />
          </Tooltip>

          <CreditsPopover />

          <Avatar icon={<RiUserLine size={18} />} />
        </div>
      </div>
      <div>main</div>
    </div>
  );
}
