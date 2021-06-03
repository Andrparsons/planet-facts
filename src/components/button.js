import React from "react";
import styled from "styled-components";

const PlanetButton = styled.button`
  display: flex;
  cursor: pointer;
  color: var(--white);
  border: ${(props) =>
    props.active ? "1px solid transparent" : "1px solid #ffffff33"};
  background-color: ${(props) =>
    props.active ? `var(--${props.colour.toLowerCase()})` : "transparent"};

  &:hover {
    background: #d8d8d833;
    border: 1px solid transparent;
  }
`;
const LabelNum = styled.h3`
  margin-left: 2.33em;
`;
const Label = styled.h3`
  text-transform: uppercase;
  margin-left: 2.33em;
`;

export default function Button({
  labelNum,
  label,
  onClick,
  colour,
  ...restProps
}) {
  return (
    <PlanetButton onClick={onClick} colour={colour} {...restProps}>
      <LabelNum>{labelNum}</LabelNum>
      <Label>{label}</Label>
    </PlanetButton>
  );
}
