import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PlanetData from "../data/data.json";
import menuIcon from "../assets/icon-hamburger.svg";

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ffffff33;
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1368px;
  margin: 0 1.5rem;

  @media (min-width: 600px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 1rem 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -1.05px;

  @media (min-width: 600px) {
    margin: 2rem 0;
  }

  @media (min-width: 1000px) {
    margin: 1.375rem 0;
  }
`;

const BigMenu = styled.ul`
  display: none;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    display: flex;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

const SmallMenu = styled.div`
  display: flex;

  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  list-style-type: none;
  font-size: 0.6875rem;
  margin-right: 3em;

  &:last-of-type {
    margin-right: 0;
  }

  a {
    color: var(--white);
    font-family: "Spartan", sans-serif;
    line-height: 2.27;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    opacity: 0.75;
    cursor: pointer;
    padding: 1.875rem 0;
    border-top: 4px solid transparent;

    &:hover {
      opacity: 1;
      border-top: 4px solid ${(props) => `var(--${props.colour.toLowerCase()})`};
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderFlex>
        <Title>the planets</Title>
        <BigMenu>
          {PlanetData.map((planet) => {
            return (
              <MenuItem key={planet.name} colour={planet.name}>
                <Link to={`/${planet.name}/`}>{planet.name}</Link>
              </MenuItem>
            );
          })}
        </BigMenu>
        <SmallMenu>
          <img src={menuIcon} alt="placeholder for menu" />
        </SmallMenu>
      </HeaderFlex>
    </HeaderContainer>
  );
}
