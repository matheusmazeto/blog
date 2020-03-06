import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
`;

export const Logo = styled(Link)`
  color: var(--highlight);
  font-size: 2rem;
  text-decoration: none;
`;

export const WrapperMenu = styled.section``;

export const DarkModeButton = styled.span`
  color: var(--text);

  &.light {
    &:hover {
      color: #e2e240;
    }
  }
`;
