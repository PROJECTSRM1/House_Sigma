import React, { useState } from "react";
import "./Login.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!isOpen) return null;  // Hide modal when closed

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

        {/* Mobile */}
        {activeTab === "mobile" && (
          <div className="input-row">
            <select className="country-code">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>

            <input type="text" placeholder="Phone number" />
          </div>
        )}

        {/* Password */}
        <div className="input-group password-group">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
          />
          <span
            className="toggle-password"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="login-btn">Log in</button>
        <p className="forgot-text">Forgot Password?</p>

        <div className="divider"><span>or</span></div>

        {/* Google login */}
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
