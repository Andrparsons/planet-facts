import * as React from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby-link";
import Loader from "../components/loader";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Layout.ImageContainer>
        <Loader />
      </Layout.ImageContainer>
      {navigate("/Mercury")}
    </Layout>
  );
};

export default IndexPage;
