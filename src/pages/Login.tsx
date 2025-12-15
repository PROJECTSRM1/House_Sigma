declare const google: any;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "/assets/google-play.png";
import { useAuth } from "@/context/AuthContext";
import ResetPasswordModal from "./ResetPasswordModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
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

// ✅ API BASE URL FROM .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSuccess,
  redirectTo = "/",
}) => {
  const { setUser } = useAuth();

  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[2]);

  const [showReset, setShowReset] = useState(false);

  const navigate = useNavigate();

  // ===================== GOOGLE LOGIN =====================
  const handleGoogleLogin = () => {
    google.accounts.id.initialize({
      client_id:
        "492354254466-e56jgfu25vgjegatr1qa4ng9ib2kthmj.apps.googleusercontent.com",
      callback: async (response: any) => {
        const token = response.credential;

        try {
          const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
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
            name: data.name,
            email: data.email,
          };

          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          window.dispatchEvent(new Event("auth-changed"));

          alert("Google login successful!");
          onLoginSuccess?.(userData);
          onSuccess?.();
          onClose();
        } catch {
          alert("Google login error");
        }
      },
    });

    google.accounts.id.prompt();
  };

  // ===================== NORMAL LOGIN =====================
  const handleLogin = async () => {
    const username = activeTab === "email" ? email : phone;

    if (!username || !password) {
      alert("Enter both username and password");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
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
        profile_image: data.user.profile_image,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("auth-changed"));

      alert("Login successful!");

      onLoginSuccess?.(userData);
      onSuccess?.();
      onClose();

      if (redirectTo) navigate(redirectTo);
    } catch {
      alert("Server error while logging in.");
    }
  };

  return (
    <>
      {isOpen && !showReset && (
        <div className="login-overlay">
          <div className="login-modal">
            <button className="close-btn" onClick={onClose}>✕</button>

            <h2 className="login-title">Log in</h2>

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

            {activeTab === "email" && (
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {activeTab === "mobile" && (
              <input
                type="text"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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

            <button className="login-btn" onClick={handleLogin}>
              Log in
            </button>

            <p className="forgot-text" onClick={() => setShowReset(true)}>
              Forgot Password?
            </p>

            <div className="divider"></div>

            <button className="social-btn" onClick={handleGoogleLogin}>
              <img src={googleLogo} alt="google" className="social-icon" />
              Sign in with Google
            </button>

            <p className="signup-text">
              New user? <NavLink to="/join">Sign-up here</NavLink>
            </p>
          </div>
        </div>
      )}

      <ResetPasswordModal
        isOpen={showReset}
        closeReset={() => setShowReset(false)}
        onBackToLogin={() => setShowReset(false)}
      />
    </>
  );
};

export default LoginModal;
