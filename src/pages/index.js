import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PostItem from '../components/PostItem';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Hero /> */}
      <PostItem />
      <PostItem />
      <PostItem />
    </Layout>
  );
}

export default IndexPage;
