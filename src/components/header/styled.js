import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  grid-area: header;
  /* background: ${({ theme }) => theme.background}; */
  background: #777;

  transition: all 1s;

  display: flex;

  header {
    width: 100%;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
   
  }
`;
