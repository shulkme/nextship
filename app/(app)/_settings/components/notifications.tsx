'use client';
import Listy from '@/components/listy';
import { Switch } from 'antd';
import React from 'react';
const NotificationsPane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
          title={'Responses'}
          description={`Get notified when ${process.env.NEXT_PUBLIC_APP_NAME} responds to requests that take time, like research or image generation.`}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={'Tasks'}
          description={`Get notified when tasks you’ve created have updates.`}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={'Projects'}
          description={`Get notified when you receive an email invitation to a shared project.`}
          action={<Switch key="switch" defaultChecked />}
        />
        <Listy.Item
          title={'Recommendations'}
          description={`Stay in the loop on new tools, tips, and features from ${process.env.NEXT_PUBLIC_APP_NAME}.`}
          action={<Switch key="switch" defaultChecked />}
        />
      </Listy>
    </>
  );
};

export default NotificationsPane;
