import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        top: 0;
        width: 100%;
        min-height: 100%;
        background: ${({ theme }) => theme.background};
        font-family: $hero-font;
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
        z-index: -2;
    }`

    export default GlobalStyles;