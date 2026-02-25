import GoogleDrive from '@/icons/google-drive';
import Notion from '@/icons/notion';
import Slack from '@/icons/slack';
import { Avatar, Button, List } from 'antd';
import React from 'react';
const ConnectionsPane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              Connect
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                className="bg-background border border-(--ant-color-border)"
                icon={<GoogleDrive />}
              />
            }
            title={'Google Drive'}
            description={
              'Connect Google Drive to import files into Knowledge Hub and use in your videos.'
            }
          />
        </List.Item>
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              Connect
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                className="bg-background border border-(--ant-color-border)"
                icon={<Notion />}
              />
            }
            title={'Notion'}
            description={
              'Connect Notion to pull content from your workspace into Knowledge Hub and video creation.'
            }
          />
        </List.Item>
        <List.Item
          actions={[
            <Button className="px-4" size="small" key="button">
              Connect
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                className="bg-background border border-(--ant-color-border)"
                icon={<Slack />}
              />
            }
            title={'Slack'}
            description={
              'Connect your Slack account to HeyGen and make videos from the comfort and familiarity of your Slack workspace.'
            }
          />
        </List.Item>
      </List>
    </>
  );
};

export default ConnectionsPane;
