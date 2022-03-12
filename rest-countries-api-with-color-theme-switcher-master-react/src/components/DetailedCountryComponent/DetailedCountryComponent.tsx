import React, { memo, useCallback, useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

// neeeded Api Methods
import { fetctCountryByName } from "@/api/fetchingMethods";

// needed Icons
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// needed styles
import { SingleDetailedCountryContainer } from "./styles";


// needed types
import { detailedCountryDataType } from "./type";

// needed components
import CountryInfoComponent from "./CountryInfoComponent";
import { backNavgationIndex } from "@/constants/index";

const DetailedCountryComponent = () => {
  const [currentDetailedCountry, setCurrentDetailedCountry] = useState<
    detailedCountryDataType | any
  >({});
  const { name } = useParams();
  const navigate = useNavigate();

  const countryDetailedData = useCallback(async () => {
    //   i have to handle this problem but i will stay with fix :D ( its not the fix)
    const countryData = await fetctCountryByName(name ?? "Egypt");
    setCurrentDetailedCountry(countryData.data[0]);
  }, [name]);

  const formateObjectData = (object: {}, targetKey: string) =>
    Object.keys(object).map(
      (key) => currentDetailedCountry?.[targetKey]?.[key]
    );

  const formateNavtiveData = (object: {}) =>
    Object.keys(object).map(
      (key) => currentDetailedCountry?.name?.nativeName?.[key]
    );

  useEffect(() => {
    countryDetailedData();
  }, [countryDetailedData]);

  return (
    <SingleDetailedCountryContainer>
      <button onClick={() => navigate(backNavgationIndex)}>
        <FontAwesomeIcon icon={faLeftLong} /> Back
      </button>

      <CountryInfoComponent
        name={currentDetailedCountry?.name?.official}
        capital={currentDetailedCountry?.capital?.[0]}
        region={currentDetailedCountry?.region}
        flag={currentDetailedCountry?.flags?.["svg"]}
        population={currentDetailedCountry?.population}
        borderCountries={currentDetailedCountry?.borders ?? []}
        domain={currentDetailedCountry?.tld}
        subRegion={currentDetailedCountry?.region?.subregion}
        nativeName={formateNavtiveData(
          currentDetailedCountry?.name?.nativeName ?? {}
        )}
        currencies={formateObjectData(
          currentDetailedCountry?.currencies ?? {},
          "currencies"
        )}
        languagees={formateObjectData(
          currentDetailedCountry?.languages ?? {},
          "languages"
        )}
      />
    </SingleDetailedCountryContainer>
  );
};

export default memo(DetailedCountryComponent);
