import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarContainer = styled.aside`
  display: none;

  grid-area: sidebar;

  width: 250px;
  height: 100vh;
  background: #333;

  ${media.greaterThan('small')`
    display: flex;
    position: fixed;
  `}

  section {
    background: #707070;

    height: 90px;

    display: flex;
    align-items: center;
  }
`;
