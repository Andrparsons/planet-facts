import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PlanetData from "../data/data.json";

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ffffff33;
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1368px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 1.375rem 0;
  font-weight: 400;
`;

const BigMenu = styled.ul`
  display: flex;
  margin: 0;
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
        <Title>THE PLANETS</Title>
        <BigMenu>
          {PlanetData.map((planet) => {
            return (
              <MenuItem key={planet.name} colour={planet.name}>
                <Link to={`/${planet.name}/`}>{planet.name}</Link>
              </MenuItem>
            );
          })}
        </BigMenu>
      </HeaderFlex>
    </HeaderContainer>
  );
}
