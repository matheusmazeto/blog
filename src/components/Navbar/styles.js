import styled from 'styled-components';

export const Container = styled.nav`
  margin: 2.4rem 0 0;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    margin-top: 1em;
    display: block;
    li {
      display: inline-block;

      & + li {
        padding-left: 1rem;
      }

      a {
        list-style: none;
        box-shadow: 4px 4px;
        margin-right: 0.8em;
        border: 4px solid;
        padding: 4px 8px;
        text-decoration: none;
        display: inline-block;
        transition: 100ms ease;
        font-weight: 400;
        font-size: 2rem;
        font-family: 'Lato', sans-serif;
      }

      a:hover {
        box-shadow: 8px 8px;
        transform: translate(-2px, -2px);
      }
    }
  }
`;
