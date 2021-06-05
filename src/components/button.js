import React from "react";
import styled from "styled-components";

const PlanetButton = styled.button`
  display: flex;
  cursor: pointer;
  color: var(--white);
  border: none;
  background: transparent;
  transition: all 180ms ease-in-out;
  justify-content: center;
  border-bottom: ${(props) =>
    props.active
      ? `4px solid var(--${props.colour.toLowerCase()})`
      : " 4px solid transparent"};

  &:hover {
    @media (min-width: 600px) {
      background: #d8d8d833;
      border: 1px solid transparent;
    }
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
    flex-grow: 0;
    border: ${(props) =>
      props.active ? "1px solid transparent" : "1px solid #ffffff33"};
    background-color: ${(props) =>
      props.active ? `var(--${props.colour.toLowerCase()})` : "transparent"};
  }
`;

const LabelNum = styled.h3`
  display: none;
  margin-left: 2.33em;

  @media (min-width: 600px) {
    display: block;
  }
`;

const Label = styled.h3`
  text-transform: uppercase;
  margin-left: 2.33em;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

const LabelSmall = styled(Label)`
  display: block;
  margin: 1.25rem 0 1rem 0;
  font-size: 0.5625rem;
  letter-spacing: 1.93px;
  opacity: ${(props) => (props.active ? "1" : "0.5")};

  @media (min-width: 600px) {
    display: none;
  }
`;

export default function Button({
  labelNum,
  label,
  labelsmall,
  onClick,
  colour,
  ...restProps
}) {
  return (
    <PlanetButton onClick={onClick} colour={colour} {...restProps}>
      <LabelNum>{labelNum}</LabelNum>
      <Label>{label}</Label>
      <LabelSmall {...restProps}>{labelsmall}</LabelSmall>
    </PlanetButton>
  );
}
