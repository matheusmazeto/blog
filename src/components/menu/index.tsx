import React from 'react';
import { Link } from 'gatsby';

import { MenuContainer } from './styled';

function Menu({ open, setOpen }) {
  return (
    <MenuContainer open={open}>
      <nav>
        <ul>
          <li>
            <Link onClick={setOpen} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={setOpen} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={setOpen} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
}

export default Menu;
