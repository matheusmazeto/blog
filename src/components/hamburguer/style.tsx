import styled from 'styled-components';

export const HamburguerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90px;
  height: 90px;

  span {
    background: #333333;
    margin-bottom: 4px;
    border-radius: 2px;
    width: 28px;
    height: 4px;
  }
`;
