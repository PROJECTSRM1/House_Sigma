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
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Zap size={16} />
          </div>

          <h1 className={styles.heroTitle}>
            {t("homeValuationTitle")}
            <span className={styles.heroTitleAccent}>
              {t("homeValuationAccent")}
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            {t("homeValuationSubtitle")}
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>{t("accuracyRate")}</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statValue}>500K+</div>
              <div className={styles.statLabel}>{t("valuations")}</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statValue}>{t("free")}</div>
              <div className={styles.statLabel}>{t("instantValuation")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>

            {/* STEPS */}
            <div className={styles.stepIndicator}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>1</div>
                <span className={styles.stepText}>{t("propertyDetails")}</span>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>2</div>
                <span className={styles.stepText}>{t("getEstimate")}</span>
              </div>
            </div>

            {/* LOCATION */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className={styles.sectionTitle}>
                    {t("propertyLocation")}
                  </h3>
                  <p className={styles.sectionDescription}>
                    {t("propertyLocationDesc")}
                  </p>
                </div>
              </div>

              <div className={styles.addressInputWrapper}>
                <MapPin className={styles.addressIcon} size={20} />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t("addressPlaceholder")}
                  className={styles.addressInput}
                />
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrapper}>
                  <Home size={20} />
                </div>
                <div>
                  <h3 className={styles.sectionTitle}>
                    {t("propertySpecifications")}
                  </h3>
                  <p className={styles.sectionDescription}>
                    {t("propertySpecificationsDesc")}
                  </p>
                </div>
              </div>

              {/* COUNTERS — unchanged structure */}
              <div className={styles.compactCounters}>
                <CompactCounter label={t("bedrooms")} value={bed} setValue={setBed} icon={<Bed size={18} />} />
                <CompactCounter label={t("partialBedrooms")} value={pbed} setValue={setPbed} icon={<Bed size={18} />} />
                <CompactCounter label={t("bathrooms")} value={bath} setValue={setBath} icon={<Bath size={18} />} />
                <CompactCounter label={t("garageSpaces")} value={garage} setValue={setGarage} icon={<Car size={18} />} />
              </div>

              <div className={styles.inputGrid}>
                <EnhancedInput
                  label={t("squareFootage")}
                  suffix="sqft"
                  icon={<Ruler size={18} />}
                  value={sqft}
                  onChange={setSqft}
                />
                <EnhancedInput
                  label={t("annualPropertyTax")}
                  suffix="$/year"
                  icon={<DollarSign size={18} />}
                  value={tax}
                  onChange={setTax}
                />
              </div>

              <div className={styles.inputGrid}>
                <EnhancedInput
                  label={t("lotWidth")}
                  suffix="ft"
                  icon={<Ruler size={18} />}
                  value={lotWidth}
                  onChange={setLotWidth}
                />
                <EnhancedInput
                  label={t("lotDepth")}
                  suffix="ft"
                  icon={<Ruler size={18} />}
                  value={lotDepth}
                  onChange={setLotDepth}
                />
              </div>

              <SelectInput />
            </div>

            {/* CTA */}
            <button className={styles.ctaButton}>
              {t("loginToEstimate")}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT */}
          <div className={styles.rightColumn}>
            <div className={styles.trustCard}>
              <div className={styles.trustHeader}>
                <Shield size={24} />
                <h3>{t("whyChoose")}</h3>
              </div>

              <div className={styles.benefitsList}>
                <Benefit title={t("realTimeData")} text={t("realTimeDataDesc")} />
                <Benefit title={t("localMarketExpertise")} text={t("localMarketExpertiseDesc")} />
                <Benefit title={t("detailedReport")} text={t("detailedReportDesc")} />
              </div>
            </div>

            <div className={styles.betaCard}>
              <div className={styles.betaBadge}>
                <Award size={14} />
                <span>BETA</span>
              </div>
              <p>{t("betaNote")}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ===== helper components (UNCHANGED layout) ===== */

function EnhancedInput({ label, suffix, icon, value, onChange }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input value={value} onChange={(e) => onChange(e.target.value)} className={styles.input} />
        <span className={styles.inputSuffix}>{suffix}</span>
      </div>
    </div>
  );
}

function CompactCounter({ label, value, setValue, icon }: CounterProps) {
  return (
    <div className={styles.compactCounter}>
      <div className={styles.compactLabel}>
        {icon && <span className={styles.compactIcon}>{icon}</span>}
        {label}
      </div>
      <div className={styles.compactBox}>
        <button onClick={() => setValue(Math.max(0, value - 1))} className={styles.compactBtn}>
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

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.benefitItem}>
      <CheckCircle size={20} />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SelectInput() {
  const { t } = useTranslation();
  const OPTIONS = [
    t("singleFamily"),
    t("townhouse"),
    t("condo"),
    t("multiFamily"),
    t("duplex"),
  ];
  return (
    <div className={styles.selectWrapper}>
      <label className={styles.inputLabel}>
        <Home size={18} />
        {t("propertyType")}
      </label>
      <select className={styles.selectBox}>
        <option>{t("selectPropertyType")}</option>
        {OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
