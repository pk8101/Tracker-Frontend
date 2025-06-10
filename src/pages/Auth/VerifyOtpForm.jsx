import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import Input from "../../components/Inputs/Input";
import { UserContext } from "../../context/UserContext";

const VerifyOtpForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const location = useLocation();
  const email = location.state?.email;
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.VERIFY_OTP, {
        email,
        otp,
      });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user); //If you use context
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <Input
        value={otp}
        onChange={({ target }) => setOtp(target.value)}
        label="Enter OTP"
        placeholder="6-digit code"
        type="text"
      />
      {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
      <button type="submit" className="btn-primary">
        Verify OTP
      </button>
    </form>
  );
};

export default VerifyOtpForm;
