import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans'; 
}
html {
    font-size: 62.5%;
    // scroll-behaviour: smooth;
    // 1rem: 10px
    overflow-x: hidden;
}

h1 {
    color:${({theme}) => theme.color.heading}; 
    font-size: 6rem;
    font-weight: 900;
}

h2 {
    color:${({theme}) => theme.color.heading}; 
    font-size: 4.4rem;
    font-weight: 200;
    white-space: normal;
    text-align: center;
}

h3 {
    font-size: 1.8rem;
    font-weight: 400;
}

p {
    color:${({theme}) => theme.color.text}; 
    font-size: 1.65rem;
    line-hight: 1.5;
    margin-top: 1rem;
    font-weight: 400;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

`;