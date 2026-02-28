'use client';
import Kbd from '@/components/kbd';
import GoogleDrive from '@/icons/google-drive';
import MicrosoftOnedrive from '@/icons/microsoft-onedrive';
import {
  RiAddLine,
  RiArrowUpLine,
  RiAttachment2,
  RiBrain2Line,
  RiEqualizer2Line,
  RiLightbulbLine,
  RiMicLine,
  RiPuzzleLine,
  RiSpyLine,
} from '@remixicon/react';
import { Button, Dropdown, Input, Switch, Tooltip } from 'antd';
import React from 'react';
const Chatbox: React.FC = () => {
  return (
    <div className="w-full transition border border-(--ant-color-border) focus-within:shadow-lg rounded-[calc(var(--ant-control-height)/1.5)] p-3">
      <div className="mb-2">
        <Input.TextArea
          size="large"
          variant="borderless"
          classNames={{
            textarea: 'p-1',
          }}
          autoSize={{
            minRows: 3,
            maxRows: 6,
          }}
          placeholder={'Ask a task or ask anything'}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dropdown
            menu={{
              items: [
                {
                  key: 'file',
                  label: 'Add form local files',
                  icon: <RiAttachment2 size={18} />,
                },
                {
                  key: 'skills',
                  label: 'Use Skills',
                  icon: <RiPuzzleLine size={18} />,
                },
                {
                  type: 'divider',
                },
                {
                  key: 'google-drive',
                  label: 'Add from Google Drive files',
                  icon: <GoogleDrive width={16} height={16} />,
                },
                {
                  key: 'microsoft-onedrive',
                  label: 'Add from OneDrive files',
                  icon: <MicrosoftOnedrive width={16} height={16} />,
                },
              ],
            }}
          >
            <div>
              <Tooltip title={'Add files and more'}>
                <Button shape="circle" icon={<RiAddLine size={20} />} />
              </Tooltip>
            </div>
          </Dropdown>
          <Dropdown
            menu={{
              items: [
                {
                  key: 'reasoning',
                  label: 'Reasoning',
                  icon: <RiLightbulbLine size={20} />,
                  extra: <Switch size="small" />,
                },
                {
                  key: 'research',
                  label: 'Research',
                  icon: <RiBrain2Line size={20} />,
                  extra: <Switch size="small" />,
                },
                {
                  key: 'temporary',
                  label: 'Temporary',
                  icon: <RiSpyLine size={20} />,
                  extra: <Switch size="small" />,
                },
              ],
            }}
          >
            <div>
              <Tooltip title={'Chat settings'}>
                <Button shape="circle" icon={<RiEqualizer2Line size={20} />} />
              </Tooltip>
            </div>
          </Dropdown>
        </div>
        <div className="flex items-center gap-2">
          <Tooltip title={'Voice input'}>
            <Button type="text" shape="circle" icon={<RiMicLine size={20} />} />
          </Tooltip>
          <Tooltip
            title={
              <>
                <span>Send</span>
                (
                <Kbd
                  className="[&>kbd>*]:border-0 [&>kbd>*]:p-0"
                  shortcut="enter"
                />
                )
              </>
            }
          >
            <Button
              type="primary"
              disabled
              shape="circle"
              icon={<RiArrowUpLine size={20} />}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
