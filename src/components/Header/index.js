import React from 'react';

import * as S from './styled';

function Header() {
  return (
    <S.Container>
      <S.Logo to="/">Matheus Mazeto</S.Logo>
      <S.WrapperMenu></S.WrapperMenu>
    </S.Container>
  );
}

export default Header;
