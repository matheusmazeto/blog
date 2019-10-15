import React from 'react';

import HamburguerMenu from '../hamburguer-menu';

import { SidebarContainer } from './style';

function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <HamburguerMenu />
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
