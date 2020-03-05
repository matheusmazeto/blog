import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header``;

export const Logo = styled(Link)`
  color: var(--highlight);
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
