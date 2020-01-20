import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

const LayoutWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
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
