import React from "react";
import Layout from "../components/Layout/Layout";
import GlobalChart from "../components/Layout/GlobalChart";
import LiquidityChart from "../components/Layout/LiquidityChart";
const Overview = () => {
  return (
    <Layout>
      <div className="container-fluid mt-4 ms-0 me-0 p-0">
        <h3
          className="text-center josef p-0 m-0 body-blue diff-blue"
          style={{}}
        >
          Crypto Market Overview
        </h3>
        <div
          className="container-fluid p-0 mb-0  graph"
          style={{ overflow: "hidden" }}
        >
          <div className="graphe" style={{ height: "100vh", width: "100vw" }}>
            <LiquidityChart />
            <GlobalChart />
          </div>
          <div
            className="graphe"
            style={{ height: "100vh", width: "100vw" }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
