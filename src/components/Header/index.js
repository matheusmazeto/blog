import React, { useState, useEffect } from 'react';

import { WbSunny as Sun } from 'styled-icons/material/WbSunny';
import { Moon } from 'styled-icons/boxicons-regular/Moon';

import * as S from './styled';

function Header() {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.Container>
      <S.Logo to="/">Room on Fire</S.Logo>
      <S.WrapperMenu>
        <S.DarkModeButton
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          {isDarkMode ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
        </S.DarkModeButton>
      </S.WrapperMenu>
    </S.Container>
  );
}

export default Header;
