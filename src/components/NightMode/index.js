import React, { useState, useEffect } from 'react';

import { GiStripedSun } from 'react-icons/gi';


import * as S from './styled';

export default function NightMode() {
  const [theme, setTheme] = useState(null);
  const isDarkMode = theme === 'dark';
  const iconSize = '3rem';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.DarkModeButton
      onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
      }}
    >
      <GiStripedSun size={iconSize} isDarkMode={isDarkMode} />
    </S.DarkModeButton>
  );
}
