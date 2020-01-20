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
  font-family: 'Roboto Mono', monospace;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  color: #ff4f00;
`;
