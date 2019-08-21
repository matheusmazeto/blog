import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { theme } from '../utils/theme';

import { Container } from './styled';

import Header from '../components/header';
import Footer from '../components/footer';

function App({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [darkMode, setDarkMode] = useState(undefined);
  const [openMenu, setOpenMenu] = useState(false);

  const windowGlobal = typeof window !== 'undefined' && window.localStorage;

  useEffect(() => {
    getInitialMode();
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    if (windowGlobal) return isReturningUser;

    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Container>
        <GlobalStyle />
        <Header
          darkMode={darkMode}
          setDarkMode={() => setDarkMode(prevMode => !prevMode)}
          openMenu={openMenu}
          setOpenMenu={() => setOpenMenu(!openMenu)}
        />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
