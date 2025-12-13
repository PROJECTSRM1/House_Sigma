import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";
import styles from "./RecommendedCommunities.module.css";

const TICK_VALUES = [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];

const PRICE_MARKS = TICK_VALUES.map((v) => {
  if (v === 0) return "$0";
  if (v >= 1000000) return `$${(v / 1000000).toFixed(1).replace(".0", "")}M`;
  return `$${v / 1000}K`;
});

const investmentOptions = ["School", "Growth", "Rental Yield", "Land"];
const propertyTypes = ["Detached", "Semi-Detached", "Townhouse", "Condo Apt"];

const cities: { [key: string]: string[] } = {
  "GTA - Central": ["Toronto", "North York", "Scarborough", "Etobicoke"],
  "GTA - North": ["Markham", "Richmond Hill", "Vaughan", "Aurora", "Newmarket"],
  "GTA - East": ["Ajax", "Clarington", "Pickering", "Whitby", "Oshawa"],
  "GTA - West": ["Brampton", "Mississauga", "Oakville", "Burlington", "Milton"],
  "Ottawa Area": ["Ottawa", "Nepean", "Kanata", "Orleans-Gloucester"],
  "Hamilton - Niagara": ["Hamilton", "Stoney Creek", "Ancaster", "St. Catharines"],
  "Central Ontario": ["Barrie", "Innisfil", "Collingwood"],
  "Southwestern Ontario": ["Guelph", "Cambridge", "Kitchener", "Waterloo"],
  "Eastern Ontario": ["Kawartha Lakes", "Peterborough", "Belleville", "Kingston"],
};

const parsePrice = (text: string) => {
  if (!text) return NaN;
  let v = text.replace(/[, ]/g, "").toLowerCase();
  if (v.startsWith("$")) v = v.slice(1);
  if (v.endsWith("k")) return Number(v.slice(0, -1)) * 1000;
  if (v.endsWith("m")) return Number(v.slice(0, -1)) * 1000000;
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : NaN;
};

const formatAdaptive = (value: number) => {
  if (!Number.isFinite(value)) return "";
  if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(".0", "")}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return String(value);
};

