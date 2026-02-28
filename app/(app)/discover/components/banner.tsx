import { Button } from 'antd';
import React from 'react';
const Banner: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-12 justify-center h-52 rounded-lg bg-[#0f0f11] bg-contain bg-no-repeat bg-position-[right_center] bg-[url(https://files.monica-cdn.im/assets/image_tools/banner/free_wide_v2.webp)]">
      <div className="text-xl font-bold text-white whitespace-pre-line">
        {`Single Payment,\n Access 16+ AI Models for Images & Videos!`}
      </div>
      <div>
        <Button className="border-none">Upgrade</Button>
      </div>
    </div>
  );
};

export default Banner;
