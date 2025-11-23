import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./RecommendedCommunities.module.css";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

/* -------------------------
   Price / Snap definitions
------------------------- */

const priceOptions = [
  { label: "$0", value: 0 },
  { label: "$200K", value: 200000 },
  { label: "$500K", value: 500000 },
  { label: "$1M", value: 1000000 },
  { label: "$1.5M", value: 1500000 },
  { label: "$3M", value: 3000000 },
  { label: "$5M+", value: 5000000 },
];

const SNAP_VALUES = [0, 200000, 500000, 1000000, 1500000, 3000000, 5000000];

const getSnapIndex = (value: number) => SNAP_VALUES.indexOf(value);

const getPercent = (value: number) => {
  const index = getSnapIndex(value);
  return (index / (SNAP_VALUES.length - 1)) * 100;
};

const priceMarks = ["$0", "$200K", "$500K", "$1M", "$1.5M", "$3M", "Max"];

/* -------------------------
   Other constants
------------------------- */

const investmentOptions = ["School", "Growth", "Rental Yield", "Land"];
const propertyTypes = ["Detached", "Semi-Detached", "Townhouse", "Condo Apt"];

const cities = {
  "GTA - Central": ["Toronto", "North York", "Scarborough", "Etobicoke"],
  "GTA - North": [
    "Markham",
    "Richmond Hill",
    "Vaughan",
    "Whitchurch-Stouffville",
    "Aurora",
    "Newmarket",
    "King",
    "Georgina",
    "East Gwillimbury",
  ],
  "GTA - East": [
    "Ajax",
    "Clarington",
    "Brock",
    "Pickering",
    "Whitby",
    "Oshawa",
    "Scugog",
    "Uxbridge",
  ],
  "GTA - West": [
    "Brampton",
    "Mississauga",
    "Oakville",
    "Burlington",
    "Milton",
    "Halton Hills",
    "Caledon",
  ],
  "Ottawa Area": [
    "Ottawa",
    "Nepean",
    "Orleans-Gloucester",
    "Kanata",
    "Cumberland",
    "Stittsville-Goulbourn",
    "West Carleton Twp",
    "Osgoode",
    "Rideau",
    "Clarance-Rockland",
    "Russell",
  ],
  "Hamilton - Niagara": [
    "Hamilton",
    "Stoney Creek",
    "Flamborough",
    "Glanbrook",
    "Ancaster",
    "Dundas",
    "Brantford",
    "St. Catharines",
    "Niagara Falls",
    "Welland",
    "Lincoln",
    "Thorold",
    "Norfolk",
    "Fort Erie",
    "Grimsby",
    "Port Colborne",
  ],
  "Central Ontario": [
    "Barrie",
    "Innisfil",
    "Bradford West Gwillimbury",
    "New Tecumseth",
    "Collingwood",
  ],
  "Southwestern Ontario": [
    "Guelph",
    "Cambridge",
    "Kitchener",
    "Waterloo",
    "London",
    "Woodstock",
  ],
  "Eastern Ontario": ["Kawartha Lakes", "Peterborough", "Belleville", "Kingston"],
};

const formatPrice = (value: number) => {
  if (value >= 5000000) return "Max";
  if (value === 0) return "$0";
  if (value >= 1000000) return `$${(value / 1000000)
    .toFixed(1)
    .replace(".0", "")}M`;
  return `$${(value / 1000).toFixed(0)}K`;
};

/* -------------------------
   Component
------------------------- */

