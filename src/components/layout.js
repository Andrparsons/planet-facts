import React from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
      //colors
      --white: #ffffff;
      --midnight: #070724;
      --darkBlueGray: #38384f;
      --steel: #838391;
      --tealBlue: #419ebb;
      --lightOrange: #eda249;
      --bluishPurple: #6f2ed6;
      --paleRed: #d14c32;
      --scarlet: #d83a34;
      --brickOrange: #cd5120;
      --turquiose: #1ec2a4;
      --azul: #2d68f0;
  }

  h1 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 5rem;
    line-height: 1.2875;
  }

  h2 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.3;
    letter-spacing: -1.5px;
  }

  h3 {
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: .75rem;
    line-height: 2;
    letter-spacing: 2.6px;
  }

  h4 {
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: .6875rem;
    line-height: 2.2;
    letter-spacing: 1px;
  }

  body {
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.78;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
