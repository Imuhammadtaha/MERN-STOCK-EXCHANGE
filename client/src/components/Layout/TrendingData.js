import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingData = () => {
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

  const getTrData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending/"
      );

      if (res.data && res.data.coins) {
        setCoins(res?.data?.coins);
        console.log(res?.data?.coins);
      }
    } catch (error) {
      console.error("Error fetching data from CoinGecko API:", error);
    }
  };
  useEffect(() => {
    getTrData();
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
              MCR
            </th>
            <th style={styles.th} className="mulish">
              Market
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
                  src={coin.item.large}
                  alt={coin.name}
                  width="40"
                  height="40"
                  className="m-1"
                />
                {coin.item.name.toString().slice(0, 5)}
              </td>
              <td style={styles.td}>
                ${coin.item.data.price.toString().slice(0, 5)}...
              </td>
              <td style={styles.td} className="mulish">
                {coin.item.data.market_cap}
              </td>
              <td style={styles.td} className="mulish">
                {coin.item.data.total_volume}
              </td>
              <td style={styles.td} className="mulish">
                {coin.item.data.price_change_percentage_24h.usd}%
              </td>
              <td style={styles.td} className="text-danger mulish">
                ${coin.item.price_btc.toString().slice(0, 5)}{" "}
              </td>
              <td style={styles.td} className="mulish">
                #{coin.item.market_cap_rank}
              </td>
              <td style={styles.td} className="text-success mulish">
                {coin.item.data.market_cap}
              </td>
              <td style={styles.td} className="mulish">
                {new Date().toLocaleString().slice(0, 9)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TrendingData;