export default function CommunityRecommendations() {
  const [selectedInvestment, setSelectedInvestment] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(5000000);
  const [openChat, setOpenChat] = useState<boolean>(false);

  const toggleSelect = (item: string, state: string[], setState: Function) => {
    if (state.includes(item))
      setState(state.filter((i) => i !== item));
    else setState([...state, item]);
  };

  const clearAll = () => {
    setSelectedInvestment([]);
    setSelectedProperty([]);
    setSelectedCities([]);
    setPriceMin(0);
    setPriceMax(5000000);
  };

  return (
    <>
      <Navbar />

      <div className="pt-6 px-4 md:px-6 max-w-[1000px] mx-auto">
        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#374751] mb-5 mt-[45px]">
          Community Recommendations
        </h4>

        {/* PRICE RANGE SECTION */}
        <div className="mb-6 pb-4 border-b border-gray-300">

          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751]">
            Price Range
          </h3>

          {/* --- Flipkart-style Min/Max Row --- */}
          <div className={styles.priceDropdownRow}>
            <div className="flex flex-col">
              <label className={styles.inputLabel}>Min</label>
              <select
                className={styles.priceSelect}
                value={priceMin}
                onChange={(e) => {
                  const newVal = Number(e.target.value);
                  setPriceMin(Math.min(newVal, priceMax));
                }}
              >
                {priceOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className={styles.inputLabel}>Max</label>
              <select
                className={styles.priceSelect}
                value={priceMax}
                onChange={(e) => {
                  const newVal = Number(e.target.value);
                  setPriceMax(Math.max(newVal, priceMin));
                }}
              >
                {priceOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Price Text */}
          <p className={`${styles.priceSelectedText} text-[16px] md:text-[18px] text-[#374751]`}>
            {formatPrice(priceMin)} – {formatPrice(priceMax)}
          </p>

          {/* Slider */}
          <div className="relative w-full">
            <div className="relative h-1 mb-6">
              <div className={styles.sliderTrack} />

              <div
                className={styles.sliderFilled}
                style={{
                  left: `${getPercent(priceMin)}%`,
                  width: `${getPercent(priceMax) - getPercent(priceMin)}%`,
                }}
              />

              <input
                type="range"
                min={0}
                max={SNAP_VALUES.length - 1}
                step={1}
                value={getSnapIndex(priceMin)}
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  setPriceMin(Math.min(SNAP_VALUES[idx], priceMax));
                }}
                className={styles.priceSlider}
              />

              <input
                type="range"
                min={0}
                max={SNAP_VALUES.length - 1}
                step={1}
                value={getSnapIndex(priceMax)}
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  setPriceMax(Math.max(SNAP_VALUES[idx], priceMin));
                }}
                className={styles.priceSlider}
              />
            </div>

            <div className="flex justify-between text-[12px] md:text-[15px] text-gray-400">
              {priceMarks.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Rest Sections Unchanged --- */}

        {/* INVESTMENT */}
        <div className="mb-6 pb-4 border-b border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751]">
              Investment Requirement
            </h3>

            <button
              className="text-[14px] md:text-[16px] text-[#1BA8C5] hover:underline"
              onClick={() => {
                const all = investmentOptions.every((opt) =>
                  selectedInvestment.includes(opt)
                );
                setSelectedInvestment(all ? [] : [...investmentOptions]);
              }}
            >
              {investmentOptions.every((opt) =>
                selectedInvestment.includes(opt)
              )
                ? "Unselect all"
                : "Select all"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {investmentOptions.map((opt) => (
              <Button
                key={opt}
                className="font-normal text-[14px] md:text-[16px] px-3 md:px-4 py-[6px]"
                variant={
                  selectedInvestment.includes(opt)
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  toggleSelect(opt, selectedInvestment, setSelectedInvestment)
                }
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* PROPERTY TYPE */}
        <div className="mb-6 pb-4 border-b border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751]">
              Property Type
            </h3>

            <button
              className="text-[14px] md:text-[16px] text-[#1BA8C5] hover:underline"
              onClick={() => {
                const all = propertyTypes.every((opt) =>
                  selectedProperty.includes(opt)
                );
                setSelectedProperty(all ? [] : [...propertyTypes]);
              }}
            >
              {propertyTypes.every((t) =>
                selectedProperty.includes(t)
              )
                ? "Unselect all"
                : "Select all"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((opt) => (
              <Button
                key={opt}
                className="font-normal text-[14px] md:text-[16px] px-3 md:px-4 py-[6px]"
                variant={
                  selectedProperty.includes(opt) ? "default" : "outline"
                }
                onClick={() =>
                  toggleSelect(opt, selectedProperty, setSelectedProperty)
                }
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* CITY */}
        <div className="mb-6">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751] mb-3">
            City
          </h3>

          {Object.keys(cities).map((group, i) => {
            const allSelected = cities[group].every((c) =>
              selectedCities.includes(c)
            );

            return (
              <div
                key={group}
                className={
                  i !== Object.keys(cities).length - 1
                    ? "mb-5 pb-4 border-b border-gray-300"
                    : "pb-2"
                }
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-[#374751]">
                    {group}
                  </h4>

                  <button
                    className="text-[14px] md:text-[16px] text-[#1BA8C5] hover:underline"
                    onClick={() => {
                      if (allSelected) {
                        setSelectedCities((prev) =>
                          prev.filter(
                            (c) => !cities[group].includes(c)
                          )
                        );
                      } else {
                        setSelectedCities((prev) => [
                          ...new Set([...prev, ...cities[group]]),
                        ]);
                      }
                    }}
                  >
                    {allSelected ? "Unselect all" : "Select all"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cities[group].map((city) => (
                    <Button
                      key={city}
                      className="font-normal text-[14px] md:text-[16px] px-3 md:px-4 py-[6px]"
                      variant={
                        selectedCities.includes(city)
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        toggleSelect(city, selectedCities, setSelectedCities)
                      }
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-4 max-w-[1000px] mx-auto">
            <div className="w-full border-t border-gray-300 mb-3"></div>

            <p className="text-[16px] md:text-[18px] text-gray-500 leading-relaxed">
              * Good School, Value Appreciation, Rental Yield and Land
              Size are estimated values based on HouseSigma's internal
              algorithm.
            </p>

            <div className="w-full border-t border-gray-300 mt-3"></div>
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className={styles.stickyBarWrapper}>
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-end gap-3 pb-4">
          <button className={styles.clearButton} onClick={clearAll}>
            Clear All
          </button>

          <button
            className={styles.recommendButton}
            onClick={() =>
              alert(
                `Recommendations Started!\nPrice Range: ${formatPrice(
                  priceMin
                )} – ${formatPrice(priceMax)}`
              )
            }
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
