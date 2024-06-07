import React from "react";
import { BsFacebook, BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid main-cont  p-3 footer">
          <div className="container m-2">
            <div className="row">
              <div className="col-3 d-block">
                <h6>
                  <b className="diff-blue">Menu</b>
                </h6>
                <p>
                  <small className="noto">Coins</small>
                </p>
                <p>
                  <small className="noto">Portfolio</small>
                </p>
                <p>
                  <small className="noto">Overview</small>
                </p>
                <p>
                  <small className="noto">Trending</small>
                </p>
                <p>
                  <small className="noto">Vote</small>
                </p>
                <p>
                  <small className="noto">Exchanges</small>
                </p>
                <p>
                  <small className="noto">Widgets</small>
                </p>
                <p>
                  <small className="noto">Compare</small>
                </p>
                <p>
                  <small className="noto">Api</small>
                </p>
                <p>
                  <small className="noto">Chat</small>
                </p>
              </div>
              <div className="col-3">
                <h6>
                  <b className="diff-blue">Live Coin Watch</b>
                </h6>
                <p>
                  <small className="noto">Mobile Apps</small>
                </p>
                <p>
                  <small className="noto">Conversion Tool</small>
                </p>
                <p>
                  <small className="noto">All Coins</small>
                </p>
                <p>
                  <small className="noto">Request a Coin</small>
                </p>
                <p>
                  <small className="noto">Request an Exchange</small>
                </p>
                <p>
                  <small className="noto">Report a Bug</small>
                </p>
                <p>
                  <small className="noto">Advertise</small>
                </p>
                <p>
                  <small className="noto">About and FAQ</small>
                </p>
                <p>
                  <small className="noto">Press Kit</small>
                </p>
                <p>
                  <small className="noto">Contact Us</small>
                </p>
              </div>
              <div className="col-3">
                <h6>
                  <b className="diff-blue">About Us</b>
                </h6>

                <h5>
                  <b className="brand">LIVE IN STOCK</b>
                </h5>
                <p className="noto">
                  <small>
                    Get comprehensive cryptocurrency market insights, including
                    real-time coin prices, interactive charts, and market
                    capitalization data, covering 35,702 coins across 845
                    exchanges.
                  </small>
                </p>
                <BsFacebook
                  className="m-1"
                  color="rgb(200, 200, 200)"
                  size={30}
                />
                <BsDiscord
                  className="m-2"
                  color="rgb(200, 200, 200)"
                  size={30}
                />
                <FaTwitter
                  className="m-2"
                  color="rgb(200, 200, 200)"
                  size={30}
                />
                <BsTelegram
                  className="m-2"
                  color="rgb(200, 200, 200)"
                  size={30}
                />
              </div>
              <div className="col-3">
                <h6>
                  <b className="diff-blue">Mobile Apps</b>
                </h6>
                <div className="container p-2">
                  <div className="row d-block">
                    <div className="col mb-2 mt-2">
                      <img
                        src="./images/app-store.png"
                        className="w-100"
                        alt="MAINPIC"
                      />
                    </div>
                    <div className="col mb-0 mt-2">
                      <img
                        src="./images/google-play.png"
                        className="w-100"
                        alt="MAINPIC"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid body-blue pt-4 pb-4">
          <h6 className="text-white text-center">
            © 2024 Live Coin Watch LLC. All Rights Reserved. Terms of Service
            Privacy Policy
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
