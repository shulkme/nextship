import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

/**
 * 色板
 */
const palettes = [
  '#e6f3ff',
  '#b3d7ff',
  '#8abeff',
  '#61a3ff',
  '#3884ff',
  '#0f60f8',
  '#0244d1',
  '#0030ab',
  '#002185',
  '#00145e',
];

const sharedConfig: ThemeConfig = {
  hashed: false, // close hash
  token: {
    controlHeightXS: 24,
    controlHeightSM: 32,
    controlHeight: 40,
    controlHeightLG: 48,
    borderRadiusXS: 8,
    borderRadiusSM: 8,
    borderRadius: 12,
    borderRadiusLG: 12,
    colorPrimary: '#0F60F8',
    // colorLink: '#1062ff',
    colorBorderSecondary: '#e2e8f0',
    colorBorder: '#e2e8f0',
    colorBgLayout: '#f1f5f9',
  },
  components: {
    Layout: {
      headerBg: 'transparent',
      headerPadding: 0,
      headerHeight: 'auto',
      footerBg: 'transparent',
      footerPadding: 0,
      bodyBg: 'transparent',
      siderBg: 'transparent',
    },
    Table: {
      headerBorderRadius: 0,
      headerBg: 'transparent',
      footerBg: 'transparent',
      headerSplitColor: 'transparent',
    },
    Menu: {
      horizontalLineHeight: 48,
      activeBarBorderWidth: 0,
      itemBg: 'transparent',
      darkItemBg: 'transparent',
      darkSubMenuItemBg: 'transparent',
    },
    Button: {
      dangerShadow: 'none',
      defaultShadow: 'none',
      primaryShadow: 'none',
      contentFontSizeSM: 12,
    },
    Tabs: {
      horizontalMargin: '0',
    },
    Tooltip: {
      borderRadiusXS: 4,
      borderRadiusSM: 6,
      borderRadius: 8,
      borderRadiusLG: 12,
      controlHeightXS: 20,
      controlHeightSM: 24,
      controlHeight: 32,
      controlHeightLG: 40,
    },
    Upload: {
      pictureCardSize: 80,
      fontSizeHeading2: 24,
      margin: 8,
      paddingXS: 4,
    },
    Rate: {
      starColor: '#FFAE0A',
    },
  },
};

const lightConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.defaultAlgorithm,
};

const darkConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.darkAlgorithm,
};

export { darkConfig, lightConfig, palettes };
