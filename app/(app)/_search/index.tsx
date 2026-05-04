'use client';
import { MessageDots, PlusCircle, SearchBig } from '@boxicons/react';
import { ConfigProvider, Input, Menu, Modal } from 'antd';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const SearchModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('app.search');

  const handleClose = useCallback(() => {
    setOpen(false);
    if (typeof window !== 'undefined' && window.location.hash === '#search') {
      const search = searchParams.toString();
      const url = search ? `${pathname}?${search}` : pathname;
      router.replace(url, { scroll: false });
    }
  }, [pathname, router, searchParams]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkHash = () => {
      const hash = window.location.hash;
      const isOpen = hash === '#search';
      setOpen(isOpen);
    };

    checkHash();

    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        const target = event.target as HTMLElement;
        const isEditing =
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable;

        if (!isEditing) {
          event.preventDefault();
          window.location.hash = '#search';
        }
      }

      if (event.key === 'Escape' && open) {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);

  return (
    <Modal
      classNames={{
        container: 'p-0',
      }}
      width={768}
      footer={false}
      open={open}
      onCancel={handleClose}
    >
      <div className="py-1.5 px-2 border-b border-(--ant-color-border-secondary)">
        <Input
          classNames={{
            prefix: 'mr-3 text-(--ant-color-text-quaternary)',
          }}
          prefix={<SearchBig size="sm" />}
          variant="borderless"
          size="large"
          placeholder={t('placeholder')}
        />
      </div>
      <div className="py-0.5 max-h-400 overflow-auto">
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemMarginBlock: 2,
                // itemMarginInline: 0,
                groupTitleFontSize: 12,
                iconMarginInlineEnd: 12,
                itemPaddingInline: 8,
              },
            },
          }}
        >
          <Menu
            selectable={false}
            inlineIndent={16}
            mode="inline"
            items={[
              {
                key: '1',
                label: t('newChat'),
                icon: <PlusCircle size="sm" />,
              },
              {
                key: 'today',
                label: t('today'),
                type: 'group',
                children: [
                  {
                    key: 'today-1',
                    label: t('chatTitle', { number: '1' }),
                    icon: <MessageDots size="sm" />,
                  },
                  {
                    key: 'today-2',
                    label: t('chatTitle', { number: '2' }),
                    icon: <MessageDots size="sm" />,
                  },
                ],
              },
              {
                key: 'yesterday',
                label: t('yesterday'),
                type: 'group',
                children: [
                  {
                    key: 'yesterday-1',
                    label: t('chatTitle', { number: '1' }),
                    icon: <MessageDots size="sm" />,
                  },
                  {
                    key: 'yesterday-2',
                    label: t('chatTitle', { number: '2' }),
                    icon: <MessageDots size="sm" />,
                  },
                ],
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </Modal>
  );
};

export default SearchModal;
