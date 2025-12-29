import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Join.css";

import { useNavigate } from "react-router-dom";
import googleLogo from "@/assets/google.png";
import { useAuth } from "@/context/AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const countryList = [
  { name: "India", code: "+91" },
  { name: "Canada", code: "+1" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
];

const Join: React.FC = () => {

  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  // Profile image
  const [profileImage, setProfileImage] = useState<File | null>(null);

  // TIMER STATE
  const [timer, setTimer] = useState(120); // 2 minutes
  const [otpExpired, setOtpExpired] = useState(false);

  // Start timer when step = 3
  useEffect(() => {
    if (step === 3) {
      setTimer(120);
      setOtpExpired(false);

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setOtpExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [step]);

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
        setError("Please enter your Mobile number.");
        return false;
      }
      if (phoneNumber.length < 6) {
        setError("Enter a valid Mobile number.");
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

  const sendOtp = async () => {
    try {
      setLoadingNext(true);

      const response = await fetch(`${API_BASE}/api/auth/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep(2);
      } else {
        setError(data.detail || "Failed to send OTP");
      }
    } catch (error) {
      setError("Server error while sending OTP.");
    } finally {
      setLoadingNext(false);
    }
  };

  const verifyOtp = async () => {
    if (!verificationCode.trim()) {
      setError("Enter the OTP sent to your email.");
      return;
    }

    try {
      setLoadingVerify(true);

      const response = await fetch(`${API_BASE}/api/auth/sign/otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || "Invalid OTP");
        return;
      }

      // LOGIN AFTER OTP SUCCESS
      const loginRes = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username_or_email: email,
          password: password,
        }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        setError(loginData.detail || "Login failed after verification");
        return;
      }

      let imageUrl = loginData.user.profile_image;

      // UPLOAD PROFILE IMAGE
      if (profileImage) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("folder", "users");
        formData.append("image", profileImage);

        const imgRes = await fetch(`${API_BASE}/api/auth/upload-image`, {
          method: "POST",
          body: formData,
        });

        const imgData = await imgRes.json();
        imageUrl = imgData.image_url;
      }

      const finalUser = {
        ...loginData.user,
        profile_image: imageUrl,
      };

      localStorage.setItem("token", loginData.access_token);
      localStorage.setItem("user", JSON.stringify(finalUser));

      setUser(finalUser);
      window.dispatchEvent(new Event("auth-changed"));

      alert("Account created & logged in!");
      navigate("/");
      window.location.reload();

    } catch (error) {
      setError("Server error verifying OTP.");
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="join-container">
        <h2 className="join-title">{t("create_account")}</h2>

        <div className="step-indicator">
          <div className={step >= 1 ? "circle active" : "circle"}>1</div>
          <div className="line"></div>
          <div className={step >= 2 ? "circle active" : "circle"}>2</div>
          <div className="line"></div>
          <div className={step >= 3 ? "circle active" : "circle"}>3</div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="step-box">
            <div className="tabs">
              <button
                className={activeTab === "email" ? "tab active" : "tab"}
                onClick={() => {
                  setActiveTab("email");
                  setError("");
                }}
              >{t("email")}</button>

              <button
                className={activeTab === "mobile" ? "tab active" : "tab"}
                onClick={() => {
                  setActiveTab("mobile");
                  setError("");
                }}
              >{t("mobile_number")}</button>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              className="join-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {activeTab === "email" && (
              <input
                type="email"
                placeholder="Enter your email"
                className="join-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {activeTab === "mobile" && (
              <div className="mobile-outer-box">
                <div
                  className="country-box"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedCountry.code}
                  <span className="arrow">▼</span>
                </div>

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

                <input
                  type="text"
                  className="phone-input-join"
                  placeholder="Mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}

            <input
              type="password"
              placeholder="Enter password"
              className="join-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* PROFILE IMAGE */}
            <input
              type="file"
              accept="image/*"
              className="join-input"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProfileImage(e.target.files[0]);
                }
              }}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="next-btn"
              onClick={() => validateStep1() && sendOtp()}
              disabled={loadingNext}
            >
              {loadingNext ? "Loading..." : "Next"}
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="step-box">
            <div className="scroll-card">
              <center><h3>{t("homenest_terms_of_use")}</h3></center>
              <p>{t(
                "by_using_this_website_you_are_agreeing_to_comply_and_be_bound_by_the_following_terms_of_service_and_use_please_review_the_following_terms_in_their_entirety_and_ensure_their_comprehension_before_using_and_viewing_this_website"
              )}<br /><br />{t(
                "acknowledge_and_understand_that_the_terms_of_use_do_not_create_an_agency_relationship_and_do_not_impose_a_financial_obligation_on_the_registrant_or_create_any_representation_agreement_between_the_registrant_and_the_participant"
              )}<br /><br />{t(
                "acknowledges_that_you_are_entering_into_a_lawful_broker_consumer_relationship_with_the_homenest_inc_brokerage"
              )}<br /><br />{t(
                "acknowledges_that_after_the_terms_of_use_agreement_is_opened_for_viewing_a_mouse_click_is_sufficient_to_acknowledge_agreement_to_those_terms"
              )}<br /><br />{t(
                "understand_that_homenest_assumes_no_responsibility_for_the_accuracy_of_any_information_shown_on_the_homenest_website_and_mobile_app"
              )}<br /><br />{t(
                "understand_that_all_data_obtained_from_the_vow_virtual_office_website_is_intended_only_for_your_personal_non_commercial_use"
              )}<br /><br />{t(
                "do_have_a_bona_fide_interest_in_the_purchase_sale_or_lease_of_real_estate_of_the_type_being_offered_through_the_vow"
              )}<br /><br />{t(
                "agree_not_to_copy_redistribute_retransmit_or_otherwise_use_any_of_the_data_or_listing_information_provided_except_in_connection_with_the_consumer_s_consideration_of_the_purchase_sale_or_lease_of_an_individual_property"
              )}<br /><br />{t(
                "acknowledge_the_board_association_ownership_of_and_the_validity_of_the_copyright_in_the_mls_database"
              )}<br /><br />{t(
                "if_at_any_time_an_agreement_is_entered_between_homenest_inc_and_consumer_imposing_a_financial_obligation_on_the_consumer_or_creating_representation_of_the_consumer_by_homenest_inc_it_must_be_established_separately_from_the_terms_of_use_and_may_not_be_accepted_solely_by_mouse_click"
              )}<br /><br />

                <strong>{t("copyright")}</strong><br />{t(
                "the_content_on_this_website_is_protected_by_copyright_laws_and_is_intended_solely_for_private_non_commercial_use_any_reproduction_distribution_or_use_beyond_personal_purposes_is_prohibited"
              )}</p>
            </div>

            <div className="scroll-card">
              <center><h3>{t("canadian_real_estate_association_terms_of_use")}</h3></center>
              <p>{t(
                "you_are_agreeing_to_comply_and_be_bound_by_the_following_terms_of_service_and_use"
              )}<br /><br />{t(
                "the_information_provided_on_this_site_is_based_in_whole_or_in_part_on_information_provided_by_members_of_the_canadian_real_estate_association_who_are_responsible_for_its_accuracy_crea_assumes_no_responsibility_for_its_accuracy"
              )}<br /><br />{t(
                "crea_owns_the_realtor_and_mls_trademarks_these_marks_identify_real_estate_professionals_who_are_members_of_crea_and_who_must_follow_crea_s_rules_by_laws_and_realtor_code"
              )}<br /><br />{t(
                "the_information_may_only_be_used_by_consumers_with_a_bona_fide_interest_in_real_estate_transactions_and_cannot_be_used_for_commercial_purposes"
              )}<br /><br />{t(
                "rahb_and_oreb_make_no_representations_regarding_the_accuracy_or_suitability_of_the_listing_information"
              )}</p>
            </div>

            <div className="step2-actions">
              <button className="reject-btn" onClick={() => setStep(1)}>{t("reject")}</button>

              <button className="agree-btn" onClick={() => setStep(3)}>{t("agree")}</button>
            </div>
          </div>
        )}

        {/* STEP 3 - OTP */}
        {step === 3 && (
          <div className="step-box-small">
            <p className="verification-text">{t("enter_the_verification_code_sent_to")}<br />
              <span className="verification-email">{email}</span>
            </p>

            {/* TIMER */}
            <p className="timer-text">
              {otpExpired ? (
                <span style={{ color: "red" }}>{t("otp_expired")}</span>
              ) : (
                <>{t("otp_valid_for")}{" "}
                  <b>
                    {Math.floor(timer / 60)}:
                    {String(timer % 60).padStart(2, "0")}
                  </b>
                </>
              )}
            </p>

            <input
              type="text"
              placeholder="Verification Code"
              className="join-input"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              disabled={otpExpired}
            />

            {error && <p className="error-text">{error}</p>}

            <button
              className="next-btn"
              onClick={verifyOtp}
              disabled={loadingVerify || otpExpired}
            >
              {loadingVerify ? "Loading..." : "Confirm"}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Join;
