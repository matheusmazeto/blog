import React from 'react';

import { Menu, Hamburguer, Label } from './style';

function HamburguerMenu({ openMenu, setOpenMenu }) {
  return (
    <Menu>
      <Hamburguer checked={openMenu} onChange={setOpenMenu}></Hamburguer>
      <Label htmlFor="menu-hamburguer">
        <div></div>
        <div></div>
        <div></div>
      </Label>
    </Menu>
  );
}

export default HamburguerMenu;
