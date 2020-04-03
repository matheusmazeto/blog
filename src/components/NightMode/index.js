import React, { useState, useEffect } from 'react';

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
    <>
      <S.DarkModeButton
        type="checkbox"
        id="switch"
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
        }}
      ></S.DarkModeButton>
      <S.Label for="switch">Toggle</S.Label>
    </>
  );
}
