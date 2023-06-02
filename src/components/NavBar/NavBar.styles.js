import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #ebd8ff;
  color: #373737;
  font-weight: 700;

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
