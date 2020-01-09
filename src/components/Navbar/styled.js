import styled from 'styled-components';
import Link from 'gatsby';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

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
        color: #000;
      }
    }
  }
`;
