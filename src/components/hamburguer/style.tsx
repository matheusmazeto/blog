import styled from 'styled-components';

export const HamburguerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;

  div {
    z-index: 1;
    width: 55px;
    height: 10px;
    background: ${({ open }) => (open ? '#2684FF' : '#2684FF')};
    box-shadow: 0px 0px 3px black;
    border-radius: 2px;
    transition: 0.4s ease;
    &:not(:first-child) {
      margin-top: 10px;
    }

    transform: ${({ open }) =>
      open ? 'rotateY(180deg) rotateX(360deg)' : 'rotateY(0deg) rotateX(0deg)'};
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      margin-top: ${({ open }) => (open ? '-30px' : '10px')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }
  }
`;
