import React, { useState } from 'react';

import { Menu, NavLink } from './styled';

function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Menu className="menu">
      <div className="btn" onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
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
