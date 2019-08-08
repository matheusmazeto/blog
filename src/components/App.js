import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';

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

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
