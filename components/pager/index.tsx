'use client';
import { cn } from '@/utils/classname';
import { IconArrowLeft } from '@tabler/icons-react';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';

type Size = 'small' | 'medium' | 'large' | 'full';

interface PagerProps {
  size?: Size;
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode[];
  // navs?: NavMenuItemType[];
  footer?: React.ReactNode;
  className?: string;
  classNames?: {
    header?: string;
    navs?: string;
    extra?: string;
    container?: string;
    description?: string;
    footer?: string;
  };
  children?: React.ReactNode;
  backPath?: string;
  docTitle?: string;
}

const sizeCls: Record<Size, string> = {
  small: 'max-w-5xl',
  medium: 'max-w-6xl',
  large: 'max-w-7xl',
  full: 'max-w-[1600px]',
};

const Pager: React.FC<PagerProps> = ({
  size,
  title,
  description,
  extra,
  className,
  classNames,
  children,
  footer,
  backPath,
}) => {
  const cls = useMemo(() => {
    if (!size) return sizeCls.full;
    return sizeCls[size];
  }, [size]);
  return (
    <div className={className}>
      <div
        className={cn(
          cls,
          'pt-4 mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8',
          classNames?.header,
        )}
      >
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {backPath && (
              <Link href={backPath}>
                <Button
                  color="default"
                  variant="filled"
                  className="leading-none"
                  size="middle"
                  icon={<IconArrowLeft size={24} />}
                />
              </Link>
            )}
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
          </div>
          {extra && extra.length > 0 && (
            <div
              className={cn(
                'flex flex-wrap gap-4 items-center',
                classNames?.extra,
              )}
            >
              {extra.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          )}
        </div>
        {description && (
          <div className={cn('mt-4', classNames?.description)}>
            <p className="text-sm text-(--ant-color-text-description)">
              {description}
            </p>
          </div>
        )}
      </div>
      <div
        className={cn(
          cls,
          'py-4 mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 sm:py-5 md:py-6 lg:py-7 xl:py-8',
          classNames?.container,
        )}
      >
        {children}
      </div>
      {footer && (
        <div
          className={cn(
            'sticky bottom-0 bg-(--ant-layout-body-bg) px-8 py-4 left-0',
            classNames?.footer,
          )}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Pager;
