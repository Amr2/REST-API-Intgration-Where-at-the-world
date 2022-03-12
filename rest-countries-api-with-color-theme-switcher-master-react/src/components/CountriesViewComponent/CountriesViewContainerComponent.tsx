import React, { FC, memo } from "react";

// needed styles
import { CountriesCardsContainer } from "./styled";

// needed types
import { countriesArray } from "./type";

// needed components
import CountryCardComponent from "@/components/CountryCardComponent/CountryCardComponent";

const CountriesViewContainerComponent: FC<countriesArray> = ({ countries }) => {
  // render methods
  const renderCountries =
    countries.length > 0 ? (
      <>
        {countries.map((country) => (
          <>
            <CountryCardComponent
              name={country?.name?.official}
              capital={country?.capital?.[0]}
              region={country?.region}
              flag={country?.flags?.["svg"]}
              population={country?.population}
            />
          </>
        ))}
      </>
    ) : null;

  return <CountriesCardsContainer>{renderCountries}</CountriesCardsContainer>;
};

export default memo(CountriesViewContainerComponent);
