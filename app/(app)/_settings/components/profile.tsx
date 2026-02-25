'use client';
import { Button, List, Typography } from 'antd';
import React from 'react';

const ProfilePane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[
            <Button className="px-4" key="edit" size="small">
              Edit
            </Button>,
          ]}
        >
          <List.Item.Meta title={'Name'} description={'Shulk Steve'} />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={'UUID'}
            description={
              <Typography.Text copyable type="secondary">
                xxxx-xxxx-xxxx-xxxx
              </Typography.Text>
            }
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={'Email'}
            description={
              <Typography.Text copyable type="secondary">
                xxx@example.com
              </Typography.Text>
            }
          />
        </List.Item>
        <List.Item
          actions={[
            <Button danger className="px-4" key="edit" size="small">
              Delete
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={'Delete Account'}
            description={
              <Typography.Text type="secondary">
                This will delete your account and all associated data.
              </Typography.Text>
            }
          />
        </List.Item>
      </List>
    </>
  );
};

export default ProfilePane;
