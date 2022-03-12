import React from "react";
import Container from "@/components/shared/StyledComponents/Container";

// needed styles
import { HeaderContainer, NavBarContainer } from "./styled";

// needed components
import ThemeTogglerComponent from "./ThemeTogglerComponent";

const NavBarComponent = () => {
  return (
    <HeaderContainer>
      <Container>
        <NavBarContainer>
          <h1> Where in the world? </h1>
          <ThemeTogglerComponent />
        </NavBarContainer>
      </Container>
    </HeaderContainer>
  );
};

export default NavBarComponent;
