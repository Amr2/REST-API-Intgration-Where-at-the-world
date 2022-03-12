import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

// needed helpers
import { createLink } from "@/helpers/index";

// needed icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";


const ThemeTogglerComponent = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams.get("theme") ?? "light";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  const themeLink = createLink(pathname, nextTheme);

  // render methods
  const renderNextThemeInfo = (
    <>
      <FontAwesomeIcon icon={currentTheme === "light" ? faMoon : faSun} />
      <p> {currentTheme === "light" ? "Dark Mode" : "Light Mode"} </p>
    </>
  );
  
  return (
    <div>
      <Link to={themeLink}>{renderNextThemeInfo}</Link>
    </div>
  );
};

export default ThemeTogglerComponent;
