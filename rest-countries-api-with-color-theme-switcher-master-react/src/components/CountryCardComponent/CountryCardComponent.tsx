import React, { FC, memo } from "react";
import { Link, useSearchParams } from "react-router-dom";

// needed types
import { contryCardDataType } from "./type";

// needed styles
import { CountryCard } from "./styled";
import { createLink } from "@/helpers/index";

const CountryCardComponent: FC<contryCardDataType> = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams.get("theme") ?? "light";

  return (
    <CountryCard>
      <Link
        to={createLink(
          `/country/${
            name === "State of Israel" ? "State of Palestine" : name
          }`,
          currentTheme
        )}
      >
        <img
          src={
            name === "State of Israel"
              ? "https://flagcdn.com/ps.svg"
              : flag ?? " "
          }
          alt={`Country ${
            name === "State of Israel" ? "State of Palestine" : name
          } flag`}
        />
      </Link>
      <div>
        <h3>
          {name === "State of Israel" ? "Palestine" : name ?? "TextPlaceHolder"}
        </h3>
        <p>Population: {population ?? "TextPlaceHolder"}</p>
        <p>Region: {region ?? "TextPlaceHolder"}</p>
        <p>Capital: {capital ?? "TextPlaceHolder"}</p>
      </div>
    </CountryCard>
  );
};

export default memo(CountryCardComponent);
