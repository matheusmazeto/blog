import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavLink = styled(Link)``;

export const Menu = styled.section`
  display: inline-block;
  position: relative;

  .btn {
    display: block;
    cursor: pointer;

    .bar {
      width: 1.5rem;
      height: 0.2rem;
      margin-bottom: 0.2rem;
      background: var(--hamburguer);
    }

    .bar:last-child {
      margin-bottom: 0;
    }
  }

  nav {
    position: absolute;
    right: 0rem;
    top: 2rem;
    background-color: whitesmoke;
    border: 0.1rem solid var(--borders);
    border-bottom: 0.1rem solid var(--borders);
    visibility: hidden;
    border-radius: 0.2rem;
    padding: 2.5rem;
    background: var(--background);
    box-shadow: 0 0.1rem 0.3rem 0 var(--borders);
    opacity: 0;
    transform: scale(0.7);
    transition: all 0.2s;

    ul {
      li {
        list-style: none;

        & + li {
          padding: 0.5rem 0 0;
        }
      }
    }

    ${NavLink} {
      font-family: 'Playfair Display', serif;
      color: #222;
      display: block;
      white-space: nowrap;
      text-decoration: none;
      font-size: 1.2rem;
    }

    li:last-child ${NavLink} {
      border-bottom: 0;
    }
    ${NavLink}:hover {
      text-decoration: underline;
    }
  }

  .menu_show {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;
