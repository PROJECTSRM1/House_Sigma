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

  const [showCountryList, setShowCountryList] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countryOptions[0]);

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [sending, setSending] = useState<boolean>(false);
  const [resetting, setResetting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  // ----------------- STEP 1 VALIDATION -----------------
  const handleSendVerification = async () => {
    setError("");

    if (tab === "email") {
      if (!email) return setError("Please enter email.");
      if (!emailRegex.test(email))
        return setError("Please enter a valid email address.");
    }

    if (tab === "phone") {
      if (!phone) return setError("Please enter phone number.");

      // ⭐ MOBILE VALIDATION (EXACT 10 DIGITS)
      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length !== 10)
        return setError("Phone number must be exactly 10 digits.");
    }

    setSending(true);
    await new Promise((res) => setTimeout(res, 700));
    setSending(false);

    setStep(2);
  };

  // ----------------- PASSWORD VALIDATION -----------------
  const isPasswordValid = (pwd: string): boolean => {
    if (pwd.length < 6) return false;
    const hasLetter = /[A-Za-z]/.test(pwd);
    const hasDigit = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    return [hasLetter, hasDigit, hasSpecial].filter(Boolean).length >= 2;
  };

  const handleReset = async () => {
    setError("");

    if (!verificationCode) return setError("Please enter verification code.");
    if (!isPasswordValid(password))
      return setError(
        "Password must be at least 6 characters and include 2 of: letters, digits, special characters."
      );

    setResetting(true);
    await new Promise((res) => setTimeout(res, 800));
    setResetting(false);

    onFinished();
    closeReset();
  };

  if (!isOpen) return null;

  return (
    <div className="rp-overlay">
      <div className="rp-modal">
        <button className="rp-close" onClick={closeReset}>×</button>

        <h3 className="rp-title">Reset Password by</h3>

        {/* Step Indicator */}
        <div className="rp-steps">
          <div className={`rp-step-circle ${step >= 1 ? "active" : ""}`}>1</div>
          <div className="rp-step-line" />
          <div className={`rp-step-circle ${step >= 2 ? "active" : ""}`}>2</div>
        </div>

        {/* Tabs */}
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
          {/* STEP 1 */}
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
                <div className="rp-mobile-box">
                  <div
                    className="rp-country-box"
                    onClick={() => setShowCountryList((v) => !v)}
                  >
                    {selectedCountry.code}
                    <span className="rp-arrow">▼</span>
                  </div>

                  {showCountryList && (
                    <div className="rp-country-dropdown">
                      {countryOptions.map((c) => (
                        <div
                          key={c.name}
                          className="rp-country-item"
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
                    className="rp-input-phone"
                    type="text"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}

              {error && <div className="rp-error">{error}</div>}

              <button
                className="rp-action-btn"
                onClick={handleSendVerification}
                disabled={sending}
              >
                {sending ? "Sending..." : "Next"}
              </button>

              <p className="rp-already">
                Already registered?{" "}
                <span
                  className="rp-login-link"
                  onClick={() => {
                    closeReset();
                    onBackToLogin();
                  }}
                >
                  Log in
                </span>
              </p>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <p className="rp-info">
                A verification code has been sent to{" "}
                {tab === "email" ? "email" : "mobile phone"}.
              </p>

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

              <div className="rp-password-hint">
                Passwords must be at least 6 characters.
                <br />
                Must include 2 of: Alphabet / Number / Special character.
              </div>

              {error && <div className="rp-error">{error}</div>}

              <button
                className="rp-action-btn"
                onClick={handleReset}
                disabled={resetting}
              >
                {resetting ? "Resetting…" : "Reset"}
              </button>

              <p className="rp-already">
                Already registered?{" "}
                <span
                  className="rp-login-link"
                  onClick={() => {
                    closeReset();
                    onBackToLogin();
                  }}
                >
                  Log in
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
