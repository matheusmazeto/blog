import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.background};
  transition: background-color 1s;
`;

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
`;
