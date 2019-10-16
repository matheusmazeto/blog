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
    background: blue;

    grid-template-columns: 1fr;
    grid-template-rows: 0 1fr;

    grid-template-areas:
    'header '
    'sidebar main';
  `}

  main {
    width: 100%;
    min-height: 100vh;

    position: relative;
    left: 0;

    ${media.greaterThan('small')`
    left: 250px;
    padding-top: 90px;
  `}

    background: #f5f5f5;
    grid-area: main;
  }
`;
