import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  transition: all 1s;

  display: flex;

  header {
    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
