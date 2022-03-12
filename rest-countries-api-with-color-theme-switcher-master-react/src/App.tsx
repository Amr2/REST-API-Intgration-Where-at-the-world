import { Routes, Route, useSearchParams, Link } from "react-router-dom";

// needed styles
import GlobaleStyles from "@/components/GlobaleStyles/GlobaleStyles";
import { ThemeProvider } from "styled-components";

// need themes
import themes from "@/themes/index";

// needed components
import LayoutComponents from "@/components/LayoutComponent/LayoutComponents";
import CountriesViewComponent from "./components/CountriesViewComponent/CountriesViewComponent";
import DetailedCountryComponent from "./components/DetailedCountryComponent/DetailedCountryComponent";

function App() {
  const [searchParams] = useSearchParams();
  const currentTheme = searchParams.get("theme") ?? "light";
  const putTheme = currentTheme === "light" ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={putTheme}>
      <div className="App">
        <GlobaleStyles />
        <LayoutComponents>
          <Routes>
            <Route
              path="/country/:name"
              element={<DetailedCountryComponent />}
            />
            <Route path="/" element={<CountriesViewComponent />}>
              <Route
                path="/countries/:method"
                element={<CountriesViewComponent />}
              />
            </Route>
          </Routes>
        </LayoutComponents>
      </div>
    </ThemeProvider>
  );
}

export default App;
