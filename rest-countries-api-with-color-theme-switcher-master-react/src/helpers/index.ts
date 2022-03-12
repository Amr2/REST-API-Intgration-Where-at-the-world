import { createSearchParams } from "react-router-dom";

export const getCountrySelectedCategory = (pathname: string) =>
  pathname.split("/").pop();
export default {};

export const createLink = (pathname: string , theme:string) => {
  return {
    pathname,
    search: `?${createSearchParams({
      theme: theme,
    })}`,
  };
};


