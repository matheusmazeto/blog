import React, { useState, useEffect } from 'react';

import { GiStripedSun } from 'react-icons/gi';
import { FiMoon } from 'react-icons/fi';

import * as S from './styled';

function Header() {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';
  const iconSize = '3rem';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.Container>
      <S.Logo to="/">Matheus Mazeto</S.Logo>
      <S.WrapperMenu>
        <S.DarkModeButton
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <GiStripedSun size={iconSize} isDarkMode={isDarkMode} />
        </S.DarkModeButton>
      </S.WrapperMenu>
    </S.Container>
  );
}

export default Header;
