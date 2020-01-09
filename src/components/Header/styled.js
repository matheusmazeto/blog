import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  img {
    width: 4rem;
    cursor: pointer;
  }
`;
