import styled from 'styled-components';

export const Container = styled.section`
  label {
    input {
      -webkit-appearance: none;
      display: none;
      visibility: hidden;
    }

    span {
      position: relative;
      display: block;
      width: 40px;
      height: 20px;
      background: #092c3e;
      cursor: pointer;
      border-radius: 20px;
      overflow: hidden;
      transition: ease-in 0.5s;

      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        background: #fff;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: 0.5s;
      }

      &::after {
        content: '';
        position: absolute;
        top: 2px;
        right: 2px;
        background: #092c3e;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: 0.5s;
        transform: translateX(50px);
      }
    }

    input:checked ~ span {
      background: #fff;

      &::before {
        transform: translateX(-50px);
      }

      &::after {
        transform: translateX(0px);
      }
    }
  }
`;
