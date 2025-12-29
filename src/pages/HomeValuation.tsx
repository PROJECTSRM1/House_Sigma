import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  TrendingUp,
  Award,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import styles from "./HomeValuation.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface InputProps {
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

interface CounterProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  icon?: React.ReactNode;
}

export default function HomeValuation() {
  const { t } = useTranslation();


  const [bed, setBed] = useState(3);
  const [pbed, setPbed] = useState(0);
  const [bath, setBath] = useState(2);
  const [garage, setGarage] = useState(1);
  const [sqft, setSqft] = useState("2000");
  const [tax, setTax] = useState("5000");
  const [lotWidth, setLotWidth] = useState("50");
  const [lotDepth, setLotDepth] = useState("100");
  const [address, setAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMessage, setConsultMessage] = useState("");

  useEffect(() => {
    // Check auth without localStorage
    setIsLoggedIn(false);
  }, []);

  const handleLoginClick = () => {
    // Navigate to login
    alert("Navigate to login page");
  };

  const handleConsultSubmit = () => {
    if (!consultName || !consultPhone || !consultEmail) {
      alert("Please fill required fields: name, phone and email.");
      return;
    }
    alert("Consultation submitted successfully!");
    setConsultName("");
    setConsultPhone("");
    setConsultEmail("");
    setConsultMessage("");
  };

  const handleEstimate = () => {
    if (!address) {
      alert("Please enter a property address");
      return;
    }
    alert("Generating estimate... (Connect to API)");
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      {/* Hero Section - Redesigned */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Zap size={16} />
            {/* <span>AI-Powered Valuation</span> */}
          </div>
          <h1 className={styles.heroTitle}>{t("unlock_your_home_s")}<span className={styles.heroTitleAccent}>{t("true_market_value")}</span>
          </h1>
          <p className={styles.heroSubtitle}>{t(
            "get_an_instant_accurate_property_estimate_using_real_time_market_data_from_thousands_of_comparable_properties"
          )}</p>
          
          {/* Quick Stats */}
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>{t("98")}</div>
              <div className={styles.statLabel}>{t("accuracy_rate")}</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statValue}>{t("500k")}</div>
              <div className={styles.statLabel}>{t("valuations")}</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statValue}>{t("free")}</div>
              <div className={styles.statLabel}>{t("instant_valuation")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.mainGrid}>
          {/* Left Column - Form */}
          <div className={styles.leftColumn}>
            {/* Step Indicator */}
            <div className={styles.stepIndicator}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>1</div>
                <span className={styles.stepText}>{t("property_details")}</span>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>2</div>
                <span className={styles.stepText}>{t("get_estimate")}</span>
              </div>
            </div>

            {/* Address Section - Enhanced */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className={styles.sectionTitle}>{t("property_location")}</h3>
                  <p className={styles.sectionDescription}>{t("enter_the_complete_address_for_accurate_results")}</p>
                </div>
              </div>
              
              <div className={styles.addressInputWrapper}>
                <MapPin className={styles.addressIcon} size={20} />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main Street, City, State ZIP"
                  className={styles.addressInput}
                />
              </div>
            </div>

            {/* Property Details - Enhanced Grid */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <Home size={20} />
                </div>
                <div>
                  <h3 className={styles.sectionTitle}>{t("property_specifications")}</h3>
                  <p className={styles.sectionDescription}>{t("tell_us_about_your_property_features")}</p>
                </div>
              </div>

              {/* Compact Counters */}
              <div className={styles.compactCounters}>
                <CompactCounter label="Bedrooms" value={bed} setValue={setBed} icon={<Bed size={18} />} />
                <CompactCounter label="Partial Bed" value={pbed} setValue={setPbed} icon={<Bed size={18} />} />
                <CompactCounter label="Bathrooms" value={bath} setValue={setBath} icon={<Bath size={18} />} />
                <CompactCounter label="Garage Spaces" value={garage} setValue={setGarage} icon={<Car size={18} />} />
              </div>

              {/* Inputs Grid */}
              <div className={styles.inputGrid}>
                <EnhancedInput 
                  label="Square Footage" 
                  suffix="sqft" 
                  icon={<Ruler size={18} />}
                  value={sqft}
                  onChange={setSqft}
                />
                <EnhancedInput 
                  label="Annual Property Tax" 
                  suffix="$/year" 
                  icon={<DollarSign size={18} />}
                  value={tax}
                  onChange={setTax}
                />
              </div>

              <div className={styles.inputGrid}>
                <EnhancedInput 
                  label="Lot Width" 
                  suffix="feet" 
                  icon={<Ruler size={18} />}
                  value={lotWidth}
                  onChange={setLotWidth}
                />
                <EnhancedInput 
                  label="Lot Depth" 
                  suffix="feet" 
                  icon={<Ruler size={18} />}
                  value={lotDepth}
                  onChange={setLotDepth}
                />
              </div>

              <SelectInput />
            </div>

            {/* CTA Button */}
            {!isLoggedIn ? (
              <button className={styles.ctaButton} onClick={handleLoginClick}>
                <span>{t("log_in_to_get_your_free_estimate")}</span>
                <ArrowRight size={20} />
              </button>
            ) : (
              <button className={styles.ctaButton} onClick={handleEstimate}>
                <TrendingUp size={20} />
                <span>{t("calculate_property_value")}</span>
                <ArrowRight size={20} />
              </button>
            )}
          </div>

          {/* Right Column - Info & Benefits */}
          <div className={styles.rightColumn}>
            {/* Trust Indicators */}
            <div className={styles.trustCard}>
              <div className={styles.trustHeader}>
                <Shield size={24} className={styles.trustIcon} />
                <h3 className={styles.trustTitle}>{t("why_choose_sigma_estimate")}</h3>
              </div>
              
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <div>
                    <h4 className={styles.benefitTitle}>{t("real_time_data")}</h4>
                    <p className={styles.benefitText}>{t("updated_daily_with_latest_market_trends")}</p>
                  </div>
                </div>
                
                {/* <div className={styles.benefitItem}>
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <div>
                    <h4 className={styles.benefitTitle}>AI-Powered Analysis</h4>
                    <p className={styles.benefitText}>Advanced algorithms for precise valuations</p>
                  </div>
                </div> */}
                
                <div className={styles.benefitItem}>
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <div>
                    <h4 className={styles.benefitTitle}>{t("local_market_expertise")}</h4>
                    <p className={styles.benefitText}>{t("neighborhood_specific_insights_included")}</p>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <CheckCircle size={20} className={styles.benefitIcon} />
                  <div>
                    <h4 className={styles.benefitTitle}>{t("detailed_report")}</h4>
                    <p className={styles.benefitText}>{t("comprehensive_breakdown_and_comparables")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beta Notice - Redesigned */}
            <div className={styles.betaCard}>
              <div className={styles.betaBadge}>
                <Award size={14} />
                <span>{t("beta")}</span>
              </div>
              <p className={styles.betaText}>
                <strong>{t("early_access")}</strong>{t(
                "home_nest_valuation_is_currently_in_early_access_information_provided_is_subject_to_ongoing_updates"
              )}</p>
            </div>

            {/* Consultation Card */}
            {isLoggedIn && (
              <div className={styles.consultCard}>
                <div className={styles.consultHeader}>
                  <h3 className={styles.consultTitle}>{t("need_expert_guidance")}</h3>
                  <p className={styles.consultSubtitle}>{t("schedule_a_free_consultation_with_a_local_property_expert")}</p>
                </div>

                <div className={styles.consultForm}>
                  <input
                    className={styles.consultInput}
                    placeholder="Full Name *"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                  />

                  <input
                    className={styles.consultInput}
                    placeholder="Phone Number *"
                    value={consultPhone}
                    onChange={(e) => setConsultPhone(e.target.value)}
                  />

                  <input
                    className={styles.consultInput}
                    placeholder="Email Address *"
                    value={consultEmail}
                    onChange={(e) => setConsultEmail(e.target.value)}
                  />

                  <textarea
                    className={styles.consultTextarea}
                    placeholder="Tell us about your property needs..."
                    value={consultMessage}
                    onChange={(e) => setConsultMessage(e.target.value)}
                  />

                  <button className={styles.consultButton} onClick={handleConsultSubmit}>{t("request_free_consultation")}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ------------------- ENHANCED INPUT ------------------- */
function EnhancedInput({ label, suffix, icon, value, onChange }: InputProps) {
  const {
    t: t
  } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace("-", "").replace(/[^0-9.]/g, "");
    onChange(v || "0");
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          value={value} 
          onChange={handleChange} 
          className={styles.input}
        />
        <span className={styles.inputSuffix}>{suffix}</span>
      </div>
    </div>
  );
}

/* ------------------- SELECT INPUT ------------------- */
function SelectInput() {
  const {
    t: t
  } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const OPTIONS = ["Single Family Home", "Townhouse", "Condo", "Multi-Family", "Duplex"];

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
        <Home size={18} className={styles.inputIcon} />{t("property_type")}</label>
      <div
        className={`${styles.selectBox} ${open ? styles.selectBoxOpen : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? styles.selectTextSelected : styles.selectTextPlaceholder}>
          {selected || "Select property type"}
        </span>
        {selected && !open ? (
          <X
            size={18}
            className={styles.clearIcon}
            onClick={(e: any) => {
              e.stopPropagation();
              setSelected("");
            }}
          />
        ) : (
          <ChevronDown
            size={18}
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

/* ------------------- COMPACT COUNTER ------------------- */
function CompactCounter({ label, value, setValue, icon }: CounterProps) {
  const {
    t: t
  } = useTranslation();

  return (
    <div className={styles.compactCounter}>
      <div className={styles.compactLabel}>
        {icon && <span className={styles.compactIcon}>{icon}</span>}
        {label}
      </div>
      <div className={styles.compactBox}>
        <button 
          onClick={() => setValue(Math.max(0, value - 1))} 
          className={styles.compactBtn}
          disabled={value === 0}
        >
          <Minus size={16} />
        </button>
        <div className={styles.compactValue}>{value}</div>
        <button onClick={() => setValue(value + 1)} className={styles.compactBtn}>
          <Plus size={16} />
        </button>
      </div>
      
    </div>
  );
}