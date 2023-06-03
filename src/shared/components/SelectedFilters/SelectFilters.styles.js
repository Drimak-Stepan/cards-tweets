import styled from "styled-components";

export const SelectedFiltersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SelectedFiltersItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 3px 16px;
  font-family: Montserrat;
  font-size: 18px;
  line-height: 1.2;
  border-radius: 3.44px;
  border: none;
  gap: 4px;
  justify-content: space-between;
  box-shadow: 0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
  background-color: #ebd8ff;
  color: #373737;
  cursor: pointer;
`;
