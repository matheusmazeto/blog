import React from 'react';

import { Menu, Hamburguer, Label } from './styled';

function HamburguerMenu({ openMenu, setOpenMenu }) {
  return (
    <Menu>
      <Hamburguer onChange={setOpenMenu}></Hamburguer>
      <Label htmlFor="menu-hamburguer">
        <div></div>
        <div></div>
        <div></div>
      </Label>
    </Menu>
  );
}

export default HamburguerMenu;
