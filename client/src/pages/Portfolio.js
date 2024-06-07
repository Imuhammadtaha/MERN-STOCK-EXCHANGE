import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import { IoMdFlash } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      {auth?.user ? (
        <>
          <div className="container-fluid p-5">
            <div className="container">
              <div className="port-cont" style={{ overflow: "hidden" }}>
                <div className="row d-flex">
                  <div className="col-md-11">
                    <h3 className="ms-3 mt-3 mb-3 rale">
                      <IoMdFlash color="white" />
                      {auth?.user?.name}
                    </h3>
                  </div>
                  <div className="col-md-1">
                    <h3 className="ms-3 mt-3 mb-3 rale">
                      <Link to={"/add-coin"}>
                        <FaCirclePlus color="white" />
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="row p-5">
                  <div
                    className="col-md-12"
                    style={{
                      backgroundColor: "rgb(1, 16, 34)",
                    }}
                  >
                    <h5 className="rale text-center mt-3">Coin Portfolio</h5>
                    {auth.user.coins && auth.user.coins.length > 0 ? (
                      auth.user.coins.map((coin) => (
                        <div className="row p-5" key={coin._id}>
                          <div
                            className="col-md-12 d-flex"
                            style={{
                              backgroundColor: "rgb(1, 16, 34)",
                            }}
                          >
                            <div className="col-md-3">
                              <h5 className="rale me-5">
                                Coin Name <br />
                                <h5 className="text-success">
                                  {coin.coinName}
                                </h5>
                              </h5>
                            </div>

                            <div className="col-md-3">
                              <h5 className="rale ms-1 me-5">
                                Coin Price <br />
                                <h5
                                  className={
                                    coin.coinPrice > 4
                                      ? "text-success"
                                      : "text-danger"
                                  }
                                >
                                  ${coin.coinPrice.toFixed(2)}
                                </h5>
                              </h5>
                            </div>

                            <div className="col-md-3">
                              <h5 className="rale me-5">
                                Coin Cap <br />
                                <h5 className="text-success">
                                  ${coin.coinCap.toFixed(2)}
                                </h5>
                              </h5>
                            </div>
                            <div className="col-md-3">
                              <h5 className="rale ms-1">
                                Coin Rank <br />
                                <h5
                                  className={
                                    coin.coinRank < 50
                                      ? "text-success"
                                      : "text-danger"
                                  }
                                >
                                  {coin.coinRank}
                                </h5>
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h5 className="rale text-center">
                        No coins available in your portfolio.
                      </h5>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="container-fluid"
            style={{
              height: "60vh",
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="container"
              style={{
                height: "50vh",
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="row">
                <h2 className="text-center rale">
                  Create Your First Portfolio
                </h2>
                <Link to={"/login"}>
                  {" "}
                  <h4
                    className="text-center rale"
                    style={{
                      color: "rgb(0, 181, 151)",
                    }}
                  >
                    Register Now or Login
                    <FaArrowRightLong
                      size={30}
                      color="rgb(0, 181, 151)"
                      className="ms-1"
                    />
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Portfolio;
