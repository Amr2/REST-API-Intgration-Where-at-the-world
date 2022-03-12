import React, { memo, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// needed helpers
import { createLink } from "@/helpers/index";

// needed Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// needed styled
import { SearchInput } from "./styled";

const SearchComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigat = useNavigate();
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams.get("theme") ?? "light";

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchRef?.current?.value.length === 0) {
      navigat(createLink("/", currentTheme));
      return;
    }
    const searchPrams = JSON.stringify({ name: searchRef?.current?.value });
    navigat(createLink(`/countries/${searchPrams}`, currentTheme));
  };

  return (
    <SearchInput htmlFor="searchInput">
      <form onSubmit={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={"1x"} />
        <input
          type="search"
          name=""
          id="searchInput"
          ref={searchRef}
          placeholder="Search for a country..."
        />
      </form>
    </SearchInput>
  );
};

export default memo(SearchComponent);
