import styled from 'styled-components';

export const Menu = styled.section`
  display: block;
  position: relative;
  width: 20px;
  height: 2px;
  cursor: pointer;

  #toggle {
    display: none;
  }

  .menu-button {
    width: 100%;
    height: 3px;
    background-color: #000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
  }

  .menu-button:before,
  .menu-button:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
  }

  .menu-button:before {
    top: -6px;
  }
  .menu-button:after {
    top: 6px;
  }

  .menu-button,
  .menu-button:before,
  .menu-button:after {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  }

  #toggle:checked + label .menu-button {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
  }

  #toggle:checked + label .menu-button:before {
    transform: rotate(45deg);
    top: 0px;
  }

  #toggle:checked + label .menu-button:after {
    transform: rotate(135deg);
    top: 0;
  }
`;
