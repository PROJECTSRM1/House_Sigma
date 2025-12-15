import React, { useState, useEffect } from "react";
import "./ResetPasswordModal.css";

interface CountryOption {
  name: string;
  code: string;
}

interface ResetPasswordModalProps {
  isOpen?: boolean;
  closeReset?: () => void;
  onBackToLogin?: () => void;
  initiallyTab?: "email" | "phone";
  onFinished?: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ResetPasswordModal({
  isOpen = false,
  closeReset = () => {},
  onBackToLogin = () => {},
  initiallyTab = "email",
  onFinished = () => {},
}: ResetPasswordModalProps) {
  const [step, setStep] = useState<number>(1);
  const [tab, setTab] = useState<"email" | "phone">(initiallyTab);

  const countryOptions: CountryOption[] = [
    { name: "China", code: "+86" },
    { name: "Hongkong", code: "+852" },
    { name: "India", code: "+91" },
    { name: "Canada", code: "+1" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
  ];

  const [showCountryList, setShowCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    countryOptions[0]
  );

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");

  const [sending, setSending] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setTab(initiallyTab);
      setVerificationCode("");
      setPassword("");
      setError("");
      setSending(false);
      setResetting(false);
    }
  }, [isOpen, initiallyTab]);

  // ================= STEP 1 – SEND OTP =================
  const handleSendVerification = async () => {
    setError("");

    if (tab === "email") {
      if (!email) return setError("Please enter email.");
      if (!emailRegex.test(email)) {
        return setError("Please enter a valid email address.");
      }
    }

    if (tab === "phone") {
      if (!phone) return setError("Please enter phone number.");
      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length !== 10) {
        return setError("Phone number must be exactly 10 digits.");
      }
    }

    setSending(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Failed to send OTP");
        setSending(false);
        return;
      }

      setStep(2);
    } catch {
      setError("Server error while sending OTP");
    }

    setSending(false);
  };

  // ================= PASSWORD VALIDATION =================
  const isPasswordValid = (pwd: string): boolean => {
    if (pwd.length < 6) return false;
    const hasLetter = /[A-Za-z]/.test(pwd);
    const hasDigit = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    return [hasLetter, hasDigit, hasSpecial].filter(Boolean).length >= 2;
  };

  // ================= STEP 2 – VERIFY OTP & RESET =================
  const handleReset = async () => {
    setError("");

    if (!verificationCode)
      return setError("Please enter verification code.");

    if (!isPasswordValid(password)) {
      return setError(
        "Password must be at least 6 characters and include 2 of: letters, digits, special characters."
      );
    }

    setResetting(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/auth/forgot-password/verify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            otp: verificationCode,
            new_password: password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Invalid OTP or reset failed");
        setResetting(false);
        return;
      }

      alert("Password reset successful!");

      onFinished();
      closeReset();
      onBackToLogin();
    } catch {
      setError("Server error while resetting password");
    }

    setResetting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="rp-overlay">
      <div className="rp-modal">
        <button className="rp-close" onClick={closeReset}>×</button>

        <h3 className="rp-title">Reset Password by</h3>

        <div className="rp-steps">
          <div className={`rp-step-circle ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="rp-step-line" />
          <div className={`rp-step-circle ${step >= 2 ? "active" : ""}`}>2</div>
        </div>

        <div className="rp-tabs">
          <button
            className={`rp-tab ${tab === "email" ? "active" : ""}`}
            onClick={() => setTab("email")}
          >
            Email
          </button>
          <button
            className={`rp-tab ${tab === "phone" ? "active" : ""}`}
            onClick={() => setTab("phone")}
          >
            Mobile Phone
          </button>
        </div>

        <div className="rp-content">
          {step === 1 && (
            <>
              {tab === "email" ? (
                <input
                  className="rp-input"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <input
                  className="rp-input"
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              )}

              {error && <div className="rp-error">{error}</div>}

              <button
                className="rp-action-btn"
                onClick={handleSendVerification}
                disabled={sending}
              >
                {sending ? "Sending..." : "Next"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                className="rp-input"
                type="text"
                placeholder="Verification Code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />

              <input
                className="rp-input"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <div className="rp-error">{error}</div>}

              <button
                className="rp-action-btn"
                onClick={handleReset}
                disabled={resetting}
              >
                {resetting ? "Resetting…" : "Reset"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
