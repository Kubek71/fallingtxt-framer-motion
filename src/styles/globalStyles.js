import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body, html {
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

    
}

.App {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262621;
}
`;
