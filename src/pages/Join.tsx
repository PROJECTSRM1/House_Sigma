import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Join.css";

import { useNavigate } from "react-router-dom"; 
import googleLogo from "@/assets/google.png";
import { useAuth } from "@/context/AuthContext";
const API_BASE = "http://127.0.0.1:8000";

const countryList = [
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
];

const Join: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [verificationCode, setVerificationCode] = useState("");

  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  const validateStep1 = () => {
    if (!fullName.trim()) {
      setError("Full Name is required.");
      return false;
    }

    if (activeTab === "email") {
      if (!email.trim()) {
        setError("Please enter your email.");
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    if (activeTab === "mobile") {
      if (!phoneNumber.trim()) {
        setError("Please enter your Mobile number.");
        return false;
      }
      if (phoneNumber.length < 6) {
        setError("Enter a valid Mobile number.");
        return false;
      }
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  const sendOtp = async () => {
    try {
      setLoadingNext(true);

      const response = await fetch(`${API_BASE}/api/auth/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("OTP sent:", data);
        setStep(2);
      } else {
        setError(data.detail || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      setError("Server error while sending OTP.");
    } finally {
      setLoadingNext(false);
    }
  };

  const verifyOtp = async () => {
    if (!verificationCode.trim()) {
      setError("Enter the OTP sent to your email.");
      return;
    }

    try {
      setLoadingVerify(true);

      const response = await fetch(`${API_BASE}/api/auth/sign/otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Invalid OTP");
        return;
      }

      // ---------------------------------------
      // FIXED: Your backend does NOT return user or token.
      // So we must login user after successful OTP.
      // ---------------------------------------

      const loginRes = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email: email,
          password: password,
        }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        setError(loginData.detail || "Login failed after verification");
        return;
      }

      // Save token & user
      localStorage.setItem("token", loginData.access_token);
      localStorage.setItem("user", JSON.stringify(loginData.user));

      setUser(loginData.user);
      window.dispatchEvent(new Event("auth-changed"));

      alert("Account created & logged in!");

      navigate("/");
      window.location.reload();

    } catch (error) {
      console.error(error);
      setError("Server error verifying OTP.");
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="join-container">
        <h2 className="join-title">Create Account</h2>

        <div className="step-indicator">
          <div className={step >= 1 ? "circle active" : "circle"}>1</div>
          <div className="line"></div>
          <div className={step >= 2 ? "circle active" : "circle"}>2</div>
          <div className="line"></div>
          <div className={step >= 3 ? "circle active" : "circle"}>3</div>
        </div>

        {/* ==================== STEP 1 ==================== */}
        {step === 1 && (
          <div className="step-box">
            <div className="tabs">
              <button
                className={activeTab === "email" ? "tab active" : "tab"}
                onClick={() => {
                  setActiveTab("email");
                  setError("");
                }}
              >
                Email
              </button>

              <button
                className={activeTab === "mobile" ? "tab active" : "tab"}
                onClick={() => {
                  setActiveTab("mobile");
                  setError("");
                }}
              >
                Mobile Number
              </button>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              className="join-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {activeTab === "email" && (
              <input
                type="email"
                placeholder="Enter your email"
                className="join-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {activeTab === "mobile" && (
              <div className="mobile-outer-box">
                <div
                  className="country-box"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedCountry.code}
                  <span className="arrow">▼</span>
                </div>

                {showDropdown && (
                  <div className="country-dropdown-list">
                    {countryList.map((c) => (
                      <div
                        key={c.name}
                        className="country-item"
                        onClick={() => {
                          setSelectedCountry(c);
                          setShowDropdown(false);
                        }}
                      >
                        {c.name}
                      </div>
                    ))}
                  </div>
                )}

                <input
                  type="text"
                  className="phone-input-join"
                  placeholder="Mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}

            <input
              type="password"
              placeholder="Enter password"
              className="join-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="next-btn"
              onClick={() => validateStep1() && sendOtp()}
              disabled={loadingNext}
            >
              {loadingNext ? "Loading..." : "Next"}
            </button>
          </div>
        )}

        {/* ==================== STEP 2 ==================== */}
        {step === 2 && (
          <div className="step-box">

            <div className="scroll-card">
              <center><h3>HouseSigma Terms of Use</h3></center>
              <p>
                By using this website, you are agreeing to comply and be bound by the following terms...
              </p>
            </div>

            <div className="scroll-card">
              <center><h3>Canadian Real Estate Association Terms of Use</h3></center>
              <p>
                You are agreeing to comply and be bound by the following terms...
              </p>
            </div>

            <div className="step2-actions">
              <button className="reject-btn" onClick={() => setStep(1)}>
                Reject
              </button>

              <button className="agree-btn" onClick={() => setStep(3)}>
                Agree
              </button>
            </div>
          </div>
        )}

        {/* ==================== STEP 3 (OTP) ==================== */}
        {step === 3 && (
          <div className="step-box-small">
            <p className="verification-text">
              Enter the verification code sent to:
              <br />
              <span className="verification-email">{email}</span>
            </p>

            <input
              type="text"
              placeholder="Verification Code"
              className="join-input"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="next-btn"
              onClick={verifyOtp}
              disabled={loadingVerify}
            >
              {loadingVerify ? "Loading..." : "Confirm"}
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Join;
