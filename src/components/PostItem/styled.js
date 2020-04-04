import styled from 'styled-components';
import { Link } from 'gatsby';

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 2rem 1.2rem;
  font-family: Rubik, 'sans-serif';
  border-bottom: 0.1rem dotted var(--divider);

  &:hover {
    background-color: rgba(200, 230, 201, 0.1);
  }
`;

export const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h4`
  font-size: var(--font-xlg);
  font-weight: 700;
  padding-bottom: 1rem;
  color: var(--header);
`;

export const Description = styled.p`
  font-size: var(--font-default);
  font-weight: 400;
  color: var(--paragraph);
`;

export const Date = styled.time`
  font-size: var(--font-default);
  font-weight: 100;
  padding-bottom: 1.4rem;
  color: var(--date);
`;

export const Tag = styled.a`
  font-size: var(--font-default);
  font-weight: 700;
  padding: 0.8rem;
  background-color: #3999;
  border-radius: 0.3rem;
`;
