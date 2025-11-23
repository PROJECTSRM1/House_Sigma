import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onForgotPassword 
}) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]); 

  if (!isOpen) return null;

  const handleLogin = async () => {
    const username = activeTab === "email" ? email : phone;

    if (!username || !password) {
      alert("Enter both username and password");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || "Login failed");
        return;
      }

      alert("Login successful!");
      onClose();
      navigate("/");

    } catch (error) {
      alert("Server error while logging in.");
    }
  };

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
            Mobile Number
          </button>
        </div>

        {/* Email Input */}
        {activeTab === "email" && (
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* Mobile Input */}
        {activeTab === "mobile" && (
          <div className="combined-mobile-box">
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

            <input
              className="phone-input"
              type="text"
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        )}

        {/* Password Input */}
        <div className="password-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-btn"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Login */}
        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>

        {/* Forgot Password */}
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
