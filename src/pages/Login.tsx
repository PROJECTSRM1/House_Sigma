declare const google: any;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "/assets/google.png";
import { useAuth } from "@/context/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;
  onLoginSuccess?: (userData: any) => void;
  onSuccess?: () => void;

  redirectTo?: string | null;
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
  onForgotPassword,
  onLoginSuccess,
  onSuccess,

  redirectTo = "/",
}) => {
  const { t } = useTranslation();
  const { setUser } = useAuth();   // ✅ Context

  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]);

  const navigate = useNavigate();

  if (!isOpen) return null;

  // ============================================================
  // GOOGLE LOGIN
  // ============================================================
  const handleGoogleLogin = () => {
  google.accounts.id.initialize({
    client_id:
      "1093509339839-nvrem038vem47v8jjnmpoc25e5koro35.apps.googleusercontent.com",

    callback: async (response: any) => {
      const token = response.credential; // ✅ This is the ID TOKEN (JWT)

      try {
        const res = await fetch("http://127.0.0.1:8000/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert("Google login failed");
          return;
        }

        const userData = {
          id: data.id || Date.now(),
          name: data.name,
          email: data.email,
        };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));

        // 🔔 Notify app of auth change
        window.dispatchEvent(new Event("auth-changed"));

        alert("Google login successful!");

        onLoginSuccess?.(userData);
        onSuccess?.();
        onClose();

        if (redirectTo) {
          navigate(redirectTo);
        }
      } catch (error) {
        console.error("Google login error:", error);
        alert("Google login error");
      }
    },
  });

  google.accounts.id.prompt(); // ✅ Opens Google popup
};


  // ============================================================
  // NORMAL LOGIN
  // ============================================================
  const handleLogin = async () => {
    const username = activeTab === "email" ? email : phone;

    if (!username || !password) {
      alert("Enter both username and password");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
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

      const userData = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
      };

      // ✅ Save globally
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      window.dispatchEvent(new Event("auth-changed"));

      alert("Login successful!");

      onLoginSuccess?.({
        id: userData.id,
        full_name: userData.name,
        email: userData.email,
      });

      onSuccess?.();
      onClose();
      if (redirectTo) {
  navigate(redirectTo);
}

    } catch (error) {
      console.error(error);
      alert("Server error while logging in.");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="login-title">{t("log_in")}</h2>

        <div className="tabs">
          <button
            className={activeTab === "email" ? "tab active" : "tab"}
            onClick={() => setActiveTab("email")}
          >{t("email")}</button>
          <button
            className={activeTab === "mobile" ? "tab active" : "tab"}
            onClick={() => setActiveTab("mobile")}
          >{t("mobile_number")}</button>
        </div>

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

        <button className="login-btn" onClick={handleLogin}>{t("log_in")}</button>

        <p className="forgot-text" onClick={onForgotPassword}>{t("forgot_password")}</p>

        <div className="divider"></div>

        <button className="social-btn" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="google" className="social-icon" />{t("sign_in_with_google")}</button>

        <p className="signup-text">{t("new_user")}<NavLink to="/join">{t("sign_up_here")}</NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
