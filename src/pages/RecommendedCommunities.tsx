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

  const activeFiltersCount = 
    (priceMin > 0 || priceMax < 5000000 ? 1 : 0) +
    selectedInvestment.length +
    selectedProperty.length +
    selectedCities.length;

  const filterCities = (cityList: string[]) => {
    if (!citySearch.trim()) return cityList;
    return cityList.filter(city => 
      city.toLowerCase().includes(citySearch.toLowerCase())
    );
  };

  return (
    <>
      <Navbar />

      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Community Finder</span>
            </div>
            <h1 className={styles.heroTitle}>Find Your Perfect Community</h1>
            <p className={styles.heroSubtitle}>
              Discover the best neighborhoods that match your lifestyle and investment goals
            </p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {/* Active Filters Summary */}
          {activeFiltersCount > 0 && (
            <div className={styles.filterSummaryCard}>
              <div className={styles.summaryHeader}>
                <div className={styles.summaryBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                  </svg>
                  <span>{activeFiltersCount} Active Filter{activeFiltersCount !== 1 ? 's' : ''}</span>
                </div>
                <button onClick={clearAll} className={styles.clearAllLink}>
                  Clear all
                </button>
              </div>
              <div className={styles.filterTagsContainer}>
                {(priceMin > 0 || priceMax < 5000000) && (
                  <span className={styles.filterTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    {displayRange}
                  </span>
                )}
                {selectedInvestment.map(inv => (
                  <span key={inv} className={styles.filterTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    {inv}
                  </span>
                ))}
                {selectedProperty.map(prop => (
                  <span key={prop} className={styles.filterTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    {prop}
                  </span>
                ))}
                {selectedCities.slice(0, 3).map(city => (
                  <span key={city} className={styles.filterTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {city}
                  </span>
                ))}
                {selectedCities.length > 3 && (
                  <span className={styles.filterTagMore}>+{selectedCities.length - 3} more cities</span>
                )}
              </div>
            </div>
          )}

          {/* Main Grid Layout */}
          <div className={styles.mainGrid}>
            {/* Left Column - Filters */}
            <div className={styles.filtersColumn}>
              {/* Price Range Card */}
              <div className={styles.filterCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <svg className={styles.cardIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <h3>Price Range</h3>
                  </div>
                </div>

                <div className={styles.priceInputsRow}>
                  <div className={styles.priceInputWrapper}>
                    <label className={styles.priceLabel}>Min Price</label>
                    <div className={styles.priceInputBox}>
                      <span className={styles.priceCurrency}>$</span>
                      <input
                        className={styles.priceInput}
                        value={minFocused ? priceMinInput : formatAdaptive(priceMin)}
                        onFocus={onMinFocus}
                        onBlur={onMinBlur}
                        onChange={(e) => onMinInputChange(e.target.value)}
                        inputMode="numeric"
                      />
                    </div>
                  </div>

                  <div className={styles.priceInputWrapper}>
                    <label className={styles.priceLabel}>Max Price</label>
                    <div className={styles.priceInputBox}>
                      <span className={styles.priceCurrency}>$</span>
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
                </div>

                {priceError && <p className={styles.errorMessage}>{priceError}</p>}

                <div className={styles.rangeDisplay}>{displayRange}</div>

                {/* Slider */}
                <div className={styles.sliderSection}>
                  <div className={styles.sliderBox}>
                    <div className={styles.sliderTrack} />
                    <div
                      className={styles.sliderRange}
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
                      className={styles.sliderInput}
                    />

                    <input
                      type="range"
                      min={0}
                      max={5000000}
                      step={1}
                      value={priceMax}
                      onChange={(e) => onMaxSlider(Number(e.target.value))}
                      className={styles.sliderInput}
                    />
                  </div>

                  <div className={styles.sliderMarks}>
                    {TICK_VALUES.map((v, i) => (
                      <div
                        key={i}
                        className={styles.sliderMark}
                        style={{ left: `${(v / 5000000) * 100}%` }}
                      >
                        {PRICE_MARKS[i]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Investment Requirement Card */}
              <div className={styles.filterCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <svg className={styles.cardIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <h3>Investment Requirement</h3>
                  </div>
                  <button
                    className={styles.selectAllBtn}
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
                      className={`${styles.optionChip} ${
                        selectedInvestment.includes(opt) ? styles.optionChipActive : ""
                      }`}
                      onClick={() =>
                        selectedInvestment.includes(opt)
                          ? setSelectedInvestment((prev) => prev.filter((i) => i !== opt))
                          : setSelectedInvestment((prev) => [...prev, opt])
                      }
                    >
                      {selectedInvestment.includes(opt) && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type Card */}
              <div className={styles.filterCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <svg className={styles.cardIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <h3>Property Type</h3>
                  </div>
                  <button
                    className={styles.selectAllBtn}
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
                      className={`${styles.optionChip} ${
                        selectedProperty.includes(opt) ? styles.optionChipActive : ""
                      }`}
                      onClick={() =>
                        selectedProperty.includes(opt)
                          ? setSelectedProperty((prev) => prev.filter((i) => i !== opt))
                          : setSelectedProperty((prev) => [...prev, opt])
                      }
                    >
                      {selectedProperty.includes(opt) && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Cities */}
            <div className={styles.citiesColumn}>
              <div className={styles.filterCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>
                    <svg className={styles.cardIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <h3>Select Cities</h3>
                  </div>
                </div>

                <div className={styles.citySearchBox}>
                  <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search cities..."
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    className={styles.citySearchInput}
                  />
                </div>

                <div className={styles.cityGroupsContainer}>
                  {Object.keys(cities).map((group) => {
                    const filteredCities = filterCities(cities[group]);
                    if (filteredCities.length === 0) return null;

                    const allSelected = filteredCities.every((c) => selectedCities.includes(c));

                    return (
                      <div key={group} className={styles.cityGroupCard}>
                        <div className={styles.cityGroupHeader}>
                          <h4 className={styles.cityGroupTitle}>
                            {group}
                            <span className={styles.cityCount}>({filteredCities.length})</span>
                          </h4>
                          <button
                            className={styles.selectAllBtn}
                            onClick={() => {
                              if (allSelected) {
                                setSelectedCities((prev) => prev.filter((c) => !filteredCities.includes(c)));
                              } else {
                                setSelectedCities((prev) => [...new Set([...prev, ...filteredCities])]);
                              }
                            }}
                          >
                            {allSelected ? "Unselect" : "Select all"}
                          </button>
                        </div>

                        <div className={styles.cityChipsGrid}>
                          {filteredCities.map((city) => (
                            <button
                              key={city}
                              className={`${styles.cityChip} ${
                                selectedCities.includes(city) ? styles.cityChipActive : ""
                              }`}
                              onClick={() =>
                                selectedCities.includes(city)
                                  ? setSelectedCities((prev) => prev.filter((c) => c !== city))
                                  : setSelectedCities((prev) => [...prev, city])
                              }
                            >
                              {selectedCities.includes(city) && (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              )}
                              <span>{city}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={styles.disclaimerBox}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  <p className={styles.disclaimerText}>
                    Good School, Value Appreciation, Rental Yield and Land Size are estimated values
                    based on HouseSigma's internal algorithm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className={styles.actionBar}>
        <div className={styles.actionBarContent}>
          <div className={styles.actionBarLeft}>
            <span className={styles.filterCountBadge}>
              {activeFiltersCount} {activeFiltersCount === 1 ? 'Filter' : 'Filters'}
            </span>
          </div>
          <div className={styles.actionBarRight}>
            <button onClick={clearAll} className={styles.clearButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Clear All
            </button>

            <button
              onClick={() => alert(`Finding communities with ${activeFiltersCount} filters...`)}
              className={styles.findButton}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Find Communities
            </button>
          </div>
        </div>
      </div>

      <Footer />
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}