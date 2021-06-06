import { createGlobalStyle } from "styled-components"
import './fonts/font.css'

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Netflix Sans Regular', 'Helvetica Neue', Helvetica, Arial, san-serif;
        -webkit-font-smoothing: antialiased; /* For Smooth scrolling*/
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
    }

`;
