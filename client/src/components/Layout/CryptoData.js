import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoData = () => {
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

  const getCrData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      if (res.data) {
        setCoins(res.data);
      }
    } catch (error) {
      console.error("Error fetching data from CoinGecko API:", error);
    }
  };

  useEffect(() => {
    getCrData();
  }, []);

  return (
    <>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={styles.th} className="mulish">
              Coin
            </th>
            <th style={styles.th} className="mulish">
              Price
            </th>
            <th style={styles.th} className="mulish">
              Market Cap
            </th>
            <th style={styles.th} className="mulish">
              Volume 24h
            </th>
            <th style={styles.th} className="mulish">
              Liquidity
            </th>
            <th style={styles.th} className="mulish">
              ATH
            </th>
            <th style={styles.th} className="mulish">
              Low 24h
            </th>
            <th style={styles.th} className="mulish">
              High 24h
            </th>
            <th style={styles.th} className="mulish">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "rgb(34, 48, 67)" }}>
          {coins.map((coin, index) => (
            <tr key={coin.id} style={styles.tr}>
              <td style={styles.td} className="mulish">
                <img
                  src={coin.image}
                  alt={coin.name}
                  width="30"
                  height="30"
                  className="m-1"
                />
                {coin.name}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.current_price}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.market_cap}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.total_volume}
              </td>
              <td style={styles.td} className="mulish">
                {coin.price_change_percentage_24h}%
              </td>
              <td style={styles.td} className="mulish">
                ${coin.ath}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.low_24h}
              </td>
              <td style={styles.td} className="mulish">
                ${coin.high_24h}
              </td>
              <td style={styles.td} className="mulish">
                {new Date(coin.last_updated).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoData;
