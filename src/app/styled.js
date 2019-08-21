import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const resize = keyframes`
  from{
    grid-template-columns: 80px 1fr;
  }
  to{
    grid-template-columns: 300px 1fr;
  }
}
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 90vh 10vh;
  grid-template-areas:
    'header main'
    'header footer';

  background-color: ${({ theme }) => theme.background};
  transition: animation 1s;

  main {
    grid-area: main;
  }
`;
