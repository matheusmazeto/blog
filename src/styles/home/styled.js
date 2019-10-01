import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: column wrap;

  margin: 40px 30px;
  max-width: 700px;

  transition: all ${({ theme }) => theme.transition};

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    margin: 30px 0;
    color: ${({ theme }) => theme.text};
    transition: all ${({ theme }) => theme.transition};
  }

  p {
    font-family: 'Playfair Display', serif;
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
    font-size: 18px;
    margin: 10px 0;
    transition: all ${({ theme }) => theme.transition};
  }

  span {
    color: ${({ theme }) => theme.color};
    transition: all ${({ theme }) => theme.transition};
  }
  a {
    color: ${({ theme }) => theme.color};
    transition: all ${({ theme }) => theme.transition};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.color};
    }
  }
`;
