import React, { memo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// need Icons
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// needed styles
import { FilterContainer } from "./styled";

// needed helpers
import { createLink } from "@/helpers/index";

const RegainFilterComponent = () => {
  const [currentFiltrationOption, setCurrentFiltrationOption] = useState<
    string | null
  >(null);
  const [isOpen, setIsOpen] = useState(false)
  const navigat = useNavigate();
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams.get("theme") ?? "light";
 
  //   handlers Methods
  const regainSelectionHandler = (filterOption: string | null) => {
    setCurrentFiltrationOption(filterOption);
    if (filterOption == null) {
      navigat(createLink("/",currentTheme));
      return;
    }
    try {
      const searchPrams = JSON.stringify({ region: filterOption });
      navigat(createLink(`/countries/${searchPrams}`,currentTheme));
    } catch (error) {
      console.log(error);
      setCurrentFiltrationOption(null);
    }
  };
  return (
    <FilterContainer opened={isOpen} onClick={()=>setIsOpen(!isOpen)}>
      <p>{currentFiltrationOption ?? "Filter by Regain"}</p>
      <ul>
        <li onClick={() => regainSelectionHandler(null)}>all</li>
        <li onClick={() => regainSelectionHandler("Africa")}>Africa</li>
        <li onClick={() => regainSelectionHandler("Americas")}>Americas</li>
        <li onClick={() => regainSelectionHandler("Asia")}>Asia</li>
        <li onClick={() => regainSelectionHandler("Europe")}>Europe</li>
        <li onClick={() => regainSelectionHandler("Oceania")}>Oceania</li>
      </ul>
      <FontAwesomeIcon icon={faChevronDown} />
    </FilterContainer>
  );
};

export default memo(RegainFilterComponent);
