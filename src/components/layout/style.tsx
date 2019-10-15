import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    'sidebar header '
    'sidebar  main';

  main {
    width: 100%;
    height: 100%;

    background: #f5f5f5;

    grid-area: main;
  }
`;
