import React, { useState } from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import Card from "../components/card";

export default function PlanetTemplate({ pageContext: { planet } }) {
  const imagePath = `.${planet.images.planet}`;
  const [page, setPage] = useState("overview");

  return (
    <Layout>
      <img src={imagePath} alt={`Stylized ${planet.name}`} />
      <h1>{planet.name}</h1>
      <p>{planet.overview.content}</p>
      <p>{page}</p>
      <Layout.ButtonGroup>
        <Button
          labelNum="01"
          label="overview"
          onClick={() => setPage("overview")}
          colour={planet.name}
          active={page === "overview" ? true : false}
        />
        <Button
          labelNum="02"
          label="internal structure"
          onClick={() => setPage("internal")}
          colour={planet.name}
          active={page === "internal" ? true : false}
        />
        <Button
          labelNum="03"
          label="surface geology"
          onClick={() => setPage("geology")}
          colour={planet.name}
          active={page === "geology" ? true : false}
        />
      </Layout.ButtonGroup>
      <Layout.CardGroup>
        <Card label={"rotation time"} data={planet.rotation} />
        <Card label={"revolution time"} data={planet.revolution} />
        <Card label={"radius"} data={planet.radius} />
        <Card label={"average temp."} data={planet.temperature} />
      </Layout.CardGroup>
    </Layout>
  );
}
