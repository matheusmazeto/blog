import React from 'react';
import { Link } from 'gatsby';

import { Container } from './styles';

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Writings</Link>
        </li>
        <li>
          <Link to="/">Github</Link>
        </li>
        <li>
          <Link to="/">Twitter</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
