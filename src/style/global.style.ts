import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
     
    }

    body{
        background-color: #161531;
    }


   

    :root{
        --color-pink: #FF01A2;
        --color-white:#FFFFFF;
        --color-gray:#282828;
        --color-pink2:#FF01A26B;
        --color-gray2:#D9D9D9;
        --color-red:#FF00008A;
        --color-green:#19A9039E;
        --color-green2:#14FF00;
    }
`;
