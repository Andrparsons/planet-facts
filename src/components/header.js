import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PlanetData from "../data/data.json";
import menuIcon from "../assets/icon-hamburger.svg";
import iconChevron from "../assets/icon-chevron.svg";

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ffffff33;
  position: relative;
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1368px;
  margin: 0 1.5rem;

  @media (min-width: 700px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  @media (min-width: 1416px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 1rem 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -1.05px;

  @media (min-width: 700px) {
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

  @media (min-width: 700px) {
    display: flex;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

const SmallMenu = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  border: none;
  background: transparent;
  opacity: ${({ open }) => (open ? "0.25" : "1")};
`;

const MenuItem = styled.li`
  list-style-type: none;
  font-size: 0.9375rem;
  border-bottom: 1px solid #ffffff1a;
  padding: 1.25rem 0;

  &:last-of-type {
    border-bottom: none;
  }

  a {
    display: flex;
    justify-content: space-between;
    color: var(--white);
    font-family: "Spartan", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.67;
  }

  @media (min-width: 700px) {
    font-size: 0.6875rem;
    margin-right: 3em;
    border-bottom: none;
    padding: 0;

    &:last-of-type {
      margin-right: 0;
    }

    a {
      line-height: 2.27;
      letter-spacing: 1px;
      opacity: 0.75;
      cursor: pointer;
      border-top: 4px solid transparent;

      &:hover {
        opacity: 1;
        border-top: 4px solid
          ${(props) => `var(--${props.colour.toLowerCase()})`};
      }
    }
  }

  @media (min-width: 1000px) {
    a {
      padding: 1.875rem 0;
    }
  }
`;

const PlanetIcon = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-color: ${(props) => `var(--${props.colour.toLowerCase()})`};
  border-radius: 50%;
  margin-right: 1.5rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

const ChevronContainer = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

const PlanetIconContainer = styled.div`
  display: flex;
`;

const MenuOverlay = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 4.3125rem;
  left: 0;
  background-color: var(--midnight);
  padding: 1.5rem 1.5rem 0 1.5rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;

function MenuList() {
  return (
    <>
      {PlanetData.map((planet) => {
        return (
          <MenuItem key={planet.name} colour={planet.name}>
            <Link to={`/${planet.name}/`}>
              <PlanetIconContainer>
                <PlanetIcon colour={planet.name} />
                {planet.name}
              </PlanetIconContainer>
              <ChevronContainer>
                <img src={iconChevron} alt="" />
              </ChevronContainer>
            </Link>
          </MenuItem>
        );
      })}
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  });

  return (
    <HeaderContainer>
      <HeaderFlex>
        <Title>the planets</Title>
        <BigMenu>
          <MenuList />
        </BigMenu>
        <SmallMenu>
          <MenuBtn open={open} onClick={() => setOpen(!open)}>
            <img src={menuIcon} alt="placeholder for menu" />
          </MenuBtn>
          <MenuOverlay open={open}>
            <MenuList />
          </MenuOverlay>
        </SmallMenu>
      </HeaderFlex>
    </HeaderContainer>
  );
}
