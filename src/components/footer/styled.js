import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;

  background: ${({ theme }) => theme.background};
  transition: all 1s;
  width: 100%;

  align-items: flex-end;
`;
