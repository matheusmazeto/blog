import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 5rem;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  min-height: ${({ openMenu }) => (openMenu ? '100vh' : '0')};
  width: 100%;

  transition: 1s;

  background: ${({ openMenu }) => (openMenu ? '#444' : '#ff0')};
  /* filter: blur(2px); */

  ul {
    display: flex;
    li {
      list-style: none;
      & + li {
        margin-left: 1rem;
      }

      a {
        text-decoration: none;
        font-size: 1.6rem;
        color: var(--black);
      }
    }
  }
`;
