import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  transition: all ${({ theme }) => theme.transition};
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 6.5rem;
  }
`;
