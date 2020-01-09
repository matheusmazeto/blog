import styled from 'styled-components';

export const Menu = styled.section``;

export const Label = styled.label`
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover div {
    box-shadow: 1px 1px 7px -1px #000;
  }
  div {
    width: 30px;
    height: 5px;
    background: #000;

    border-radius: 0px;
    transition: 0.4s ease;
    &:not(:first-child) {
      margin-top: 5px;
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
        margin-top: 1px;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        margin-top: -15px;
        transform: rotate(45deg);
      }
    }
  }
`;
