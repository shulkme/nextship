'use client';
import Kbd from '@/components/kbd';
import GoogleDrive from '@/icons/google-drive';
import MicrosoftOnedrive from '@/icons/microsoft-onedrive';
import {
  ArrowUpStroke,
  Microphone,
  Paperclip,
  Plus,
  Puzzle,
} from '@boxicons/react';
import { Button, Dropdown, Input, Tooltip } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
const Chatbox: React.FC = () => {
  const t = useTranslations('app.chatbox');
  return (
    <div className="w-full transition border border-(--ant-color-border) focus-within:border-primary-400 focus-within:shadow-lg rounded-[calc(var(--ant-control-height)/1.5)] p-3">
      <div className="mb-2">
        <Input.TextArea
          size="large"
          variant="borderless"
          classNames={{
            textarea: 'p-1',
          }}
          autoSize={{
            minRows: 2,
            maxRows: 3,
          }}
          placeholder={t('placeholder')}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dropdown
            menu={{
              items: [
                {
                  key: 'file',
                  label: t('menu.addFromLocal'),
                  icon: <Paperclip size="sm" />,
                },
                {
                  key: 'skills',
                  label: t('menu.useSkills'),
                  icon: <Puzzle size="sm" />,
                },
                {
                  type: 'divider',
                },
                {
                  key: 'google-drive',
                  label: t('menu.addFromGoogleDrive'),
                  icon: <GoogleDrive width={16} height={16} />,
                },
                {
                  key: 'microsoft-onedrive',
                  label: t('menu.addFromOneDrive'),
                  icon: <MicrosoftOnedrive width={16} height={16} />,
                },
              ],
            }}
          >
            <div>
              <Tooltip title={t('addFilesMore')}>
                <Button type="text" shape="circle" icon={<Plus size="sm" />} />
              </Tooltip>
            </div>
          </Dropdown>
        </div>
        <div className="flex items-center gap-2">
          <Tooltip title={t('voiceInput')}>
            <Button
              type="text"
              shape="circle"
              icon={<Microphone size="sm" />}
            />
          </Tooltip>
          <Tooltip
            title={
              <>
                <span>{t('send')}</span>
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
              icon={<ArrowUpStroke size="base" />}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
