import React, { useState } from 'react';

import NightMode from '../NightMode';

import { Container } from './styled';

function Sidebar() {
  return (
    <Container>
      <NightMode />
    </Container>
  );
}

export default Sidebar;
