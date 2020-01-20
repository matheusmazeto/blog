import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Playfair+Display|Righteous|Roboto+Mono:400,700&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Muli:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    width: 100%;
    font-size: 10px;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Muli', sans-serif;
  }
  button {
    cursor: pointer;
  }

  body.light {
    --borders: #BDBDBD;
    --text: #212121;
    --highlight: #FF5722;
    --background: #FFF;
    --white: #fff;
    --black: #000;
    --shadow: #424242;
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
