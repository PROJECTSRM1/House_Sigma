import { useState, useRef, useEffect } from "react";
import styles from "./HomeValuation.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

import LoginModal from "../pages/Login";

// Autocomplete
<<<<<<< HEAD
import AddressAutocomplete from "../components/AddressAutocomplete";
=======
import AddressAutocomplete from "../pages/AddressAutocomplete";
>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d

interface InputProps {
  label: string;
  suffix?: string;
}

interface CounterProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

export default function HomeValuation() {
  const [bed, setBed] = useState(0);
  const [pbed, setPbed] = useState(0);
  const [bath, setBath] = useState(0);
  const [garage, setGarage] = useState(0);

  const [address, setAddress] = useState("");

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  // ⭐ Show second form after login
  const [showConsultForm, setShowConsultForm] = useState(false);

  // consultation form state (you can wire to backend later)
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMessage, setConsultMessage] = useState("");

  const handleConsultSubmit = () => {
    // Basic validation
    if (!consultName || !consultPhone || !consultEmail) {
      alert("Please fill required fields: name, phone and email.");
      return;
    }
    // replace with your API call
    alert("Consultation submitted — replace this with API call.");
  };

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Home Details</h1>
        <p className={styles.subheading}>Please enter your property address</p>

        {/* Autocomplete */}
        <AddressAutocomplete value={address} onChange={setAddress} />

        <div className={styles.counterRow}>
          <Counter label="Bedroom" value={bed} setValue={setBed} />
          <Counter label="Partial Bedroom" value={pbed} setValue={setPbed} />
          <Counter label="Bathroom" value={bath} setValue={setBath} />
          <Counter label="Garage" value={garage} setValue={setGarage} />
        </div>

        <div className={styles.row}>
          <Input label="Square Footage" suffix="sqft" />
          <Input label="Property Tax" suffix="per year" />
          <SelectInput />
        </div>

        <div className={styles.row}>
          <Input label="Lot Width (Front)" suffix="feet" />
          <Input label="Lot Depth" suffix="feet" />
        </div>

        <div className={styles.noteBox}>
          Note that Sigma Estimate is still under beta testing. There might be
          inaccuracy or inconsistency in our estimated value. Please use this
          information only as a starting point for property valuation.
        </div>

        <br />

        {/* BEFORE LOGIN */}
        {!showConsultForm && (
          <button className={styles.button} onClick={() => setIsLoginOpen(true)}>
            Log In to Get Estimate
          </button>
        )}

        {/* AFTER LOGIN — show Get Estimate button + consultation box (HouseSigma style) */}
        {showConsultForm && (
          <>
            <button className={styles.button}>Get Estimate</button>

            <div className={styles.consultBox}>
              {/* Name (full width) */}
              <input
                className={styles.consultInputFull}
                placeholder="Your Name *"
                value={consultName}
                onChange={(e) => setConsultName(e.target.value)}
              />

              {/* Phone + Email side-by-side */}
              <div className={styles.consultRowTwo}>
                <input
                  className={styles.consultInputHalf}
                  placeholder="Your Contact Number *"
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                />
                <input
                  className={styles.consultInputHalf}
                  placeholder="Your Email Address *"
                  value={consultEmail}
                  onChange={(e) => setConsultEmail(e.target.value)}
                />
              </div>

              {/* Message textarea */}
              <textarea
                className={styles.consultAreaLarge}
                placeholder="Message"
                value={consultMessage}
                onChange={(e) => setConsultMessage(e.target.value)}
              />

              <p className={styles.consultRequired}>* Required field</p>

              <button className={styles.consultSubmit} onClick={handleConsultSubmit}>
                Get Free Consultation
              </button>
            </div>
          </>
        )}

        {/* OLD CONTENT */}
        <div className={styles.contactBox}>
          <h2>Contact HouseSigma Agent</h2>
          <br />
          <p>
            Sorry we don't have a community agent working in this area. Are you
            a REALTOR® working actively in this community?
          </p>
        </div>

        <br />

        <div className={styles.disclaimerSection}>
          <p className={styles.disclaimerText}>
            The information provided herein must only be used by consumers that
            have a bona fide interest in the purchase, sale, or lease of real
            estate and may not be used for any commercial purpose or any other
            purpose.
          </p>
        </div>
      </div>

      <Footer />

      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />

      {/* LOGIN MODAL — Now triggers second form */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onForgotPassword={() => console.log("Forgot password clicked")}
        onSuccess={() => {
          setIsLoginOpen(false);
<<<<<<< HEAD
          setShowConsultForm(true); // ⭐ Show second form
=======
          setShowConsultForm(true); 
>>>>>>> 37583ae9b916da9d1337a04b65e2c67a5404c19d
        }}
      />
    </>
  );
}

/* ---------------------------------- INPUT ---------------------------------- */
function Input({ label, suffix }: InputProps) {
  const [value, setValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace("-", "").replace(/[^0-9.]/g, "");
    if (v === "") return setValue("");

    const num = parseFloat(v);
    if (isNaN(num) || num < 0) return setValue("0");

    setValue(String(num));
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputBoxWrapper}>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={0}
          step="1"
          className={`${styles.inputBoxInner} ${
            suffix === "per year" ? styles.inputLong : styles.inputShort
          } ${styles.showSpinner}`}
        />

        <span
          className={
            suffix === "per year" ? styles.suffixAfterSpinner : styles.suffixInside
          }
        >
          {suffix}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------- SELECT INPUT ------------------------------- */
function SelectInput() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const OPTIONS = [
    "Detached",
    "Semi-Detached",
    "Condo Apt",
    "Condo Townhouse",
    "Freehold Townhouse",
  ];

  useEffect(() => {
    const close = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className={styles.inputContainerWide} ref={ref}>
      <label className={styles.label}>Property Type</label>

      <div
        className={`${styles.customSelectBox} ${open ? styles.openState : ""} ${
          selected && !open ? styles.selectedClosed : ""
        }`}
        onClick={() => setOpen(!open)}
        style={{ position: "relative" }}
      >
        <span>{selected || "Select"}</span>

        {selected && !open ? (
          <span
            className={styles.clearSelection}
            onClick={(e) => {
              e.stopPropagation();
              setSelected("");
            }}
          >
            ×
          </span>
        ) : (
          <span
            className={`${open ? styles.arrowUp : styles.arrowDown} ${
              selected ? styles.hideArrow : ""
            }`}
          />
        )}
      </div>

      {open && (
        <div className={styles.dropdownMenu}>
          {OPTIONS.map((item) => (
            <div
              key={item}
              className={styles.dropdownItem}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              <div
                className={`${styles.radioCircle} ${
                  selected === item ? styles.radioSelected : ""
                }`}
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------------------------- COUNTER ---------------------------------- */
function Counter({ label, value, setValue }: CounterProps) {
  return (
    <div className={styles.counterContainer}>
      <label className={styles.label}>{label}</label>

      <div className={styles.counterBox}>
        <button
          onClick={() => setValue(Math.max(0, value - 1))}
          className={styles.counterButton}
        >
          –
        </button>

        <div className={styles.counterValue}>{value}</div>

        <button onClick={() => setValue(value + 1)} className={styles.counterButton}>
          +
        </button>
      </div>
    </div>
  );
}