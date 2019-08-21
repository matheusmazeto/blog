import styled from 'styled-components';

export const Menu = styled.section`
  padding-top: 10px;
`;

export const Label = styled.label`
  cursor: pointer;
  transition: 0.5s ease;
  height: 50px;
  &:hover div {
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
  }
  div {
    width: 55px;
    height: 10px;
    background: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    transition: 0.4s ease;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const Hamburguer = styled.input.attrs(props => ({
  type: 'checkbox',
  id: 'menu-hamburguer',
  checked: props.openMenu,
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
