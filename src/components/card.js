import React from "react";
import styled from "styled-components";

const PlanetCard = styled.div`
  border: 1px solid #ffffff33;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.8rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 625px) {
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 164px;
    padding: 1rem;
    margin-bottom: 0;
  }
`;

const Label = styled.h4`
  opacity: 0.5;
`;

const Data = styled.h2``;

export default function Card({ label, data }) {
  return (
    <PlanetCard>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </PlanetCard>
  );
}
