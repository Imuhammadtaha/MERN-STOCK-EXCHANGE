import React from "react";
import Layout from "../components/Layout/Layout.js";
import TradingViewWidget from "../components/Layout/TradingViewWidget.js";
import { FaArrowRightLong } from "react-icons/fa6";
import CryptoData from "../components/Layout/CryptoData.js";
const HomePage = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <div className="graph">
          <TradingViewWidget />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container p-5 d-flex">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <div className="cad">
                <div className="cd-top">
                  <small className="ps-1 mulish">
                    <b>
                      Overview <FaArrowRightLong color="aquamarine" />
                    </b>
                  </small>
                </div>
                <div className="cd-body d-block p-1">
                  <div className="row">
                    <div className="col-12">
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">Market Cap</small>
                        </a>
                        <span>
                          <small className="green mulish">
                            $2,559,870,957,257
                          </small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">24h Volume</small>
                        </a>
                        <span>
                          <small className="green mulish">
                            $132,275,692,808
                          </small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">Market Cap</small>
                        </a>
                        <span>
                          <small className="text-danger mulish">
                            $6,208,432,316
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-3 col-sm-3">
              <div className="cad">
                <div className="cd-top">
                  <small className="ps-1 mulish">
                    <b>
                      Trending <FaArrowRightLong color="aquamarine" />{" "}
                    </b>
                  </small>
                </div>
                <div className="cd-body d-block p-1">
                  <div className="row">
                    <div className="col-12">
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">XDC Network</small>
                        </a>
                        <span>
                          <small className="green mulish">$0.035095</small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">LCX</small>
                        </a>
                        <span>
                          <small className="green mulish">$0.278197</small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">AI Power Grid</small>
                        </a>
                        <span>
                          <small className="text-danger mulish">
                            $0.051792
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-3 col-sm-3">
              <div className="cad">
                <div className="cd-top">
                  <small className="ps-1 mulish">
                    <b>
                      Recently Added <FaArrowRightLong color="aquamarine" />
                    </b>
                  </small>
                </div>
                <div className="cd-body d-block p-1">
                  <div className="row">
                    <div className="col-12">
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">Coin Gab…Token v2</small>
                        </a>
                        <span>
                          <small className="mulish">
                            <b>Today</b>
                          </small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">RealToke…vernance</small>
                        </a>
                        <span>
                          <small className="mulish">
                            <b>Today</b>
                          </small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">IVEX Financial</small>
                        </a>
                        <span>
                          <small className="mulish">
                            <b>Today</b>
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-3 col-sm-3">
              <div className="cad">
                <div className="cd-top">
                  <small className="ps-1 mulish">
                    <b>
                      Most Upvoted <FaArrowRightLong color="aquamarine" />
                    </b>
                  </small>
                </div>
                <div className="cd-body d-block p-1">
                  <div className="row">
                    <div className="col-12">
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">XRP</small>
                        </a>
                        <span className="me-4">
                          <small className="green mulish">12 &uarr;</small>
                        </span>
                        <span>
                          <small className="text-danger mulish">3 &darr;</small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">Bitcoin Candy</small>
                        </a>
                        <span className="me-4">
                          <small className="green mulish">11 &uarr;</small>
                        </span>
                        <span>
                          <small className="text-danger mulish">7 &darr;</small>
                        </span>
                      </div>
                      <div className="cd-text d-flex">
                        <a href="/" className="me-auto a">
                          <small className="mulish">Satoxcoin</small>
                        </a>
                        <span className="me-4">
                          <small className="green mulish">9 &uarr;</small>
                        </span>
                        <span>
                          <small className="text-danger mulish">7 &darr;</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data */}
      <div className="container-fluid">
        <div className="container ps-5 pe-5 pb-5 d-flex">
          <CryptoData />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
