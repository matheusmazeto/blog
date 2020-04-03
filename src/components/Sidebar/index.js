import React, { useState } from 'react';

import NightMode from '../NightMode';
import Header from '../Header';

import * as S from './styled';

function Sidebar() {
  return (
    <S.Container>
      <S.NightModeContainer>
        <NightMode />
      </S.NightModeContainer>
      <Header />
    </S.Container>
  );
}

export default Sidebar;
