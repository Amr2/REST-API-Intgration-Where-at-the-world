import themes from "@/src/themes";
import { createGlobalStyle } from "styled-components";
const GlobaleStyles = createGlobalStyle<{theme:any}>`
*{
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.fontColor};

    body{
        background: ${(props) => props.theme.primeColor};
    }
}
`;

export default GlobaleStyles;
