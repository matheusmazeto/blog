import React from 'react';
import { Link } from 'gatsby';

import * as S from './styled';

function Navbar() {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </S.Nav>
  );
}

export default Navbar;
