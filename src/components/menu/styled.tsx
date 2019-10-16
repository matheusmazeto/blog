import styled from 'styled-components';

export const MenuContainer = styled.nav`
  position: fixed;
  top: 90px;
  bottom: 0;
  left: 0;
  transition: height 0.5s;
  width: 100%;
  height: ${({ open }) => (open ? '100%' : '0')};
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1;

  display: flex;

  nav {
    width: 100%;
    height: calc(100% - 90px);

    display: flex;

    ul {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      li {
        width: 100%;
        text-align: center;
        list-style: none;

        & + li {
          margin-top: 20px;
        }

        a {
          text-align: center;
          text-decoration: none;
          font-size: 45px;
          font-family: 'Rubik Mono One', sans-serif;
          color: #333;

          transition: opacity 0.2s;
          opacity: ${({ open }) => (open ? '1' : '0')};

          outline: none;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`;
