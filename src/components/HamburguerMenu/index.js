import React, { useState } from 'react';

import { Menu, NavLink } from './styled';

function HamburguerMenu({ openMenu, setOpenMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <Menu class="menu">
      <div class="btn" onClick={() => setOpen(!open)}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <nav id="nav" className={open ? 'menu_show' : null}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </Menu>
  );
}

export default HamburguerMenu;
