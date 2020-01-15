import React from 'react';

import { Menu, Hamburguer, Label } from './styled';

function HamburguerMenu({ openMenu, setOpenMenu }) {
  return (
    <Menu class="center">
      <input id="toggle" type="checkbox" />
      <label for="toggle" class="container-menu">
        <div class="menu-button"></div>
      </label>
    </Menu>
  );
}

export default HamburguerMenu;
