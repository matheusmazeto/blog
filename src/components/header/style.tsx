import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;

  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  grid-area: header;

  display: flex;
  align-items: center;
  z-index: 1;
`;
