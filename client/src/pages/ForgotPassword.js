import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("answer", answer);
      formData.append("newPassword", newPassword);

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        formData
      );
      if (res?.data?.success) {
        toast.success("Password reset successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <Layout>
      <div className="container-fluid ps-5 pe-5 pt-0">
        <div className="container p-5">
          <form className="ps-5 pe-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mail@example.com"
                className="form-control cs-form text-white"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="answer" className="form-label">
                Secret Answer
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                className="form-control cs-form text-white"
                id="answer"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="form-control cs-form text-white"
                id="password"
                required
              />
            </div>
            <button type="submit" className="reg me-2">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
