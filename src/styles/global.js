import { createGlobalStyle } from 'styled-components';

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
  }


  body.light {
    --primary: #000;
    --secondary: ;
    --background: #fff;
    --border: box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    
  }

  body.dark {
    --primary: #000;
    --secondary: ;
    --background: #212121;
    --border: box-shadow: 0 1px 3px rgba(255, 255, 255, 0.88), 0 1px 2px rgba(255, 255, 255, 0.76);
  }
`;
