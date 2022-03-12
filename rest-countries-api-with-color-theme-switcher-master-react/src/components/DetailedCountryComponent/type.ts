export type detailedCountryDataType = {
  name: string;
  region: string;
  flag: string;
  capital: string;
  nativeName: {official:string}[];
  subRegion: string;
  population: number;
  currencies: { name: string }[];
  languagees: string[];
  borderCountries: string[];
  domain: string[];
};
