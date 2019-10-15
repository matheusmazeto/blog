import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 90px 1fr;

  grid-template-areas:
    'header'
    'main';

  ${media.greaterThan('small')`
    background: blue;
  `}

  main {
    width: 100%;
    height: 100%;

    background: #f5f5f5;

    grid-area: main;
  }
`;
