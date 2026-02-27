import Listy from '@/components/listy';
import GoogleDrive from '@/icons/google-drive';
import Notion from '@/icons/notion';
import Slack from '@/icons/slack';
import { Avatar, Button } from 'antd';
import React from 'react';
const ConnectionsPane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
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
          action={<Button key="button">Connect</Button>}
        />
        <Listy.Item
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
          action={<Button key="button">Connect</Button>}
        />
        <Listy.Item
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
          action={<Button key="button">Connect</Button>}
        />
      </Listy>
    </>
  );
};

export default ConnectionsPane;
