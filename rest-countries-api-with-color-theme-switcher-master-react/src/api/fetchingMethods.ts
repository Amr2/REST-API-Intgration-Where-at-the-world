import axiosServer from ".";

export const fetchAllCountries = async () => await axiosServer.get("/all");

export const fetctCountryByName = async (name: string) =>
  await axiosServer.get(`/name/${name}`);

export const fetctCountryByLanguage = async (lang: string) =>
  await axiosServer.get(`/lang/${lang}`);

export const fetctCountryByCapital = async (capital: string) =>
  await axiosServer.get(`/capital/${capital}`);

export const fetctCountryByRegion = async (region: string) =>
  await axiosServer.get(`/region/${region}`);

export const fetctCountrySubregion = async (subregion: string) =>
  await axiosServer.get(`/subregion/${subregion}`);

export const fetctCountryByCurrency = async (currency: string) =>
  await axiosServer.get(`/currency/${currency}`);

export const fetctCountryByCode = async (code: string) =>
  await axiosServer.get(`/alpha/${code}`);

export const fetctCountryByListOfCode = async (codeList: string[]) =>
  await axiosServer.get(`/alpha/${codeList}`);
