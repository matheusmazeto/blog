import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global';

function Layout({ children }) {
  return (
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyle />
        <h1>Hello Layout</h1>
        {children}
      </>
    </ThemeProvider>
  );
}

export default Layout;
