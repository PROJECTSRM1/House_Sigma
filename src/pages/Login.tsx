import React, { useState } from "react";
import "./Login.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countryList = [
  { name: "China", code: "+86" },
  { name: "Hongkong", code: "+852" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" }
];

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Dropdown
  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]); // India

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

        {/* Email */}
        {activeTab === "email" && (
          <div className="input-group">
            <input type="email" placeholder="Enter email" />
          </div>
        )}

        {/* Mobile Input (HouseSigma Style) */}
        {activeTab === "mobile" && (
          <div className="combined-mobile-box">

            {/* Left Country dropdown button */}
            <div
              className="country-box"
              onClick={() => setShowCountryList(!showCountryList)}
            >
              {selectedCountry.code}
              <span className="arrow">▲</span>
            </div>

            {/* Dropdown list */}
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

            {/* Phone input */}
            <input
              className="phone-input"
              type="text"
              placeholder="Phone number"
            />
          </div>
        )}

        {/* Password */}
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

        {/* Login button */}
        <button className="login-btn">Log in</button>

        <p className="forgot-text">Forgot Password?</p>

        <div className="divider"></div>

        {/* Google Button */}
        <button className="google-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google"
          />
          Sign in with Google
        </button>

        <p className="signup-text">
          New user? <a href="#">Sign-up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
