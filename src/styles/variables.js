// ==================================================
// Variables
//
// 1. Spaces
// 2. Colors
// 3. zIndex
// 4. Misc
// ==================================================

// --------------------------------------------------
// 1. Spaces
// --------------------------------------------------

export const Space = {
  xxs: `.4rem`,
  xs: `.8rem`,
  sm: `1.6rem`,
  default: `2.4rem`,
  md: `3.2rem`,
  lg: `4.8rem`,
  xlg: `6.4rem`,
  xxlg: `9.6rem`,
};

export const Height = {
  headerSm: `${Space.lg}`,
  headerLg: `${Space.xlg}`,
  footer: `4rem`,
  mainTop: `${Space.md}`,
};

// --------------------------------------------------
// 2. Colors
// --------------------------------------------------

export const colors = {
  white: `#ffffff`,
  black: `#000000`,

  grey: {
    grey0: '#9E9E9E',
    grey50: '#FAFAFA',
    grey100: '#F5F5F5',
    grey200: '#EEEEEE',
    grey300: '#E0E0E0',
    grey400: '#BDBDBD',
    grey500: '#9E9E9E',
    grey600: '#757575',
    grey700: '#616161',
    grey500: '#424242',
    grey900: '#212121',
  },

  green: {
    green0: '#4CAF50',
    green50: '#E8F5E9',
    green100: '#C8E6C9',
    green200: '#A5D6A7',
    green300: '#81C784',
    green400: '#66BB6A',
    green500: '#4CAF50',
    green600: '#43A047',
    green700: '#388E3C',
    green500: '#2E7D32',
    green900: '#1B5E20',
    greenA100: '#B9F6CA',
    greenA200: '#69F0AE',
    greenA400: '#00E676',
    greenA700: '#00C853',
  },
};

// --------------------------------------------------
// 3. zIndex
// --------------------------------------------------

export const ZIndex = {
  bg: `-1`,
  default: `1`,
  footer: `5`,
  header: `5`,
};

// --------------------------------------------------
// 4. Misc
// --------------------------------------------------

export const Transition = {
  default: `.25s`,
};

export const BorderRadius = {
  box: `2px`,
};

export const Border = {
  box: `1px solid var(--borderColor)`,
  default: `1px solid var(--borderColor)`,
};

export const BoxShadow = {
  box: `0 1px 3px var(--boxShadow)`,
};

export const MaxSize = {
  md: `750px`,
  lg: `1080px`,
};
