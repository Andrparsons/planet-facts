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

  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.2875;
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media(min-width: 600px) {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    @media(min-width: 1100px) {
      font-size: 5rem;
    }

  }

  h2 {
    font-family: 'Antonio', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.3;
    letter-spacing: -.75px;
    margin: 0;


    @media(min-width: 600px) {
      font-size: 1.5rem;
      letter-spacing: -.9px;
    }

    @media(min-width: 1100px) {
      font-size: 2.5rem;
      letter-spacing: -1.5px;
    }

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
    font-size: .5rem;
    line-height: 2;
    letter-spacing: .73px;
    margin: 0;

    @media(min-width: 1100px) {
      font-size: .6875rem;
      letter-spacing: 1px;
      line-height: 2.2;
    }

  }

  body {
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    font-size: .6875rem;
    line-height: 2;
    background: url(${bgImage}) var(--midnight);
    color: var(--white);
    overflow-x: hidden;

    @media(min-width: 1100px) {
      font-size: .875rem;
      line-height: 1.78;    
    }
  }
`;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
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
    grid-template-rows: 1fr min-content min-content;
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
    justify-content: center;
    margin-right: 2.5rem;
  }

  @media (min-width: 1100px) {
    margin-right: 0;
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: cards;
  margin: 0 1.5rem 3rem 1.5rem;

  @media (min-width: 625px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5rem 2.5rem 2.25rem 2.5rem;
    gap: 0.625rem;
  }

  @media (min-width: 1100px) {
    margin: 5.5rem 0 3.5rem 0;
  }
`;

const ContentGroup = styled.div`
  grid-area: content;

  @media (min-width: 1100px) {
  }
`;

const ImageGroup = styled.div`
  align-content: center;
  grid-area: image;
  display: grid;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
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

const PlanetOverlay = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 80px;
  bottom: 1rem;

  @media (min-width: 600px) {
    width: 100px;
    bottom: 3rem;
  }

  @media (min-width: 1100px) {
    width: 163px;
    bottom: 4.75rem;
  }
`;

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

Layout.ImageContainer = function LayoutImageContainer({ children }) {
  return <ImageContainer>{children}</ImageContainer>;
};
