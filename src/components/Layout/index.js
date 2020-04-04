import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import styled from 'styled-components';
import ResetStyles from '../../styles/global';
import GlobalStyles from '../../styles/global';
const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--bg);
  transition: all 0.5s;
`;

const Container = styled.section`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 30rem auto;
  grid-column-gap: 4.5rem;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  article {
    grid-area: main;
    margin: 7rem 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ResetStyles />
      <GlobalStyles />
      <Container>
        <Sidebar />
        <article>{children}</article>
      </Container>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
