import React from 'react';

import { Container } from './styled';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Container>
      <label></label>
      <label htmlFor="checkbox">
        <input
          checked={darkMode}
          onChange={setDarkMode}
          type="checkbox"
          id="checkbox"
        />
        <span></span>
      </label>
    </Container>
  );
}

export default DarkModeToggle;
