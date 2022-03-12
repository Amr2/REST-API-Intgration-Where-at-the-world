import styled from "styled-components";
import { device } from "@/constants/index";

export const HeaderContainer = styled.header`
  box-shadow: 0px 0px 20px ${(props) => props.theme.shadowColor};
  background-color: ${(props) => props.theme.primeColor};
  margin-bottom: 2rem;
`;

export const NavBarContainer = styled.nav`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  h1 {
    font-size: 1rem;
    @media ${device.mobileL} {
      font-size: ${(props) => props.theme.fontSize};
    }
  }

  div {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
    }
  }
`;
