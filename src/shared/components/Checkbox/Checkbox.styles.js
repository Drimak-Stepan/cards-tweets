import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  z-index: 99;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #766a92;
  margin-top: 2px;
  border-radius: 3.44px;
`;

export const CheckBoxItem = styled.div`
  display: inline;
  margin-right: 5px;
  width: 44px;
`;

export const CheckBoxValue = styled.div`
  z-index: 9;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
