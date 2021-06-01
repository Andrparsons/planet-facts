import React from "react";
import Layout from "../components/layout";

export default function PlanetTemplate({ pageContext: { planet } }) {
  return (
    <Layout>
      <p>Page for {planet.name}</p>
    </Layout>
  );
}
