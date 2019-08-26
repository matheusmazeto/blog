import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;
    const pageNumber = location.pathname
      .split('/')
      .filter(Boolean)
      .pop();
    const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/));
    let header;

    if (isRootPath || isPaginatedPath) {
      header = (
        <h1
          style={{
            ...scale(0.75),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <a href="https://www.github.com/matheusmazeto">Github</a> &bull;{' '}
          <a href="https://www.linkedin.com/in/matheus-mazeto-94076680/">
            Linkedin
          </a>{' '}
          &bull; <a href="https://www.twitter.com/mazeto">Twitter</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
