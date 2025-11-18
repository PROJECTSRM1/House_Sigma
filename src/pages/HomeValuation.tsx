import { useState, useRef, useEffect } from "react";
import styles from "./HomeValuation.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Home Details</h1>
        <p className={styles.subheading}>Please enter your property address</p>

        <input className={styles.addressInput} placeholder=" " />

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
          information only as a starting point for property valuation
        </div>

        <button className={styles.button}>Log In to Get Estimate</button>

        {/* CONTACT BLOCK */}
        <div className={styles.contactBox}>
          <h2 className={styles.contactHeading}>Contact HouseSigma Agent</h2>
          <br></br>
          <p className={styles.contactText}>
            Sorry we don´t have a community agent working in this area. Are you
            a REALTOR® working actively in this community?
          </p>
        </div>
          <br></br>
        {/* PERFECT DISCLAIMER BLOCK */}
      <div className={styles.disclaimerSection}>
  <p className={styles.disclaimerText}>
    The information provided herein must only be used by consumers that have a bona fide
    interest in the purchase, sale, or lease of real estate and may not be used for any 
    commercial purpose or any other purpose.
  </p>
</div>

      </div>

      <Footer />
    </>
  );
}

/* ---------------- INPUT ---------------- */
/* ---------------- INPUT ---------------- */
function Input({ label, suffix }: InputProps) {
  const [value, setValue] = useState("0");
  const isLong = suffix === "per year";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;

    // Remove "-" if typed
    v = v.replace("-", "");

    // Remove any non-digit characters except dot
    v = v.replace(/[^0-9.]/g, "");

    // If empty, allow empty temporarily
    if (v === "") {
      setValue("");
      return;
    }

    // Convert to number
    const num = parseFloat(v);

    // Prevent negative or NaN
    if (isNaN(num) || num < 0) {
      setValue("0");
      return;
    }

    setValue(String(num));
  };

  const handleBlur = () => {
    // When input left empty -> set back to 0
    if (value === "" || parseFloat(value) < 0) {
      setValue("0");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Block minus, plus, e, E
    if (["-", "+", "e", "E"].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text");

    // Block negative or invalid paste
    if (text.includes("-") || isNaN(Number(text))) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputBoxWrapper}>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          min={0}
          step="1"
          className={`${styles.inputBoxInner} ${
            isLong ? styles.inputLong : styles.inputShort
          }`}
        />

        {suffix && (
          <span
            className={`${styles.suffixPlaceholder} ${
              isLong ? styles.suffixLong : styles.suffixShort
            }`}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}


/* ---------------- DROPDOWN ---------------- */
/* ---------------- DROPDOWN ---------------- */
function SelectInput() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const ref = useRef<HTMLDivElement>(null);

  const OPTIONS = [
    "Detached",
    "Semi-Detached",
    "Condo Apt",
    "Condo Townhouse",
    "Freehold Townhouse",
  ];

  useEffect(() => {
    function closeOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", closeOutside);
    return () => document.removeEventListener("mousedown", closeOutside);
  }, []);

  return (
    <div className={styles.inputContainerWide} ref={ref}>
      <label className={styles.label}>Property Type</label>

      {/* SELECT BOX */}
      <div
        className={`${styles.customSelectBox} ${
          open ? styles.selectedBox : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className={open ? styles.selectedText : ""}>
          {selected}
        </span>

        {/* 🔽 DEFAULT: Down arrow, 🔼 when open */}
        <span className={open ? styles.arrowUp : styles.arrowDown}></span>
      </div>

      {/* DROPDOWN MENU */}
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
              ></div>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


/* ---------------- COUNTER ---------------- */
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