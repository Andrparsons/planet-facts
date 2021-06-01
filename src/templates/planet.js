import React from "react";
import Layout from "../components/layout";

export default function PlanetTemplate({ pageContext: { planet } }) {
  return (
    <section>
      <p>Page for {planet.name}</p>
    </section>
  );
}
