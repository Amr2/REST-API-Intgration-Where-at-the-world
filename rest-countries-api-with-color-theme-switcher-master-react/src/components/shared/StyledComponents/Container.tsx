import { device } from "@/constants/index";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left:1rem;
  padding-right: 1rem;
  @media ${device.mobileL} {
    width: 540px;
  }
  @media ${device.tablet} {
    width: 720px;
  }
  @media ${device.laptop} {
    width: 960px;
  }
  @media ${device.laptopL} {
    width: 1140px;
  }
  @media ${device.desktop} {
    width: 1320px;
  }
`;

export default Container;
