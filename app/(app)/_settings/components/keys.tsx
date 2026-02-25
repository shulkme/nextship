import { Button, Card, Result } from 'antd';
import React from 'react';
const KeysPane: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        Manage your model and platform API keys. While in beta, API calls will
        consume your credits. By using the API, you agree to our API Terms.
        Learn more about the API
      </p>

      <Card className="border-dashed">
        <Result
          icon={false}
          subTitle="No API keys added"
          extra={
            <>
              <Button>New Key</Button>
            </>
          }
        />
      </Card>
    </>
  );
};

export default KeysPane;
