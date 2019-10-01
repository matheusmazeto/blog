import styled, { css } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-flow: column wrap;

  list-style: none;

  li {
    & + li {
      margin-top: 10px;
    }
    a {
      height: 30px;

      img {
        width: 30px;
      }
    }
  }
`;
