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
      width: 20px;
      height: 2px;
      background: #000;
      margin-bottom: 4px;
    }

    .bar:last-child {
      margin-bottom: 0px;
    }
  }

  nav {
    position: absolute;
    right: 0rem;
    top: 2rem;
    background-color: whitesmoke;
    border: 1px solid #efefef;
    border-bottom: 1px solid #ddd;
    visibility: hidden;
    border-radius: 2px;
    padding: 25px;
    background: rgba(255, 255, 255);
    box-shadow: 0 1px 3px 0 #eee;
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
      border-bottom: 0px;
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
