import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import styled from 'styled-components';
import ResetStyles from '../../styles/global';
import GlobalStyles from '../../styles/global';
const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  transition: all 0.5s;
`;

const Container = styled.section`
  /* display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: 30rem auto;
  grid-column-gap: 4.5rem; */
  width: 100%;
  max-width: 67.5rem;
  margin: 0 auto;

  article {
    grid-area: main;
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ResetStyles />
      <GlobalStyles />
      <Container>
        {/* <Header /> */}
        <article>{children}</article>
      </Container>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
