declare const google: any;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import googleLogo from "@/assets/google.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;
<<<<<<< HEAD

  // For Navbar login update
  onLoginSuccess?: (userData: any) => void;

  // For pages like HomeValuation
  onSuccess?: () => void;
=======
  onSuccess: () => void;   
>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d
}

const countryList = [
  { name: "China", code: "+86" },
  { name: "Hongkong", code: "+852" },
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
];

<<<<<<< HEAD
const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onForgotPassword,
  onLoginSuccess,
  onSuccess,
=======
const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onForgotPassword,
  onSuccess
>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d
}) => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]);

  if (!isOpen) return null;

  // ============================================================
  //  GOOGLE LOGIN HANDLER
  // ============================================================
  const handleGoogleLogin = () => {
    /* global google */
    const client = google.accounts.oauth2.initTokenClient({
      client_id: "419610409681-jk6mku5flon3s9onielvnrckiq7utdek.apps.googleusercontent.com", //  <-- replace this
      scope: "email profile",
      callback: async (response: any) => {
        const token = response.access_token;

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

          alert("Google login successful!");

          // Navbar update
          onLoginSuccess?.({
            full_name: data.name,
            email: data.email,
          });

          onSuccess?.();
          onClose();
          navigate("/");
        } catch (error) {
          alert("Google login error");
        }
      },
    });

    client.requestAccessToken();
  };

  // ============================================================
  //  NORMAL EMAIL/MOBILE LOGIN
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

      alert("Login successful!");

<<<<<<< HEAD
      if (data.user) {
        onLoginSuccess?.({
          id: data.user.id,
          full_name: data.user.name,
          email: data.user.email,
        });
      }

      onSuccess?.();
      onClose();
      navigate("/");
=======
      onClose();      // close login modal
      onSuccess();    // notify parent that login succeeded

>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d
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
<<<<<<< HEAD
            Mobile
=======
            Mobile Number
>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d
          </button>
        </div>

        {/* Email */}
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

        {/* Mobile */}
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

        {/* Password */}
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

        {/* Forgot */}
        <p className="forgot-text" onClick={onForgotPassword}>
          Forgot Password?
        </p>

        <div className="divider"></div>

        {/* ⭐ Google Login */}
        <button className="social-btn" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="google" className="social-icon" />
          Sign in with Google
        </button>

        {/* Facebook */}
        <button className="social-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="facebook"
            className="social-icon"
          />
          Sign in with Facebook
        </button>

        {/* LinkedIn */}
        <button className="social-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="linkedin"
            className="social-icon"
          />
          Sign in with LinkedIn
        </button>

        <p className="signup-text">
          New user? <NavLink to="/join">Sign-up here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;