import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PostItem from '../components/PostItem';

import { Javascript } from 'styled-icons/boxicons-logos/Javascript';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <PostItem
        slug="/about/"
        category={<Javascript size="25px" color="#000" />}
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />
    </Layout>
  );
}

export default IndexPage;
