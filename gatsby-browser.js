import React from 'react';

// Hooks
import { useLocalStorage } from './src/hooks/local-storage';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Global Style
import './src/styles/index.scss';

// Typist CSS
import 'react-typist/dist/Typist.css';

// Prism.js Theme
import 'prismjs/themes/prism-okaidia.css';

// Contexts
import { ThemeContext } from './src/contexts/theme';

const App = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
