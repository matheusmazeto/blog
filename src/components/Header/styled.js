import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem;

  img {
    width: 3rem;
    cursor: pointer;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--highlight);
`;

export const WrapperMenu = styled.section`
  display: flex;
  align-items: center;
`;

export const DarkModeButton = styled.span`
  display: flex;
  color: var(--text);
  cursor: pointer;
  padding-right: 0.5rem;
  transition: all 1s;

  &.light {
    &:hover {
      color: #e2e240;
    }
  }
`;
