import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { assign } from 'radash';

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
    colorPrimary: palettes[5],
    controlHeightXS: 20,
    controlHeightSM: 28,
    controlHeight: 36,
    controlHeightLG: 44,
    borderRadiusXS: 6,
    borderRadiusSM: 8,
    borderRadius: 10,
    borderRadiusLG: 12,
    borderRadiusOuter: 14,
    controlOutlineWidth: 0,
  },
  components: {
    Layout: {
      headerPadding: 0,
      footerPadding: 0,
      headerHeight: 'auto',
      headerBg: 'transparent',
      footerBg: 'transparent',
      triggerBg: 'transparent',
      siderBg: 'transparent',
      bodyBg: 'transparent',
    },
    Table: {
      // headerBorderRadius: 0,
      // headerBg: 'transparent',
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
      contentFontSizeSM: 12,
      paddingInlineSM: 11,
      paddingInline: 15,
      paddingInlineLG: 19,
    },
    Switch: {
      handleSize: 16,
      handleSizeSM: 12,
      trackHeight: 20,
      trackHeightSM: 16,
      trackMinWidth: 36,
      trackMinWidthSM: 28,
      innerMaxMargin: 20,
      innerMaxMarginSM: 16,
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
    Segmented: {
      trackPadding: 4,
    },
    Checkbox: {
      borderRadiusXS: 4,
      borderRadiusSM: 6,
      borderRadius: 8,
      borderRadiusLG: 10,
    },
  },
};

const lightConfig: ThemeConfig = assign(sharedConfig, {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBorderSecondary: '#e2e8f0',
    colorBorder: '#e2e8f0',
    colorBgContainer: '#fff',
  },
  components: {
    Button: {
      defaultActiveColor: '#000',
      defaultHoverColor: '#000',
      defaultHoverBorderColor: '#e2e8f0',
      defaultActiveBorderColor: '#e2e8f0',
      defaultHoverBg: '#F5F5F5',
      defaultActiveBg: '#F0F0F0',
    },
  },
});

const darkConfig: ThemeConfig = assign(sharedConfig, {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBorderSecondary: '#272a2c',
    colorBorder: '#272a2c',
    colorBgContainer: '#191b1d',
  },
  components: {
    Button: {
      defaultActiveColor: '#fff',
      defaultHoverColor: '#fff',
      defaultHoverBorderColor: '#7a7a7a',
      defaultActiveBorderColor: '#7a7a7a',
      defaultHoverBg: '#313131',
      defaultActiveBg: '#3A3A3A',
    },
  },
});

export { darkConfig, lightConfig, palettes };
