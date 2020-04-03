import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import styled from 'styled-components';
import ResetStyles from '../../styles/global';
import GlobalStyles from '../../styles/global';
const Wrapper = styled.section`
  background: var(--background);
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.section`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 30rem auto;
  grid-column-gap: 45px;
  max-width: 120rem;

  margin: 0 auto;

  main {
    grid-area: main;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ResetStyles />
      <GlobalStyles />
      <Container>
        <Sidebar />
        <main>{children}</main>
      </Container>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