export default function RecommendedCommunities() {
  const [selectedInvestment, setSelectedInvestment] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(5000000);

  const [priceMinInput, setPriceMinInput] = useState<string>("0");
  const [priceMaxInput, setPriceMaxInput] = useState<string>("5M");

  const [minFocused, setMinFocused] = useState<boolean>(false);
  const [maxFocused, setMaxFocused] = useState<boolean>(false);

  const [priceError, setPriceError] = useState<string>("");
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [citySearch, setCitySearch] = useState<string>("");

  const onMinFocus = () => {
    setMinFocused(true);
    setPriceMinInput(String(priceMin));
  };

  const onMaxFocus = () => {
    setMaxFocused(true);
    setPriceMaxInput(String(priceMax));
  };

  const onMinBlur = () => {
    setMinFocused(false);
    const parsed = parsePrice(priceMinInput);
    let v = Number.isNaN(parsed) ? priceMin : parsed;
    if (v < 0) v = 0;
    if (v > 5000000) v = 5000000;
    if (v > priceMax) {
      setPriceError("Enter valid value");
      return;
    }
    setPriceError("");
    setPriceMin(v);
    setPriceMinInput(formatAdaptive(v));
  };

  const onMaxBlur = () => {
    setMaxFocused(false);
    const parsed = parsePrice(priceMaxInput);
    let v = Number.isNaN(parsed) ? priceMax : parsed;
    if (v < 0) v = 0;
    if (v > 5000000) v = 5000000;
    if (v < priceMin) {
      setPriceError("Enter valid value");
      return;
    }
    setPriceError("");
    setPriceMax(v);
    setPriceMaxInput(formatAdaptive(v));
  };

  const onMinInputChange = (txt: string) => {
    setPriceMinInput(txt);
    const parsed = parsePrice(txt);
    
    if (txt && Number.isNaN(parsed)) {
      setPriceError("Invalid price format");
      return;
    }
    
    if (!Number.isNaN(parsed)) {
      if (parsed < 0) {
        setPriceError("Price cannot be negative");
        return;
      }
      if (parsed > 5000000) {
        setPriceError("Price cannot exceed $5M");
        return;
      }
      if (parsed > priceMax) {
        setPriceError("Min price cannot exceed max price");
        return;
      }
      setPriceError("");
      setPriceMin(parsed);
    }
  };

  const onMaxInputChange = (txt: string) => {
    setPriceMaxInput(txt);
    const parsed = parsePrice(txt);
    
    if (txt && Number.isNaN(parsed)) {
      setPriceError("Invalid price format");
      return;
    }
    
    if (!Number.isNaN(parsed)) {
      if (parsed < 0) {
        setPriceError("Price cannot be negative");
        return;
      }
      if (parsed > 5000000) {
        setPriceError("Price cannot exceed $5M");
        return;
      }
      if (parsed < priceMin) {
        setPriceError("Max price cannot be less than min price");
        return;
      }
      setPriceError("");
      setPriceMax(parsed);
    }
  };

  const onMinSlider = (val: number) => {
    const newMin = Math.min(val, priceMax);
    setPriceMin(newMin);
    setPriceMinInput(minFocused ? String(newMin) : formatAdaptive(newMin));
  };

  const onMaxSlider = (val: number) => {
    const newMax = Math.max(val, priceMin);
    setPriceMax(newMax);
    setPriceMaxInput(maxFocused ? String(newMax) : formatAdaptive(newMax));
  };

  const safeMin = Math.min(priceMin, priceMax);
  const safeMax = Math.max(priceMin, priceMax);

  const leftPercent = (safeMin / 5000000) * 100;
  const rightPercent = (safeMax / 5000000) * 100;
  const widthPercent = rightPercent - leftPercent;

  const displayRange = `$${formatAdaptive(priceMin)} – $${formatAdaptive(priceMax)}`;

  const clearAll = () => {
    setSelectedInvestment([]);
    setSelectedProperty([]);
    setSelectedCities([]);
    setPriceMin(0);
    setPriceMax(5000000);
    setPriceMinInput("0");
    setPriceMaxInput("5M");
    setPriceError("");
    setCitySearch("");
  };

  // Active filters count
  const activeFiltersCount = 
    (priceMin > 0 || priceMax < 5000000 ? 1 : 0) +
    selectedInvestment.length +
    selectedProperty.length +
    selectedCities.length;

  // Filter cities based on search
  const filterCities = (cityList: string[]) => {
    if (!citySearch.trim()) return cityList;
    return cityList.filter(city => 
      city.toLowerCase().includes(citySearch.toLowerCase())
    );
  };

  return (
    <>
      <Navbar />

      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Community Recommendations</h1>

          {/* FILTER SUMMARY */}
          {activeFiltersCount > 0 && (
            <div className={styles.filterSummary}>
              <span className={styles.filterCount}>
                {activeFiltersCount} Active Filter{activeFiltersCount !== 1 ? 's' : ''}
              </span>
              <div className={styles.filterTags}>
                {(priceMin > 0 || priceMax < 5000000) && (
                  <span className={styles.filterTag}>Price: {displayRange}</span>
                )}
                {selectedInvestment.map(inv => (
                  <span key={inv} className={styles.filterTag}>{inv}</span>
                ))}
                {selectedProperty.map(prop => (
                  <span key={prop} className={styles.filterTag}>{prop}</span>
                ))}
                {selectedCities.slice(0, 3).map(city => (
                  <span key={city} className={styles.filterTag}>{city}</span>
                ))}
                {selectedCities.length > 3 && (
                  <span className={styles.filterTag}>+{selectedCities.length - 3} more</span>
                )}
              </div>
            </div>
          )}

          {/* PRICE RANGE CARD */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>💰 Price Range</h2>

            <div className={styles.priceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Min Price</label>
                <input
                  className={styles.priceInput}
                  value={minFocused ? priceMinInput : formatAdaptive(priceMin)}
                  onFocus={onMinFocus}
                  onBlur={onMinBlur}
                  onChange={(e) => onMinInputChange(e.target.value)}
                  inputMode="numeric"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Max Price</label>
                <input
                  className={styles.priceInput}
                  value={maxFocused ? priceMaxInput : formatAdaptive(priceMax)}
                  onFocus={onMaxFocus}
                  onBlur={onMaxBlur}
                  onChange={(e) => onMaxInputChange(e.target.value)}
                  inputMode="numeric"
                />
              </div>
            </div>

            {priceError && <p className={styles.errorText}>{priceError}</p>}
            
            <p className={styles.displayRange}>{displayRange}</p>

            {/* SLIDER */}
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack} />
                <div
                  className={styles.sliderFilled}
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                  }}
                />

                <input
                  type="range"
                  min={0}
                  max={5000000}
                  step={1}
                  value={priceMin}
                  onChange={(e) => onMinSlider(Number(e.target.value))}
                  className={styles.rangeInput}
                />

                <input
                  type="range"
                  min={0}
                  max={5000000}
                  step={1}
                  value={priceMax}
                  onChange={(e) => onMaxSlider(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.ticksContainer}>
                {TICK_VALUES.map((v, i) => (
                  <div
                    key={i}
                    className={styles.tickLabel}
                    style={{ left: `${(v / 5000000) * 100}%` }}
                  >
                    {PRICE_MARKS[i]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INVESTMENT REQUIREMENT CARD */}
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>📈 Investment Requirement</h2>
              <button
                className={styles.selectAllButton}
                onClick={() => {
                  const all = investmentOptions.every((opt) => selectedInvestment.includes(opt));
                  setSelectedInvestment(all ? [] : [...investmentOptions]);
                }}
              >
                {investmentOptions.every((opt) => selectedInvestment.includes(opt))
                  ? "Unselect all"
                  : "Select all"}
              </button>
            </div>

            <div className={styles.optionsGrid}>
              {investmentOptions.map((opt) => (
                <button
                  key={opt}
                  className={`${styles.optionButton} ${
                    selectedInvestment.includes(opt) ? styles.optionButtonSelected : ""
                  }`}
                  onClick={() =>
                    selectedInvestment.includes(opt)
                      ? setSelectedInvestment((prev) => prev.filter((i) => i !== opt))
                      : setSelectedInvestment((prev) => [...prev, opt])
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* PROPERTY TYPE CARD */}
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>🏠 Property Type</h2>
              <button
                className={styles.selectAllButton}
                onClick={() => {
                  const all = propertyTypes.every((opt) => selectedProperty.includes(opt));
                  setSelectedProperty(all ? [] : [...propertyTypes]);
                }}
              >
                {propertyTypes.every((t) => selectedProperty.includes(t))
                  ? "Unselect all"
                  : "Select all"}
              </button>
            </div>

            <div className={styles.optionsGrid}>
              {propertyTypes.map((opt) => (
                <button
                  key={opt}
                  className={`${styles.optionButton} ${
                    selectedProperty.includes(opt) ? styles.optionButtonSelected : ""
                  }`}
                  onClick={() =>
                    selectedProperty.includes(opt)
                      ? setSelectedProperty((prev) => prev.filter((i) => i !== opt))
                      : setSelectedProperty((prev) => [...prev, opt])
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* CITY CARD */}
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>🏙️ City</h2>
              <div className={styles.citySearchWrapper}>
                <input
                  type="text"
                  placeholder="🔍 Search city..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className={styles.citySearchInput}
                />
              </div>
            </div>

            <div className={styles.cityGroups}>
              {Object.keys(cities).map((group) => {
                const filteredCities = filterCities(cities[group]);
                if (filteredCities.length === 0) return null;

                const allSelected = filteredCities.every((c) => selectedCities.includes(c));

                return (
                  <div key={group} className={styles.cityGroup}>
                    <div className={styles.cityGroupHeader}>
                      <h3 className={styles.groupTitle}>
                        {group} <span className={styles.cityCount}>({filteredCities.length})</span>
                      </h3>
                      <button
                        className={styles.selectAllButton}
                        onClick={() => {
                          if (allSelected) {
                            setSelectedCities((prev) => prev.filter((c) => !filteredCities.includes(c)));
                          } else {
                            setSelectedCities((prev) => [...new Set([...prev, ...filteredCities])]);
                          }
                        }}
                      >
                        {allSelected ? "Unselect all" : "Select all"}
                      </button>
                    </div>

                    <div className={styles.optionsGrid}>
                      {filteredCities.map((city) => (
                        <button
                          key={city}
                          className={`${styles.optionButton} ${
                            selectedCities.includes(city) ? styles.optionButtonSelected : ""
                          }`}
                          onClick={() =>
                            selectedCities.includes(city)
                              ? setSelectedCities((prev) => prev.filter((c) => c !== city))
                              : setSelectedCities((prev) => [...prev, city])
                          }
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.disclaimer}>
              <p className={styles.disclaimerText}>
                * Good School, Value Appreciation, Rental Yield and Land Size are estimated values
                based on HouseSigma's internal algorithm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className={styles.stickyBottom}>
        <div className={styles.stickyContent}>
          <button onClick={clearAll} className={styles.clearButton}>
            Clear All
          </button>

          <button
            onClick={() => alert(`Starting recommendations with ${activeFiltersCount} filters...`)}
            className={styles.startButton}
          >
            Start Recommendation
          </button>
        </div>
      </div>

      <Footer />
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}