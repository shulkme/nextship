'use client';
import { usePathname } from 'next/navigation';
import NProgress, { type NProgressOptions } from 'nprogress';
import React, { useEffect } from 'react';
import './styles.css';

type PushStateInput = [
  data: never,
  unused: string,
  url?: string | URL | null | undefined,
];

interface NProgressBarProps {
  options?: Partial<NProgressOptions>;
  delay?: number;
  disableSameRoute?: boolean;
  showOnShallow?: boolean;
}

const NProgressBar: React.FC<NProgressBarProps> = React.memo(
  ({ options, showOnShallow = false }) => {
    const pathname = usePathname();

    useEffect(() => {
      if (options) NProgress.configure(options);
    }, [options]);

    useEffect(() => {
      NProgress.done(true);
    }, [pathname]);

    useEffect(() => {
      const startProgress = () => {
        NProgress.start();
      };

      const stopProgress = () => {
        NProgress.done(true);
      };

      const handleAnchorClick = (event: MouseEvent) => {
        const anchorElement = event.currentTarget as HTMLAnchorElement;

        // Skip anchors with target attribute but different than _self
        if (
          anchorElement.target !== '_self' &&
          anchorElement.target?.trim() !== ''
        )
          return;

        // Skip anchors with download attribute
        if (anchorElement.hasAttribute('download')) return;

        // target url without hash removed
        const targetUrl = new URL(anchorElement.href);
        const currentUrl = new URL(location.href);

        // check if search params changed
        const hasSearchParams =
          targetUrl?.searchParams?.toString() !==
          currentUrl?.searchParams?.toString();
        const paramsChanged =
          hasSearchParams && targetUrl?.search !== currentUrl?.search;
        const isSameUrl =
          targetUrl?.pathname === currentUrl?.pathname && !paramsChanged;

        // detect ctrl/cmd option/alt shift click
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;

        if (showOnShallow && isSameUrl) return;
        if (isSameUrl) return;

        // Defer to allow React synthetic event handlers (e.g. preventDefault)
        // to execute before starting the progress bar
        setTimeout(() => {
          if (event.defaultPrevented) return;
          startProgress();
        }, 0);
      };

      const boundAnchors = new WeakSet<HTMLAnchorElement>();

      const isValidAnchor = (anchor: HTMLAnchorElement) => {
        if (
          anchor.href.startsWith('tel:+') ||
          anchor.href.startsWith('mailto:')
        )
          return false;
        if (anchor.target !== '_self' && anchor.target?.trim() !== '')
          return false;
        return !!anchor.href;
      };

      const bindAnchors = () => {
        const anchorElements = document.querySelectorAll('a');
        anchorElements.forEach((anchor) => {
          if (boundAnchors.has(anchor) || !isValidAnchor(anchor)) return;
          anchor.addEventListener('click', handleAnchorClick);
          boundAnchors.add(anchor);
        });
      };

      const handleMutation: MutationCallback = () => {
        bindAnchors();
      };

      // Bind existing anchors on mount
      bindAnchors();

      const mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(document, { childList: true, subtree: true });

      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = new Proxy(originalPushState, {
        apply: (target, thisArg, argArray: PushStateInput) => {
          stopProgress();
          return target.apply(thisArg, argArray);
        },
      });

      window.history.replaceState = new Proxy(originalReplaceState, {
        apply: (target, thisArg, argArray: PushStateInput) => {
          stopProgress();
          return target.apply(thisArg, argArray);
        },
      });

      return () => {
        mutationObserver.disconnect();

        document.querySelectorAll('a').forEach((anchor) => {
          anchor.removeEventListener('click', handleAnchorClick);
        });

        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
      };
    }, [showOnShallow]);

    return null;
  },
  () => true,
);

NProgressBar.displayName = 'NProgressBar';

export default NProgressBar;
