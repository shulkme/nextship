'use client';
import { usePlatform } from '@/hooks/use-platform';
import { cn } from '@/utils/classname';
import type { FC, ReactNode } from 'react';

interface KbdProps {
  children?: ReactNode;
  /**
   * Keyboard shortcut string (e.g., "cmd+k", "ctrl+shift+p")
   * Use "cmd" for Command (Mac) / Ctrl (Windows/Linux)
   * Use "opt" for Option (Mac) / Alt (Windows/Linux)
   */
  shortcut?: string;
  className?: string;
}

// Key symbol mappings for different platforms
const keySymbols = {
  mac: {
    cmd: '⌘',
    command: '⌘',
    ctrl: '⌃',
    control: '⌃',
    opt: '⌥',
    option: '⌥',
    alt: '⌥',
    shift: '⇧',
    enter: '↵',
    return: '↵',
    backspace: '⌫',
    delete: '⌦',
    esc: '⎋',
    escape: '⎋',
    tab: '⇥',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
  },
  other: {
    cmd: 'Ctrl',
    command: 'Ctrl',
    ctrl: 'Ctrl',
    control: 'Ctrl',
    opt: 'Alt',
    option: 'Alt',
    alt: 'Alt',
    shift: 'Shift',
    enter: 'Enter',
    return: 'Enter',
    backspace: 'Backspace',
    delete: 'Delete',
    esc: 'Esc',
    escape: 'Esc',
    tab: 'Tab',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
  },
};

/**
 * Kbd component for displaying keyboard shortcuts
 *
 * @example
 * // Using shortcut string
 * <Kbd shortcut="cmd+k" className="text-xs" />
 *
 * // Using children for custom content
 * <Kbd className="px-2 py-1">Ctrl</Kbd>
 */
const Kbd: FC<KbdProps> = ({ children, shortcut, className }) => {
  const platform = usePlatform();

  // Determine content to render
  let content: ReactNode = null;

  if (children) {
    // Render children as single key
    content = (
      <kbd>
        <span className="min-w-[1em]">{children}</span>
      </kbd>
    );
  } else if (shortcut) {
    // Parse and render shortcut string
    const symbols = platform === 'mac' ? keySymbols.mac : keySymbols.other;
    const keys = shortcut
      .toLowerCase()
      .split('+')
      .map((key) => key.trim());

    content = keys.map((key, index) => (
      <kbd key={index}>
        <span className="min-w-[1em]">
          {symbols[key as keyof typeof symbols] || key.toUpperCase()}
        </span>
      </kbd>
    ));
  }

  // Return null if no content
  if (!content) return null;

  // Shared parent wrapper
  return (
    <div
      className={cn(
        'inline-flex whitespace-pre *:inline-flex *:font-sans touch:hidden',
        className,
      )}
    >
      {content}
    </div>
  );
};

export default Kbd;
