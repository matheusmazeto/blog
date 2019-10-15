import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/global';

import Sidebar from '../sidebar';
import Header from '../header';

import { Wrapper } from './style';

function Layout({ children }) {
  return (
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyle />
        <Wrapper>
          <Sidebar />
          <Header />
          <main>{children}</main>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default Layout;
