import styled from "styled-components";
import picture1 from "../../images/pictures/picture@1x.png";
import picture2 from "../../images/pictures/picture@2x.png";

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 36px;
  width: 380px;
  height: 460px;
  background-color: #766a92;
  background-image: linear-gradient(
    to left top,
    #471ca9 0%,
    #5736a3 69.1%,
    #4b2a99 100%
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: -2.58px 6.87px 20.62px 0px rgba(0, 0, 0, 0.23);
`;

export const Circle = styled.div`
  margin-bottom: 26px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Text = styled.p`
  margin-bottom: 16px;
  font-family: Montserrat;
  font-style: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  fill: #ffffff 30%;
  width: 76px;
  height: 22px;
`;

export const Pictures = styled.img`
  position: absolute;
  top: 28px;
  height: 168px;
  max-width: 308px;
  width: 100%;
  margin: 0 auto;
  content: url(${picture1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url(${picture2});
  }
`;
