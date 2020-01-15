import React from 'react';

import { Menu } from './styled';

function HamburguerMenu({ openMenu, setOpenMenu }) {
  return (
    <Menu class="center" openMenu={openMenu}>
      <input id="toggle" type="checkbox" onClick={setOpenMenu} />
      <label htmlFor="toggle" className="container-menu">
        <div className="menu-button"></div>
      </label>
    </Menu>
  );
}

export default HamburguerMenu;
