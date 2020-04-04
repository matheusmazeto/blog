import { createGlobalStyle } from 'styled-components';
import * as V from './variables';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    width: 100%;
    font-size: 62.5%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: antialiased !important;
    -webkit-overflow-scrolling: touch;
  }

  :root {
  --font-xxs: ${V.fontSize.xxs};
  --font-xs: ${V.fontSize.xs};
  --font-sm: ${V.fontSize.sm};
  --font-default: ${V.fontSize.default};
  --font-md: ${V.fontSize.md};
  --font-lg: ${V.fontSize.lg};
  --font-xlg: ${V.fontSize.xlg};
  --font-xxlg: ${V.fontSize.xxlg};
  }


  body.light {
    --bg-main: ${V.colors.grey.grey50};
    --bg-sidebar: ${V.colors.white};
    --border: ${V.colors.grey.grey300};
    --link: ${V.colors.green.green400};
    --divider: ${V.colors.green.green900};
    --primary: #000;
    --secondary: ;
    --invert: #000;
  }

  body.dark {
    --background: #212121;
    --primary: #000;
    --secondary: ;
    --border: box-shadow: 0 1px 3px rgba(255, 255, 255, 0.88), 0 1px 2px rgba(255, 255, 255, 0.76);
    --invert: #fff;

  }
`;
