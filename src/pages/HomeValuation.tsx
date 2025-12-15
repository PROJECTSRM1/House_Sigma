import { useState, useRef, useEffect } from "react";
import {
  Home,
  Bed,
  Bath,
  Car,
  Ruler,
  DollarSign,
  MapPin,
  ChevronDown,
  X,
  Plus,
  Minus,
} from "lucide-react";
import styles from "./HomeValuation.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface InputProps {
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface CounterProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  icon?: React.ReactNode;
}

export default function HomeValuation() {
  const [bed, setBed] = useState(0);
  const [pbed, setPbed] = useState(0);
  const [bath, setBath] = useState(0);
  const [garage, setGarage] = useState(0);
  const [address, setAddress] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMessage, setConsultMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  useEffect(() => {
    const onAuthChanged = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };
    window.addEventListener("auth-changed", onAuthChanged);
    return () => window.removeEventListener("auth-changed", onAuthChanged);
  }, []);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleConsultSubmit = () => {
    if (!consultName || !consultPhone || !consultEmail) {
      alert("Please fill required fields: name, phone and email.");
      return;
    }
    alert("Consultation submitted — Replace with API");
  };

  return (
    
    <div className={styles.pageWrapper}>
      <Navbar/>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <Home size={48} color="#fff" />
          </div>
          <h1 className={styles.heroTitle}>Discover Your Home's True Value</h1>
          <p className={styles.heroSubtitle}>
            Get an accurate estimate powered by advanced analytics and local market data
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        {/* Address Section */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <MapPin size={24} color="#1e9aa5" />
            <h2 className={styles.cardTitle}>Property Address</h2>
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your property address"
            className={styles.addressInput}
          />
        </div>

        {/* Property Details Section */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Home size={24} color="#1e9aa5" />
            <h2 className={styles.cardTitle}>Property Details</h2>
          </div>

          {/* Counters Grid */}
          <div className={styles.countersGrid}>
            <Counter label="Bedrooms" value={bed} setValue={setBed} icon={<Bed size={20} />} />
            <Counter label="Partial Bed" value={pbed} setValue={setPbed} icon={<Bed size={20} />} />
            <Counter label="Bathrooms" value={bath} setValue={setBath} icon={<Bath size={20} />} />
            <Counter label="Garage" value={garage} setValue={setGarage} icon={<Car size={20} />} />
          </div>

          {/* Input Fields */}
          <div className={styles.inputsGrid}>
            <Input label="Square Footage" suffix="sqft" icon={<Ruler size={18} />} />
            <Input label="Property Tax" suffix="per year" icon={<DollarSign size={18} />} />
          </div>

          <div className={styles.inputsGrid}>
            <Input label="Lot Width (Front)" suffix="feet" icon={<Ruler size={18} />} />
            <Input label="Lot Depth" suffix="feet" icon={<Ruler size={18} />} />
          </div>

          <SelectInput />
        </div>

        {/* Beta Notice */}
        <div className={styles.betaNotice}>
          <div className={styles.betaBadge}>BETA</div>
          <p className={styles.betaText}>
            Sigma Estimate is currently in beta testing. Results are continuously improving.
          </p>
        </div>

        {/* Action Button */}
        {!isLoggedIn && (
          <button className={styles.primaryButton} onClick={handleLoginClick}>
            <span>Log In to Get Your Free Estimate</span>
          </button>
        )}

        {isLoggedIn && (
          <button className={styles.primaryButton}>
            <span>Get Your Home Estimate</span>
          </button>
        )}

        {/* Consultation Form */}
        {isLoggedIn && (
          <div className={styles.consultCard}>
            <h3 className={styles.consultTitle}>Schedule a Free Consultation</h3>
            <p className={styles.consultSubtitle}>Connect with a local expert to discuss your property</p>

            <div className={styles.consultForm}>
              <input
                className={styles.consultInput}
                placeholder="Full Name *"
                value={consultName}
                onChange={(e) => setConsultName(e.target.value)}
              />

              <div className={styles.consultRow}>
                <input
                  className={styles.consultInput}
                  style={{ flex: 1 }}
                  placeholder="Phone Number *"
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                />
                <input
                  className={styles.consultInput}
                  style={{ flex: 1 }}
                  placeholder="Email Address *"
                  value={consultEmail}
                  onChange={(e) => setConsultEmail(e.target.value)}
                />
              </div>

              <textarea
                className={styles.consultTextarea}
                placeholder="Tell us about your property or any specific questions..."
                value={consultMessage}
                onChange={(e) => setConsultMessage(e.target.value)}
              />

              <p className={styles.requiredNote}>* Required fields</p>

              <button className={styles.consultButton} onClick={handleConsultSubmit}>
                Request Free Consultation
              </button>
            </div>
          </div>
        )}

        {/* Agent Contact */}
        <div className={styles.agentCard}>
          <h3 className={styles.agentTitle}>Need Local Expertise?</h3>
          <p className={styles.agentText}>
            We're currently expanding our agent network in your area. Check back soon!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* -------------------------------- INPUT ------------------------------ */
function Input({ label, suffix, icon }: InputProps) {
  const [value, setValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace("-", "").replace(/[^0-9.]/g, "");
    if (v === "") return setValue("");
    const num = parseFloat(v);
    if (isNaN(num) || num < 0) return setValue("0");
    setValue(String(num));
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input type="number" value={value} onChange={handleChange} min={0} step="1" className={styles.input} />
        <span className={styles.inputSuffix}>{suffix}</span>
      </div>
    </div>
  );
}

/* ------------------------------- SELECT ------------------------------ */
function SelectInput() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const OPTIONS = ["Detached", "Semi-Detached", "Condo Apt", "Condo Townhouse", "Freehold Townhouse"];

  useEffect(() => {
    const close = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className={styles.selectWrapper} ref={ref}>
      <label className={styles.inputLabel}>
        <Home size={18} style={{ marginRight: 8 }} />
        Property Type
      </label>
      <div
        className={`${styles.selectBox} ${open ? styles.selectBoxOpen : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? styles.selectTextSelected : styles.selectTextPlaceholder}>
          {selected || "Select property type"}
        </span>
        {selected && !open ? (
          <X
            size={20}
            className={styles.clearIcon}
            onClick={(e: any) => {
              e.stopPropagation();
              setSelected("");
            }}
          />
        ) : (
          <ChevronDown
            size={20}
            className={styles.chevronIcon}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        )}
      </div>

      {open && (
        <div className={styles.dropdown}>
          {OPTIONS.map((item) => (
            <div
              key={item}
              className={styles.dropdownItem}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              <div className={`${styles.radio} ${selected === item ? styles.radioSelected : ""}`} />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ----------------------------- COUNTER ----------------------------- */
function Counter({ label, value, setValue, icon }: CounterProps) {
  return (
    <div className={styles.counterWrapper}>
      <label className={styles.counterLabel}>
        {icon && <span className={styles.counterIcon}>{icon}</span>}
        {label}
      </label>
      <div className={styles.counterBox}>
        <button onClick={() => setValue(Math.max(0, value - 1))} className={styles.counterBtn}>
          <Minus size={18} />
        </button>
        <div className={styles.counterValue}>{value}</div>
        <button onClick={() => setValue(value + 1)} className={styles.counterBtn}>
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}


