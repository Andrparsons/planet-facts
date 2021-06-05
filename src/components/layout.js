import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Header from "./header";
import bgImage from "../assets/background-stars.svg";

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

      //planet colours

      --mercury: var(--tealBlue);
      --venus: var(--lightOrange);
      --earth: var(--bluishPurple);
      --mars: var(--paleRed);
      --jupiter: var(--scarlet);
      --saturn: var(--brickOrange);
      --uranus: var(--turquiose);
      --neptune: var(--azul);
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
    background: url(${bgImage}) var(--midnight);
    color: var(--white);
    overflow-x: hidden;
  }
`;

const Container = styled.main`
  display: grid;
  grid-template-rows: min-content 300px 1fr min-content;
  grid-template-areas:
    "buttons"
    "image"
    "content"
    "cards";

  @media (min-width: 600px) {
    grid-template-rows: 460px 1fr min-content;
    grid-template-areas:
      "image image"
      "content buttons"
      "cards cards";
  }

  @media (min-width: 1100px) {
    grid-template-rows: 1fr 1fr min-content;
    grid-template-columns: 1fr 350px;
    grid-template-areas:
      "image content"
      "image buttons"
      "cards cards";
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: buttons;
  border-bottom: 1px solid #ffffff33;
  justify-content: space-between;
  padding: 0 1.5rem;

  @media (min-width: 600px) {
    flex-direction: column;
    border-bottom: none;
    padding: 0;
  }

  @media (min-width: 1100px) {
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: cards;
`;

const ContentGroup = styled.div`
  grid-area: content;

  @media (min-width: 1100px) {
  }
`;

const ImageGroup = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: image;
  display: grid;
`;

const PlanetImage = styled.img`
  max-width: 38.5%;
  margin: 0 auto;
  height: auto;

  @media (min-width: 600px) {
    max-width: 63.5%;
  }

  @media (min-width: 1100px) {
    max-width: 100%;
  }
`;

const PlanetOverlay = styled.img``;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
    </>
  );
}

Layout.ButtonGroup = function LayoutButtonGroup({ children }) {
  return <ButtonGroup>{children}</ButtonGroup>;
};

Layout.CardGroup = function LayoutCardGroup({ children }) {
  return <CardGroup>{children}</CardGroup>;
};

Layout.ContentGroup = function LayoutContentGroup({ children }) {
  return <ContentGroup>{children}</ContentGroup>;
};

Layout.ImageGroup = function LayoutImageGroup({ children }) {
  return <ImageGroup>{children}</ImageGroup>;
};

Layout.PlanetImage = function LayoutPlanetImage({ ...restProps }) {
  return <PlanetImage {...restProps} />;
};

Layout.PlanetOverlay = function LayoutPlanetOverlay({ ...restProps }) {
  return <PlanetOverlay {...restProps} />;
};
