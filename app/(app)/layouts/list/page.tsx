'use client';
import { data } from '@/app/(app)/layouts/list/mock';
import Listy from '@/components/listy';
import Pager from '@/components/pager';
import Toggle from '@/components/toggle';
import { RiArrowRightSLine } from '@remixicon/react';
import { Avatar, Button } from 'antd';
import { random, shuffle } from 'radash';
import { useMemo, useState } from 'react';

export default function Page() {
  const [type, setType] = useState<string>('featured');

  const renderItems = useMemo(() => {
    const items = shuffle(data) || [];
    return items.splice(0, random(Math.ceil(data.length / 2), data.length));
  }, [type]);

  return (
    <Pager
      size="large"
      title={'List'}
      description={
        'Use list layout for similar items in order, easy to scan and act on.'
      }
    >
      <div className="space-x-2 mb-4">
        <Toggle.Group
          value={type}
          options={[
            {
              label: 'Featured',
              value: 'featured',
            },
            {
              label: 'Lifestyle',
              value: 'lifestyle',
            },
            {
              label: 'Productivity',
              value: 'productivity',
            },
          ]}
          onChange={(value) => setType(value)}
        />
      </div>
      <div className="">
        <Listy split={false} className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {renderItems.map((item, index) => (
            <Listy.Item
              key={index}
              className="px-3 rounded-lg hover:bg-(--ant-control-item-bg-hover) cursor-pointer"
              action={
                <Button
                  type="text"
                  size="small"
                  shape="circle"
                  icon={<RiArrowRightSLine size={18} />}
                />
              }
              title={item.title}
              description={item.description}
              avatar={<Avatar src={item.avatar} />}
            />
          ))}
        </Listy>
      </div>
    </Pager>
  );
}
