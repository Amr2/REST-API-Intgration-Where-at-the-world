import React, { FC, useMemo } from "react";

// needed types
import { detailedCountryDataType } from "./type";

// needed styles
import { DetailedCountryContainer } from "./styles";

// needed components
import BorderCountryBtn from "./BorderCountryBtn";

const CountryInfoComponent: FC<detailedCountryDataType> = (props) => {
  // render Methods
  const renderBorderCountres = useMemo(() => {
    if (props.borderCountries.length <= 0) return null;
    return (
      <div className="infoList">
        <label>Border Countries:</label>
        <div>
          {props.borderCountries.map((country: string) => (
            <BorderCountryBtn countryCode={country} />
          ))}
        </div>
      </div>
    );
  }, [props?.borderCountries]);

  return (
    <DetailedCountryContainer>
      <img src={props?.flag} alt={`${props?.name} country flag`} />
      <div>
        <h3>{props.name}</h3>
        <div className="infoList">
          <ul>
            <li>
              <label>Native Name:</label> {props.nativeName[0]?.official}
            </li>
            <li>
              <label>Population:</label> {props?.population}
            </li>
            <li>
              <label>Region:</label> {props?.region}
            </li>
            <li>
              <label>Sub Region:</label>
              {props?.subRegion}
            </li>
            <li>
              <label>capital:</label> {props?.capital}
            </li>
          </ul>
          <ul>
            <li>
              <label>Top Level Domain:</label> {props?.domain}
            </li>
            <li>
              <label>Currencies:</label>{" "}
              {props?.currencies?.map((currency) => currency?.name)?.join(",")}
            </li>
            <li>
              <label>Languages:</label> {props?.languagees?.join(",")}
            </li>
          </ul>
        </div>
        {renderBorderCountres}
      </div>
    </DetailedCountryContainer>
  );
};

export default CountryInfoComponent;
