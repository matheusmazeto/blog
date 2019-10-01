import React from 'react';

import { Wrapper } from '../container';
import { Container, InnerContainer, Logo, Navbar } from './styled';
import DarkModeToggle from '../dark-mode-toggle';
import Avatar from '../../images/avatar.png';
import { Link } from 'gatsby';
import ButtonTop from '../button-top';

function Header({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <Logo>
            <img src={Avatar} alt="Meu avatar com fundo vermelho" />{' '}
            <h1>Matheus Mazeto</h1>
          </Logo>
          <Navbar>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
            </ul>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Navbar>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
