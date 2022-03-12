import {
  fetchAllCountries,
  fetctCountryByName,
  fetctCountryByRegion,
} from "@/api/fetchingMethods";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// needed styles
import Container from "@/components/shared/StyledComponents/Container";

// needed components
import CountriesViewContainerComponent from "./CountriesViewContainerComponent";
import OptionsComponents from "./OptionsComponents";

const CountriesViewComponent = () => {
  const [countries, setCountries] = useState<any>([]);
  const { method } = useParams();

  const setCounriesData = useCallback(async () => {
    if (!method) {
      try {
        const data = await fetchAllCountries();
        setCountries([...data.data]);
      } catch (error: any) {
        console.log(error?.response?.data?.message ?? error);
      }
      return;
    }

    try {
      const currentMethodobj = JSON.parse(method);
      const currentMethod = Object.keys(currentMethodobj)[0];

      if (currentMethod === "name") {
        try {
          const data = await fetctCountryByName(currentMethodobj?.name);
          setCountries([...data.data]);
        } catch (error: any) {
          console.log(error?.response?.data?.message ?? error);
        }
        return;
      }
      if (currentMethod === "region") {
        try {
          const data = await fetctCountryByRegion(currentMethodobj?.region);
          setCountries([...data.data]);
        } catch (error: any) {
          console.log(error?.response?.data?.message ?? error);
        }

        return;
      }
    } catch (error) {
      console.log(error);
    }
  }, [method]);

  useEffect(() => {
    setCounriesData();
  }, [setCounriesData]);

  return (
    <div>
      <Container>
        <OptionsComponents />
        <CountriesViewContainerComponent countries={countries} />
      </Container>
    </div>
  );
};

export default CountriesViewComponent;
