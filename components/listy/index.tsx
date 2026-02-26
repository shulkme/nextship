import { cn } from '@/utils/classname';
import type { FC, ReactNode } from 'react';

// Define props for Listy component
interface ListyProps {
  children?: ReactNode;
  className?: string;
  split?: boolean;
}

// Define props for ListyItem component
interface ListyItemProps {
  children?: ReactNode;
  className?: string;
  classNames?: {
    root?: string;
    avatar?: string;
    title?: string;
    description?: string;
    action?: string;
  };
  avatar?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

// Define the compound component type
interface ListyComponent extends FC<ListyProps> {
  Item: FC<ListyItemProps>;
}

// Main Listy component
const Listy: FC<ListyProps> = ({ children, className, split = true }) => {
  return (
    <ul
      className={cn(split && 'divide-y divide-(--ant-color-split)', className)}
    >
      {children}
    </ul>
  );
};

// ListyItem sub-component
const ListyItem: FC<ListyItemProps> = ({
  children,
  avatar,
  action,
  title,
  description,
  className,
  classNames,
}) => {
  return (
    <li
      className={cn(
        'flex items-center gap-4 py-3',
        className,
        classNames?.root,
      )}
    >
      {avatar && (
        <div className={cn('flex-none', classNames?.avatar)}>{avatar}</div>
      )}
      {(title || description) && (
        <div className="flex-auto">
          {title && (
            <h3 className={cn('font-medium', classNames?.title)}>{title}</h3>
          )}
          {description && (
            <p
              className={cn(
                'font-normal text-(--ant-color-text-description)',
                classNames?.description,
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
      {action && (
        <div className={cn('flex-none', classNames?.action)}>{action}</div>
      )}
      {children}
    </li>
  );
};

// Attach Item to Listy with proper typing
const ListyWithItem = Listy as ListyComponent;
ListyWithItem.Item = ListyItem;

export default ListyWithItem;
