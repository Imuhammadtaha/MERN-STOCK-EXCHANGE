import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
const AddCoin = () => {
  const [coinName, setcoinName] = useState("");
  const [coinPrice, setcoinPrice] = useState("");
  const [coinCap, setcoinCap] = useState("");
  const [coinRank, setcoinRank] = useState("");
  const [auth] = useAuth();
  const token = auth?.token;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("coinName", coinName);
      formData.append("coinPrice", coinPrice);
      formData.append("coinCap", coinCap);
      formData.append("coinRank", coinRank);

      const res = await axios.post(
        `http://localhost:8080/api/v1/auth/buy-coin`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/portfolio");
        }, 3000);
      } else {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid ps-5 pe-5 pt-0">
        <div className="container p-5">
          <form className="ps-5 pe-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Coin Name
              </label>
              <input
                type="text"
                value={coinName}
                onChange={(e) => setcoinName(e.target.value)}
                placeholder="Enter Coin Name"
                className="form-control cs-form text-white"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Coin's Price
              </label>
              <input
                type="number"
                value={coinPrice}
                onChange={(e) => setcoinPrice(e.target.value)}
                placeholder="0.00$"
                className="form-control cs-form text-white "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Market Cap
              </label>
              <input
                type="number"
                value={coinCap}
                onChange={(e) => setcoinCap(e.target.value)}
                placeholder="Enter market cap "
                className="form-control cs-form text-white"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Coin Rank
              </label>
              <input
                type="number"
                value={coinRank}
                onChange={(e) => setcoinRank(e.target.value)}
                placeholder="Enter Coin Rank"
                className="form-control cs-form text-white"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button className="reg">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddCoin;
