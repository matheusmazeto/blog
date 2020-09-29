import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6rem 0;
  min-height: 100vh;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;

    margin: 2.4rem 0;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Avatar />
        <h1>Matheus Mazeto</h1>
        <h2>Front-end Developer</h2>
        <Navbar />
      </Container>
    </Layout>
  );
};

export default HomePage;
