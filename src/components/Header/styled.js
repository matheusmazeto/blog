import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Logo = styled(Link)`
  color: var(--highlight);
  font-weight: 700;
  font-size: 3rem;
  text-align: left;
  text-shadow: rgb(224, 224, 224) 3px 4px 0px;
  -webkit-font-smoothing: auto;
  text-decoration: none;
  font-family: Rubik, sans-serif;
`;

export const WrapperMenu = styled.section``;
