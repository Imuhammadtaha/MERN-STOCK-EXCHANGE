import React from "react";
import Layout from "../components/Layout/Layout";
import TrendingData from "../components/Layout/TrendingData";

const Trending = () => {
  return (
    <Layout>
      <div className="container-fluid mt-5">
        <div className="container ps-5 pe-5 pb-5 d-flex">
          <TrendingData />
        </div>
      </div>
    </Layout>
  );
};

export default Trending;
