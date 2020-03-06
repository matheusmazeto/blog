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
    --borders: #BDBDBD;
    --text: #212121;
    --highlight: #FF5722;
    --background: #FFF;
    --white: #fff;
    --black: #000;
    --shadow: rgba(0,0,0,.10);
    --hamburguer: #000;
  }

  body.dark {
    --borders: #BDBDBD;
    --text: #BDBDBD;
    --highlight: #FF5722;
    --background: #212121;
    --white: #fff;
    --black: #000;
    --shadow: #EEE;
    --hamburguer: #fff;
  }
`;
