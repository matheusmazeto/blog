import React from 'react';
import { graphql } from 'gatsby';
import { Container, Hero, HeroBody, Subtitle, Title } from 'bloomer';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = props => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Not Found" />
      <Hero isSize="medium">
        <HeroBody>
          <Container>
            <Title>Not Found</Title>
            <Subtitle>You just hit a route that doesn&#39;t exist...</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
