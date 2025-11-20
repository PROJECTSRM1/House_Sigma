import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import googleLogo from "@/assets/google.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;   
}

const countryList = [
  { name: "China", code: "+86" },
  { name: "Hongkong", code: "+852" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
];

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onForgotPassword }) => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]); // default India

  if (!isOpen) return null;

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2 className="login-title">Log in</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "email" ? "tab active" : "tab"}
            onClick={() => setActiveTab("email")}
          >
            Email
          </button>

          <button
            className={activeTab === "mobile" ? "tab active" : "tab"}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile Phone
          </button>
        </div>

        {/* Email Input */}
        {activeTab === "email" && (
          <div className="input-group">
            <input type="email" placeholder="Enter email" />
          </div>
        )}

        {/* Mobile Input */}
        {activeTab === "mobile" && (
          <div className="combined-mobile-box">
            {/* Country Dropdown */}
            <div
              className="country-box"
              onClick={() => setShowCountryList(!showCountryList)}
            >
              {selectedCountry.code}
              <span className="arrow">▲</span>
            </div>

            {showCountryList && (
              <div className="country-dropdown">
                {countryList.map((c) => (
                  <div
                    key={c.name}
                    className="country-item"
                    onClick={() => {
                      setSelectedCountry(c);
                      setShowCountryList(false);
                    }}
                  >
                    {c.name}
                  </div>
                ))}
              </div>
            )}

            <input className="phone-input" type="text" placeholder="Phone number" />
          </div>
        )}

        {/* Password Input */}
        <div className="password-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
          />
          <span
            className="eye-btn"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Login Button */}
        <button className="login-btn">Log in</button>

        
        <p
          className="forgot-text"
          onClick={onForgotPassword}           
          style={{ cursor: "pointer" }}
        >
          Forgot Password?
        </p>

        <div className="divider"></div>

        {/* Google Login */}
        <button className="google-btn">
          <img src={googleLogo} alt="google" className="google-icon" />
          Sign in with Google
        </button>

        <p className="signup-text">
          New user? <NavLink to="/join">Sign-up here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
