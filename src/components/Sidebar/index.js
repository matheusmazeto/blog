import React, { useState } from 'react';

import NightMode from '../NightMode';
import Header from '../Header';

import { Container } from './styled';

function Sidebar() {
  return (
    <Container>
      <NightMode />
      <Header />
    </Container>
  );
}

export default Sidebar;
