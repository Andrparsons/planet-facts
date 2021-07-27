import * as React from "react";
import { useEffect } from "react";
import Layout from "../components/layout";
import { navigate } from "gatsby-link";
import Loader from "../components/loader";

// markup
const IndexPage = () => {
  useEffect(() => {
    navigate("/Mercury");
  }, []);

  return (
    <Layout>
      <Layout.ImageContainer>
        <Loader />
      </Layout.ImageContainer>
    </Layout>
  );
};

export default IndexPage;
