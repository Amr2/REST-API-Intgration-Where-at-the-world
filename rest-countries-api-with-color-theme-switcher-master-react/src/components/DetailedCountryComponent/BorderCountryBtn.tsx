import React, { FC, memo, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetctCountryByCode } from "@/api/fetchingMethods";

// needed helpers
import { createLink } from "@/helpers/index";

const BorderCountryBtn: FC<{ countryCode: string }> = ({ countryCode }) => {
  const [borderCountry, setBorderCountry] = useState(null);
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams?.get("theme") ?? "light";
  const countryInfo = useMemo(async () => {
    const countryInfo = await fetctCountryByCode(countryCode);
    let name =
      countryInfo.data?.[0]?.name?.common === "Israel"
        ? "Palestine"
        : countryInfo?.data?.[0].name?.common;
    setBorderCountry(name ?? null);
  }, [countryCode]);
  return (
    <>
      {borderCountry && (
        <Link to={createLink(`/country/${borderCountry}`, currentTheme)}>
          {borderCountry}
        </Link>
      )}
    </>
  );
};

export default memo(BorderCountryBtn);
