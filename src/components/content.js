import React from "react";
import styled from "styled-components";
import iconSource from "../assets/icon-source.svg";

const PlanetContent = styled.div``;

const Title = styled.h1``;

const Text = styled.p``;

const SourceText = styled.p``;

const SourceLink = styled.a``;

export default function Content({ title, content, link }) {
  return (
    <PlanetContent>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <SourceText>
        Source:
        <SourceLink href={link}>
          Wikipedia <img src={iconSource} alt="" />
        </SourceLink>
      </SourceText>
    </PlanetContent>
  );
}
