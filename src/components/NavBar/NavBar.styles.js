import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
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

  &.active {
    background-color: #5cd3a8;
  }
`;

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 2px solid #766a92;
  background-color: #fff;

  > nav {
    display: flex;
  }
`;
