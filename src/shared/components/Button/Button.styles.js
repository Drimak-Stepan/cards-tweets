import styled from "styled-components";

export const Btn = styled.button`
  position: relative;
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

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 0.8;
  color: #ebd8ff;
  border-radius: 3.44px;
  border: none;
  outline: none;

  transition: color 250ms ease;

  :not([disabled]):hover,
  :not([disabled]):focus-visible {
    cursor: pointer;
    color: #5cd3a8;
  }

  :active,
  :disabled {
    filter: opacity(0.6);
  }
`;
