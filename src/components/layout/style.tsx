import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 1fr;
  grid-template-areas:
    'header'
    'main';

  main {
    padding: 90px 0;
  }
`;
