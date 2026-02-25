'use client';
import { List, Switch } from 'antd';
import React from 'react';
const NotificationsPane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[<Switch size="small" key="switch" defaultChecked />]}
        >
          <List.Item.Meta
            title={'Responses'}
            description={`Get notified when ${process.env.NEXT_PUBLIC_APP_NAME} responds to requests that take time, like research or image generation.`}
          />
        </List.Item>
        <List.Item
          actions={[<Switch size="small" key="switch" defaultChecked />]}
        >
          <List.Item.Meta
            title={'Tasks'}
            description={`Get notified when tasks you’ve created have updates.`}
          />
        </List.Item>
        <List.Item
          actions={[<Switch size="small" key="switch" defaultChecked />]}
        >
          <List.Item.Meta
            title={'Projects'}
            description={`Get notified when you receive an email invitation to a shared project.`}
          />
        </List.Item>
        <List.Item
          actions={[<Switch size="small" key="switch" defaultChecked />]}
        >
          <List.Item.Meta
            title={'Recommendations'}
            description={`Stay in the loop on new tools, tips, and features from ${process.env.NEXT_PUBLIC_APP_NAME}.`}
          />
        </List.Item>
      </List>
    </>
  );
};

export default NotificationsPane;
