import React, { FC, memo, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetctCountryByCode } from "@/api/fetchingMethods";

// needed helpers
import { createLink } from "@/helpers/index";

const BorderCountryBtn: FC<{ countryCode: string }> = ({ countryCode }) => {
  const [borderCountry, setBorderCountry] = useState(
    "border Country PlaceHolder Text"
  );
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams?.get("theme") ?? "light";
  const countryInfo = useMemo(async () => {
    const countryInfo = await fetctCountryByCode(countryCode);
    setBorderCountry(countryInfo.data?.[0].name.common);
  }, [countryCode]);
  return (
    <Link to={createLink(`/country/${borderCountry}`, currentTheme)}>
      {borderCountry}
    </Link>
  );
};

export default memo(BorderCountryBtn);
