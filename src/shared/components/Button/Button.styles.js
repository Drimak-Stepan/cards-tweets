import styled from "styled-components";

export const Btn = styled.button`
  position: relative;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
    display: flex;
    align-items: center;
  }

  width: 196px;
  height: 50px;
  padding: 14px;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  background-color: #ebd8ff;
  color: #373737;
  border-radius: 3.44px;
  border: none;
  outline: none;
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    background-color: #5cd3a8;
  }

  :active,
  :disabled {
    filter: opacity(0.6);
  }
`;
