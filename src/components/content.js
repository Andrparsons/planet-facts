import React from "react";
import styled from "styled-components";
import iconSource from "../assets/icon-source.svg";

const PlanetContent = styled.div`
  text-align: center;
  margin: 0 1.5rem;
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
