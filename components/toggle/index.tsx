'use client';
import { cn } from '@/utils/classname';
import { Button, type ButtonProps } from 'antd';
import type { FC, ReactNode } from 'react';
import React from 'react';

// Toggle component props
interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  className?: string;
  buttonProps?: ButtonProps;
}

// Option type for Toggle.Group (generic)
export interface ToggleOption<T = string | number> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
}

// Toggle.Group component props (generic)
interface ToggleGroupProps<T = string | number> {
  options: ToggleOption<T>[];
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
  className?: string;
  buttonProps?: ButtonProps;
}

// Main Toggle component (standalone switch)
const Toggle: FC<ToggleProps> = ({
  checked,
  defaultChecked,
  disabled,
  onChange,
  children,
  className,
  buttonProps,
}) => {
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked || false,
  );

  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;

    const newChecked = !isChecked;

    if (checked === undefined) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  return (
    <>
      <Button
        color="default"
        variant={isChecked ? 'filled' : 'text'}
        role="switch"
        disabled={disabled}
        onClick={handleClick}
        className={className}
        {...buttonProps}
      >
        {children}
      </Button>
    </>
  );
};

// Toggle.Group component (segmented control with options)
function ToggleGroup<T = string | number>({
  options,
  value,
  defaultValue,
  onChange,
  disabled,
  className,
  buttonProps,
}: ToggleGroupProps<T>) {
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    defaultValue,
  );

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (newValue: T) => {
    if (disabled) return;

    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <div
      role="radiogroup"
      className={cn('inline-flex items-center gap-1', className)}
    >
      {options.map((option, index) => {
        const isSelected = currentValue === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          <Button
            color="default"
            variant={isSelected ? 'filled' : 'text'}
            role="radio"
            key={String(option.value) || index}
            disabled={isDisabled}
            onClick={() => handleChange(option.value)}
            {...buttonProps}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}

// Define compound component type
interface ToggleComponent extends FC<ToggleProps> {
  Group: typeof ToggleGroup;
}

// Attach sub-components
const ToggleWithSubComponents = Toggle as ToggleComponent;
ToggleWithSubComponents.Group = ToggleGroup;

export default ToggleWithSubComponents;
