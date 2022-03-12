import React, { FC } from "react";

// needed components
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponents: FC = ({ children }) => {
  return (
    <>
      <NavBarComponent />
      <main>{children}</main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default LayoutComponents;
