import Listy from '@/components/listy';
import { RiArrowRightSLine } from '@remixicon/react';
import { Button, Switch } from 'antd';
import React from 'react';
const SecurityPane: React.FC = () => {
  return (
    <>
      <Listy>
        <Listy.Item
          title={'Password'}
          action={
            <Button
              className="pl-4"
              type="text"
              iconPlacement="end"
              size="small"
              icon={<RiArrowRightSLine size={14} />}
              key="button"
            >
              Add
            </Button>
          }
        />
        <Listy.Item
          title={'Passkeys'}
          description={`Passkeys are secure and protect your account with multi-factor authentication. They don't require any extra steps.`}
          action={
            <Button
              className="pl-4"
              type="text"
              iconPlacement="end"
              size="small"
              icon={<RiArrowRightSLine size={14} />}
              key="button"
            >
              Add
            </Button>
          }
        />
        <Listy.Item
          title={'Multi-factor authentication (MFA)'}
          description={`Use one-time codes from an authenticator app.`}
          action={<Switch size="small" key="switch" />}
        />
        <Listy.Item
          title={'Log out of all device'}
          description={`Log out of all active sessions across all devices, including your current session. It may take up to 30 minutes for other devices to be logged out.`}
          action={
            <Button
              color="danger"
              variant="outlined"
              className="px-4"
              size="small"
              key="button"
            >
              Log out
            </Button>
          }
        />
      </Listy>
    </>
  );
};

export default SecurityPane;
