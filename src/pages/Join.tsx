import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Join.css";

const countryList = [
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" }
];

const Join: React.FC = () => {
  const [step, setStep] = useState(1);

  // Tab (Email / Mobile)
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");

  // Step 1 fields
  const [fullName, setFullName] = useState("");

  // Email
  const [email, setEmail] = useState("");

  // Mobile
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Password
  const [password, setPassword] = useState("");

  // Error
  const [error, setError] = useState("");

  // Step 3 fields
  const [verificationCode, setVerificationCode] = useState("");
  const [isAgent, setIsAgent] = useState(false);
  const [province, setProvince] = useState("");
  const [board, setBoard] = useState("");
  const [broker, setBroker] = useState("");

  // ==========================================
  //           VALIDATE STEP 1
  // ==========================================
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
        setError("Please enter your phone number.");
        return false;
      }

      if (phoneNumber.length < 6) {
        setError("Enter a valid phone number.");
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

  return (
    <>
      <Navbar />

      <div className="join-container">
        <h2 className="join-title">Create Account</h2>

        {/* ===== STEP INDICATOR ===== */}
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

            {/* Tabs */}
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
                Mobile Phone
              </button>
            </div>

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="join-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* EMAIL MODE */}
            {activeTab === "email" && (
              <input
                type="email"
                placeholder="Enter your email"
                className="join-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {/* MOBILE MODE */}
            {activeTab === "mobile" && (
              <div className="mobile-outer-box">

                {/* Country dropdown trigger */}
                <div
                  className="country-box"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedCountry.code}
                  <span className="arrow">▼</span>
                </div>

                {/* Dropdown list */}
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

                {/* Number box */}
                <input
                  type="text"
                  className="phone-input-join"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Enter password"
              className="join-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="password-rules">
              Passwords must consist of at least 6 characters.<br />
              Passwords must consist 2 of Alphabet, Number digit, Special character.
            </p>

            {/* Error */}
            {error && <p className="error-text">{error}</p>}

            {/* Next Button */}
            <button
              className="next-btn"
              onClick={() => {
                if (validateStep1()) {
                  setStep(2);
                }
              }}
            >
              Next
            </button>

            <div className="or">or</div>

            <button className="google-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
              />
              Sign in with Google
            </button>
          </div>
        )}

        {/* ==================== STEP 2 ==================== */}
        {step === 2 && (
          <div className="step-box">

            <div className="scroll-card">
              <h3>HouseSigma Terms of Use</h3>
              <p>
                By using this website, you are agreeing to comply and be bound by the following terms...
              </p>
            </div>

            <div className="scroll-card">
              <h3>Canadian Real Estate Association Terms of Use</h3>
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

        {/* ==================== STEP 3 ==================== */}
        {step === 3 && (
          <div className="step-box-small">
            <p className="verification-text">
              We sent you a code to verify your account<br />
              <span className="verification-email">
                {activeTab === "email"
                  ? email
                  : selectedCountry.code + phoneNumber}
              </span>
            </p>

            <input
              type="text"
              placeholder="Verification Code"
              className="join-input"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />

            <button className="next-btn">Confirm</button>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isAgent}
                onChange={() => setIsAgent(!isAgent)}
              />
              I am a licensed real estate agent.
            </label>

            {isAgent && (
              <div className="agent-section">
                <label>Province</label>
                <select
                  className="join-input"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="AB">AB – Alberta</option>
                  <option value="QC">QC – Quebec</option>
                  <option value="SK">SK – Saskatchewan</option>
                  <option value="NS">NS – Nova Scotia</option>
                  <option value="MB">MB – Manitoba</option>
                  <option value="Other">Other</option>
                </select>

                <label>Board name</label>
                <input
                  type="text"
                  className="join-input"
                  placeholder="Enter board name"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                />

                <label>Brokerage name</label>
                <input
                  type="text"
                  className="join-input"
                  placeholder="Enter brokerage name"
                  value={broker}
                  onChange={(e) => setBroker(e.target.value)}
                />
              </div>
            )}

            <input
              type="text"
              className="join-input referral"
              placeholder="Referral Code (Optional)"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Join;
