'use client';
import Listy from '@/components/listy';
import { Button, Typography } from 'antd';
import React from 'react';

const ProfilePane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
          title={'Name'}
          description={'Shulk Steve'}
          action={
            <Button className="px-4" key="edit" size="small">
              Edit
            </Button>
          }
        />
        <Listy.Item
          title={'UUID'}
          description={
            <Typography.Text copyable type="secondary">
              xxxx-xxxx-xxxx-xxxx
            </Typography.Text>
          }
        />
        <Listy.Item
          title={'Email'}
          description={
            <Typography.Text copyable type="secondary">
              xxx@example.com
            </Typography.Text>
          }
        />
        <Listy.Item
          title={'Delete Account'}
          description={
            <Typography.Text type="secondary">
              This will delete your account and all associated data.
            </Typography.Text>
          }
          action={
            <Button danger className="px-4" key="edit" size="small">
              Delete
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default ProfilePane;
