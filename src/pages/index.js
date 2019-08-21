import React from 'react';
import { Link } from 'gatsby';

import App from '../app/App';
import Image from '../components/image';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <App>
      <SEO title="Home" />
      <h1>Hi people</h1>
    </App>
  );
}

export default IndexPage;
