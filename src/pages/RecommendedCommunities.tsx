import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./RecommendedCommunities.module.css";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

const priceMarks = ["$0", "$450K", "$850K", "$1.8M", "$3.8M", "Max"];

const investmentOptions = ["School", "Growth", "Rental Yield", "Land"];
const propertyTypes = ["Detached", "Semi-Detached", "Townhouse", "Condo Apt"];

const cities = {
  "GTA - Central": ["Toronto", "North York", "Scarborough", "Etobicoke"],
  "GTA - North": [
    "Markham","Richmond Hill","Vaughan","Whitchurch-Stouffville",
    "Aurora","Newmarket","King","Georgina","East Gwillimbury"
  ],
  "GTA - East": ["Ajax","Clarington","Brock","Pickering","Whitby","Oshawa","Scugog","Uxbridge"],
  "GTA - West": ["Brampton","Mississauga","Oakville","Burlington","Milton","Halton Hills","Caledon"],
  "Ottawa Area": [
    "Ottawa","Nepean","Orleans-Gloucester","Kanata","Cumberland","Stittsville-Goulbourn",
    "West Carleton Twp","Osgoode","Rideau","Clarance-Rockland","Russell"
  ],
  "Hamilton - Niagara": [
    "Hamilton","Stoney Creek","Flamborough","Glanbrook","Ancaster","Dundas","Brantford",
    "St. Catharines","Niagara Falls","Welland","Lincoln","Thorold","Norfolk","Fort Erie",
    "Grimsby","Port Colborne"
  ],
  "Central Ontario": ["Barrie","Innisfil","Bradford West Gwillimbury","New Tecumseth","Collingwood"],
  "Southwestern Ontario": ["Guelph","Cambridge","Kitchener","Waterloo","London","Woodstock"],
  "Eastern Ontario": ["Kawartha Lakes","Peterborough","Belleville","Kingston"],
};

const formatPrice = (value) => {
  if (value >= 5000000) return "Max";
  if (value === 0) return "$0";
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1).replace(".0", "")}M`;
  return `$${(value / 1000).toFixed(0)}K`;
};

export default function CommunityRecommendations() {
  const [selectedInvestment, setSelectedInvestment] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(5000000);

  const toggleSelect = (item, state, setState) => {
    if (state.includes(item)) setState(state.filter((i) => i !== item));
    else setState([...state, item]);
  };

  const [openChat, setOpenChat] = useState(false);

  const clearAll = () => {
    setSelectedInvestment([]);
    setSelectedProperty([]);
    setSelectedCities([]);
    setPriceMin(0);
    setPriceMax(5000000);
  };

  const handleStartRecommendation = () => {
    alert(`Recommendations Started!\nPrice range: ${formatPrice(priceMin)} - ${formatPrice(priceMax)}`);
  };

  return (
    <>
      <Navbar />

      {/* PAGE CONTAINER RESPONSIVE */}
      <div className="pt-6 px-4 md:px-6 max-w-[1000px] mx-auto">
        <h4 className="text-[18px] md:text-[24px] font-semibold text-[#374751] mb-5 mt-[45px]">
          Community Recommendations
        </h4>
        {/* ========================================== */}
        {/* PRICE RANGE */}
        <div className="mb-6 pb-4 border-b border-gray-300">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751] mb-2">
            Price Range
          </h3>

          <p className="text-[16px] md:text-[18px] mb-2 text-[#374751]">
            {formatPrice(priceMin)} – {formatPrice(priceMax)}
          </p>

          {/* SLIDER CONTAINER RESPONSIVE */}
          <div className="relative w-full">
            <div className="relative h-1 mb-6">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[3px] bg-[#d9e3ea]" />

              <div
                className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-[#1BA8C5] rounded-full"
                style={{
                  left: `${(priceMin / 5000000) * 100}%`,
                  width: `${((priceMax - priceMin) / 5000000) * 100}%`,
                }}
              />

              {/* Range Sliders */}
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={priceMin}
                onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax))}
                className={styles.priceSlider}
              />
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={priceMax}
                onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin))}
                className={styles.priceSlider}
              />
            </div>

            {/* PRICE LABELS RESPONSIVE */}
            <div className="flex justify-between text-[12px] md:text-[15px] text-gray-400">
              {priceMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* INVESTMENT REQUIREMENT */}
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
              {investmentOptions.every((opt) => selectedInvestment.includes(opt))
                ? "Unselect all"
                : "Select all"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {investmentOptions.map((opt) => (
              <Button
                key={opt}
                className="font-normal text-[14px] md:text-[16px] px-3 md:px-4 py-[6px]"
                variant={selectedInvestment.includes(opt) ? "default" : "outline"}
                onClick={() => toggleSelect(opt, selectedInvestment, setSelectedInvestment)}
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* PROPERTY TYPE */}
        <div className="mb-6 pb-4 border-b border-gray-300">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751]">
              Property Type
            </h3>

            <button
              className="text-[14px] md:text-[16px] text-[#1BA8C5] hover:underline"
              onClick={() => {
                const all = propertyTypes.every((t) => selectedProperty.includes(t));
                setSelectedProperty(all ? [] : [...propertyTypes]);
              }}
            >
              {propertyTypes.every((t) => selectedProperty.includes(t))
                ? "Unselect all"
                : "Select all"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <Button
                key={type}
                className="font-normal text-[14px] md:text-[16px] px-3 md:px-4 py-[6px]"
                variant={selectedProperty.includes(type) ? "default" : "outline"}
                onClick={() => toggleSelect(type, selectedProperty, setSelectedProperty)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* CITY GROUPS RESPONSIVE */}
        <div className="mb-6">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#374751] mb-3">
            City
          </h3>

          {Object.keys(cities).map((group, index) => {
            const allSelected = cities[group].every((c) => selectedCities.includes(c));

            return (
              <div
                key={group}
                className={`${index !== Object.keys(cities).length - 1
                  ? "mb-5 pb-4 border-b border-gray-300"
                  : "pb-2"}`}
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
                          prev.filter((c) => !cities[group].includes(c))
                        );
                      } else {
                        setSelectedCities((prev) => [
                          ...new Set([...prev, ...cities[group]])
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
                      variant={selectedCities.includes(city) ? "default" : "outline"}
                      onClick={() => toggleSelect(city, selectedCities, setSelectedCities)}
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
    * Good School, Value Appreciation, Rental Yield and Land Size are estimated value based on
    HouseSigma's internal algorithm. Use it as a starting point to find your perfect investment home.
  </p>

  <div className="w-full border-t border-gray-300 mt-3"></div>
</div>


        </div>
      </div>

      {/* =================================================== */}
      {/* STICKY BOTTOM BAR (RESPONSIVE) */}
      <div className={`${styles.stickyBarWrapper} px-4`}>
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-end gap-3 pb-4">

          <button
            onClick={clearAll}
            className="px-4 sm:px-5 py-2 text-[15px] md:text-[17px] border-2 border-[#1BA8C5] text-[#1BA8C5] rounded-md hover:bg-[#e8f7fa] w-full sm:w-auto"
          >
            Clear All
          </button>

          <button
            onClick={handleStartRecommendation}
            className="px-4 sm:px-5 py-2 text-[15px] md:text-[17px] bg-[#1BA8C5] text-white rounded-md hover:bg-[#1293ac] w-full sm:w-auto"
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
