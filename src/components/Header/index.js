import React, { useState, useEffect } from 'react';

import HamburguerMenu from '../HamburguerMenu';

import * as S from './styled';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.Container>
      <S.Logo to="/">Room on Fire</S.Logo>
      <div>
        <span
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          Light
        </span>
        <HamburguerMenu setOpenMenu={() => setOpenMenu(!openMenu)} />
      </div>
      {/* <Navbar openMenu={openMenu} /> */}
    </S.Container>
  );
}

export default Header;
