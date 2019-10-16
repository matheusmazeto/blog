import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 90px 1fr;

  grid-template-areas:
    'header'
    'main';

  ${media.greaterThan('small')`
    grid-template-columns: 250px 1fr;
    grid-template-rows: 90px 1fr;

    grid-template-areas:
    'header header'
    'sidebar main';
  `}

  main {
    width: 100%;
    min-height: 100vh;

    position: relative;
    left: 0;

    ${media.greaterThan('small')`
    
  `}

    background: #f5f5f5;
    grid-area: main;
  }
`;
