import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

const Recommended = () => {
  const [auth] = useAuth();
  const [budget, setBudget] = useState("");
  const [preferredLiquidity, setPreferredLiquidity] = useState("");
  const [coins, setCoins] = useState([]);
  const [requirementsLoaded, setRequirementsLoaded] = useState(false);
  const token = auth?.token;

  const getReqData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/get-user-requirements",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjU5ZTU2ZTIxMmFjMjkwN2NkYTMxYmMiLCJpYXQiOjE3MTczMTU1MzEsImV4cCI6MTcxNzkyMDMzMX0.y5QCR-wD8DqkkmonHeqD-UNRIYQc7TZmEInjLB6dwOM`,
          },
        }
      );
      if (res?.data) {
        setBudget(res?.data?.recommendations?.budget);
        setPreferredLiquidity(res?.data?.recommendations?.prefferedLiquidity);
        setRequirementsLoaded(true); // Set to true once requirements are loaded
      } else {
        console.log("Error in Getting requirements");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const coinRes = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const allCoins = res?.data;
      // Filter coins based on requirements
      const filteredCoins = allCoins.filter((coin) => {
        const coinPriceUsd = coin.current_price; // Price in USD
        const coinLiquidity = coin.total_volume; // Total volume in USD

        return coinPriceUsd <= budget && coinLiquidity >= preferredLiquidity;
      });
      setCoins(filteredCoins);
    } catch (error) {
      console.log(error);
    }
  }, [budget, preferredLiquidity]);

  useEffect(() => {
    const fetchData = async () => {
      await getReqData();
    };

    fetchData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (requirementsLoaded) {
      coinRes();
    }
  }, [requirementsLoaded, budget, preferredLiquidity, coinRes]);

  const styles = {
    th: {
      padding: "8px",
      backgroundColor: "rgb(34, 48, 67)",
      color: "#fff",
    },
    td: {
      padding: "8px",
      color: "white",
    },
    tr: {
      textAlign: "left",
    },
  };

  return (
    <Layout>
      {auth?.user ? (
        <>
          <div className="container-fluid">
            <div className="container m-3">
              <div className="row">
                <div className="col-md-10">
                  <h1 className="text-center rale">Best Coins For You</h1>
                </div>
                <div className="col-md-2 mt-3">
                  <Link
                    className="text-center text-white rale"
                    to={"/edit-choice"}
                  >
                    Edit choice <AiFillEdit />
                  </Link>
                </div>
              </div>
            </div>
            <div className="container p-2">
              {coins.length > 0 ? (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={styles.th} className="rale">
                        Coin
                      </th>
                      <th style={styles.th} className="rale">
                        Image
                      </th>
                      <th style={styles.th} className="rale">
                        Price
                      </th>
                      <th style={styles.th} className="rale">
                        Market Cap
                      </th>
                      <th style={styles.th} className="rale">
                        Total Volume
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "rgb(34, 48, 67)" }}>
                    {coins.map((coin) => (
                      <tr key={coin.id} style={styles.tr}>
                        <td style={styles.td} className="rale">
                          {coin.name}
                        </td>
                        <td style={styles.td} className="rale">
                          <img src={coin.image} alt={coin.name} width="30" />
                        </td>
                        <td style={styles.td} className="rale">
                          ${coin.current_price.toFixed(2)}
                        </td>
                        <td style={styles.td} className="rale">
                          ${coin.market_cap.toLocaleString()}
                        </td>
                        <td style={styles.td} className="rale">
                          ${coin.total_volume.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No coins match your criteria.</p>
              )}
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
                  Invest In Best, Best For You
                </h2>
                <Link to={"/login"}>
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

export default Recommended;
