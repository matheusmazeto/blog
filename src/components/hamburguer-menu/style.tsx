import styled from 'styled-components';

export const Menu = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;

  background: #999;
`;

export const Label = styled.label`
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover div {
    box-shadow: 1px 1px 7px 1px ${({ theme }) => theme.hoverBrighter};
  }
  div {
    width: 55px;
    height: 10px;
    background: ${({ theme }) => theme.text};
    box-shadow: 1px 1px 3px ${({ theme }) => theme.hoverDarker};
    border-radius: 2px;
    transition: 0.4s ease;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const Hamburguer = styled.input.attrs((props) => ({
  type: 'checkbox',
  id: 'menu-hamburguer',
}))`
  display: none;

  &:checked + ${Label} {
    div {
      transform: rotateY(180deg) rotateX(360deg);
      &:first-child {
        transform: rotate(-45deg);
        margin-top: 20px;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        margin-top: -30px;
        transform: rotate(45deg);
      }
    }
  }
`;
