import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'DynaPuff';
    }

    * {
        margin: 0px;
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
`;

export default GlobalStyles;
