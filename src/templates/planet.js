import React from "react";
import Layout from "../components/layout";

export default function PlanetTemplate({ pageContext: { planet } }) {
  const imagePath = `.${planet.images.planet}`;

  return (
    <Layout>
      <img src={imagePath} alt={`Stylized image of ${planet.name}`} />
      <h1>{planet.name}</h1>
      <p>{planet.overview.content}</p>
    </Layout>
  );
}
