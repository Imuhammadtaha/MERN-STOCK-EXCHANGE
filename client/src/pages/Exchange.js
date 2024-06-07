import React from "react";
import Layout from "../components/Layout/Layout";
import ExchangeData from "../components/Layout/ExchangeData";

const Exchange = () => {
  return (
    <Layout>
      <h3 className="rale text-center mt-5 mb-5">Exchanges Available</h3>
      <div className="container-fluid">
        <div className="container">
          <ExchangeData />
        </div>
      </div>
    </Layout>
  );
};

export default Exchange;
