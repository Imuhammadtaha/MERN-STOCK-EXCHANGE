import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeData = () => {
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

  const [coins, setCoins] = useState([]);
  const [images, setImages] = useState([]);

  const getCrData = async () => {
    try {
      const res = await axios.get("https://api.coingecko.com/api/v3/exchanges");

      if (res.data) {
        setCoins(res.data);
      }
    } catch (error) {
      console.error("Error fetching data from CoinGecko API:", error);
    }
  };

  const getImgonly = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      if (res.data) {
        const imageUrls = res.data.map((coin) => coin.image);
        setImages(imageUrls);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCrData();
    getImgonly();
  }, []);

  // Function to merge coin data with corresponding images
  const mergeData = () => {
    // Assuming that coins and images have the same length
    return coins.map((coin, index) => {
      return { ...coin, image: images[index] };
    });
  };

  return (
    <>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={styles.th} className="mulish">
              Coin Name
            </th>

            <th style={styles.th} className="mulish">
              Since
            </th>
            <th style={styles.th} className="mulish">
              Country
            </th>
            <th style={styles.th} className="mulish">
              URL
            </th>
            <th style={styles.th} className="mulish">
              trust_score_rank
            </th>
            <th style={styles.th} className="mulish">
              TV-Normalized
            </th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "rgb(34, 48, 67)" }}>
          {mergeData().map((coin, index) => (
            <tr key={coin.id} style={styles.tr}>
              <td style={styles.td} className="mulish">
                <img
                  src={coin.image}
                  alt={`Coin ${index}`}
                  width="30"
                  className="me-1"
                />
                {coin.name}
              </td>

              <td style={styles.td} className="mulish">
                ${coin.year_established}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.country}
              </td>
              <td style={styles.td} className="mulish">
                {coin.url}
              </td>
              <td style={styles.td} className="mulish">
                {coin.trust_score_rank}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.trade_volume_24h_btc_normalized}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExchangeData;
