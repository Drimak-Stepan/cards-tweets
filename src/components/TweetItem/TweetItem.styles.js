import styled from "styled-components";

export const Item = styled.li`
  width: 380px;
  height: 460px;
  background-color: #766a92;
  background-image: linear-gradient(
    to bottom,
    #471ca9 0%,
    #5736a3 69.1%,
    #4b2a99 100%
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
