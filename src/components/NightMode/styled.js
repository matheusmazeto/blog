import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 5rem;
  height: 2.4rem;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    left: 0.2rem;
    width: 2.2rem;
    height: 2.2rem;
    background: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const DarkModeButton = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} {
    background: #bada55;
  }

  &:checked + ${Label}:after {
    left: calc(100% - 0.2rem);
    transform: translateX(-100%);
  }
`;
