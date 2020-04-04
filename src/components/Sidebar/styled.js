import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: sidebar;
  border-right: 0.1rem solid var(--border);
  height: 100vh;
  width: 100%;
  background-color: var(--bg-sidebar);
`;

export const NightModeContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 1.5rem;
`;
