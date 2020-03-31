import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Logo = styled(Link)`
  color: var(--highlight);
  font-size: 2rem;
  text-decoration: none;
`;

export const WrapperMenu = styled.section``;

export const DarkModeButton = styled.span`
  color: var(--text);

  svg {
    fill: ${({ isDarkMode }) => 'var(--invert)'};
  }

  img {
    width: 3rem;
  }
`;
