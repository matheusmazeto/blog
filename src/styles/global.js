import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import * as V from './variables';

export default createGlobalStyle`
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


  body.light {
    --bg-main: ${V.colors.grey.grey100};
    --bg-sidebar: ${V.colors.white};
    --border: ${V.colors.grey.grey300};
    --link: ${V.colors.green.green400}
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
