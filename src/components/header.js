import React, { useState, useContext } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  Button,
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart
} from 'bloomer';

import codeLogo from '../../content/assets/logo-64.png';

// Theme
import { ThemeContext, getOppositeTheme } from '../contexts/theme';

const Header = props => {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleIsActive = () => setIsActive(!isActive);

  const toggleTheme = () => setTheme(getOppositeTheme(theme));

  return (
    <StaticQuery
      query={headerQuery}
      render={data => (
        <Navbar className={`is-${theme}`}>
          <NavbarBrand>
            <Link to={`/`} className="navbar-item">
              <img src={codeLogo} alt={data.site.siteMetadata.title} />
              <b style={{ marginLeft: '0.5rem' }}>
                {data.site.siteMetadata.siteDomain}
              </b>
            </Link>
            <NavbarBurger isActive={isActive} onClick={toggleIsActive} />
          </NavbarBrand>
          <NavbarMenu
            isActive={isActive}
            onClick={toggleIsActive}
            className={`has-background-${theme}`}
          >
            <NavbarStart>{/* Put left-side menu items here */}</NavbarStart>
            <NavbarEnd>
              <Link
                to={`/about`}
                className={`navbar-item has-text-${getOppositeTheme(theme)}`}
              >
                About
              </Link>
              <NavbarItem>
                <Button
                  isColor={theme}
                  onClick={toggleTheme}
                  title="Toggle Dark Theme"
                >
                  <Icon
                    className="fas fa-moon"
                    hasTextColor={theme === 'light' ? 'dark' : 'warning'}
                  />
                </Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      )}
    />
  );
};

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        siteDomain
        social {
          github
        }
      }
    }
  }
`;

export default Header;
