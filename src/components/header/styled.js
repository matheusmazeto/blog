import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;

  height: 6.5rem;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${({ theme }) => theme.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const InnerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;

  height: 100%;

  img {
    display: flex;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  h1 {
    display: flex;
    margin-left: 0.5rem;
    font-size: 2rem;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  height: 100%;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      text-transform: uppercase;
      font-size: 1.6rem;

      padding: 0 1rem;

      display: flex;
      align-items: center;

      a {
        position: relative;
        text-decoration: none;
        line-height: 6.5rem;

        &:before,
        &:after {
          content: '';
          position: absolute;
          transition: transform 0.1s ease;
        }

        &:before {
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.6rem;
          background: #333;
          transform: scaleX(0);
        }
        &:hover:before {
          transform: scaleX(1);
        }
      }
    }
  }
`;
