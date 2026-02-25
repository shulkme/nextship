import { RiArrowRightSLine } from '@remixicon/react';
import { Button, List, Switch } from 'antd';
import React from 'react';
const SecurityPane: React.FC = () => {
  return (
    <>
      <List className="[&_.ant-list-item-meta-title]:font-medium [&_.ant-list-item-action>li]:p-0">
        <List.Item
          actions={[
            <Button
              className="pl-4"
              type="text"
              iconPlacement="end"
              size="small"
              icon={<RiArrowRightSLine size={14} />}
              key="button"
            >
              Add
            </Button>,
          ]}
        >
          <List.Item.Meta title={'Password'} />
        </List.Item>
        <List.Item
          actions={[
            <Button
              className="pl-4"
              type="text"
              iconPlacement="end"
              size="small"
              icon={<RiArrowRightSLine size={14} />}
              key="button"
            >
              Add
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={'Passkeys'}
            description={`Passkeys are secure and protect your account with multi-factor authentication. They don't require any extra steps.`}
          />
        </List.Item>
        <List.Item actions={[<Switch size="small" key="switch" />]}>
          <List.Item.Meta
            title={'Multi-factor authentication (MFA)'}
            description={`Use one-time codes from an authenticator app.`}
          />
        </List.Item>
        <List.Item
          actions={[
            <Button
              color="danger"
              variant="outlined"
              className="px-4"
              size="small"
              key="button"
            >
              Log out
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={'Log out of all device'}
            description={`Log out of all active sessions across all devices, including your current session. It may take up to 30 minutes for other devices to be logged out.`}
          />
        </List.Item>
      </List>
    </>
  );
};

export default SecurityPane;
