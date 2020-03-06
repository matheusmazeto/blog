import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import styled from 'styled-components';
import ResetStyles from '../../styles/global';
import GlobalStyles from '../../styles/global';

const LayoutWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  background: #333;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ResetStyles />
      <GlobalStyles />
      <Header />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
