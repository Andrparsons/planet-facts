import React from "react";
import styled from "styled-components";
import iconSource from "../assets/icon-source.svg";

const PlanetContent = styled.div`
  text-align: center;
  margin: 0 1.5rem;

  @media (min-width: 600px) {
    text-align: left;
    margin-left: 2.5rem;
    margin-right: 0;
    max-width: 340px;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Text = styled.p`
  margin-bottom: 2rem;
`;

const SourceText = styled.p`
  font-size: 0.75rem;
  opacity: 0.5;
  margin: 0;
`;

const SourceLink = styled.a`
  font-weight: 700;
  color: var(--white);
  margin: 0 0.35em;
`;

const SourceContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 625px) {
    justify-content: left;
  }
`;

export default function Content({ title, content, link }) {
  return (
    <PlanetContent>
      <Title>{title}</Title>
      <Text>{content}</Text>

      <SourceContent>
        <SourceText>
          Source :<SourceLink href={link}>Wikipedia</SourceLink>
        </SourceText>
        <img src={iconSource} alt="" />
      </SourceContent>
    </PlanetContent>
  );
}
