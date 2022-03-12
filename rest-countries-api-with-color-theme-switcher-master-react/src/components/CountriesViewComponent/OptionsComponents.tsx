import React from "react";

// need styles
import { OptionContainer } from "./styled";

// needed components
import RegainFilterComponent from "./RegainFilterComponent";
import SearchComponent from "./SearchComponent";

const OptionsComponents = () => {
  return (
    <OptionContainer>
      <SearchComponent />
      <RegainFilterComponent />
    </OptionContainer>
  );
};

export default OptionsComponents;
