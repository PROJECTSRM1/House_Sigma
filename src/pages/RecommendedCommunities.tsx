import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./RecommendedCommunities.module.css";

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

      <div className="pt-[1rem] p-6 max-w-[1000px] mx-auto">
        <h2 className="text-[20px] font-semibold text-[#374751] mb-5">Community Recommendations</h2>

        {/* -------------------------------------------------------- */}
        {/* PRICE RANGE */}
        <div className="mb-5 border-b border-[#E5E7EB] pb-4">
          <h3 className="text-[20px] font-semibold text-[#374751] mb-2">Price range</h3>

          <p className="text-[18px] text-[#374751] mb-3">
            {formatPrice(priceMin)} – {formatPrice(priceMax)}
          </p>

          <div className="relative w-[960px]">
            <div className="relative h-1 mb-6">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[3px] bg-[#d9e3ea] rounded-full"></div>

              <div
                className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-[#1BA8C5] rounded-full"
                style={{
                  left: `${(priceMin / 5000000) * 100}%`,
                  width: `${((priceMax - priceMin) / 5000000) * 100}%`,
                }}
              ></div>

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

            <div className="flex justify-between text-[16px] text-[#9BA3AF]">
              {priceMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/* INVESTMENT REQUIREMENT */}
        <div className="mb-5 border-b border-[#E5E7EB] pb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[20px] font-semibold text-[#374751]">Investment Requirement</h3>

            {/* SELECT ALL / UNSELECT ALL */}
            <button
              className="text-[16px] text-[#1BA8C5] hover:underline"
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
                className="font-normal text-[16px] px-4 py-[7px]"
                variant={selectedInvestment.includes(opt) ? "default" : "outline"}
                onClick={() => toggleSelect(opt, selectedInvestment, setSelectedInvestment)}
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/* PROPERTY TYPE */}
        <div className="mb-5 border-b border-[#E5E7EB] pb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[20px] font-semibold text-[#374751]">Property Type</h3>

            <button
              className="text-[16px] text-[#1BA8C5] hover:underline"
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
                className="font-normal text-[16px] px-4 py-[7px]"
                variant={selectedProperty.includes(type) ? "default" : "outline"}
                onClick={() => toggleSelect(type, selectedProperty, setSelectedProperty)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/* CITY GROUP */}
        <div className="mb-2">
          <h3 className="text-[20px] font-semibold text-[#374751] mb-3">City</h3>

          {Object.keys(cities).map((group, index) => {
            const allSelected = cities[group].every((c) => selectedCities.includes(c));

            return (
              <div
                key={group}
                className={`${
                  index !== Object.keys(cities).length - 1
                    ? "mb-5 pb-4 border-b border-[#E5E7EB]"
                    : "mb-2 pb-2"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-[18px] font-semibold text-[#374751]">{group}</h4>

                  {/* SELECT ALL / UNSELECT ALL */}
                  <button
                    className="text-[16px] text-[#1BA8C5] hover:underline"
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
                      className="font-normal text-[16px] px-4 py-[7px]"
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

          {/* LINE ABOVE PARAGRAPH */}
          <div className="max-w-[1000px] mx-auto mb-2 mt-2">
            <div className="border-t border-[#E5E7EB] w-full"></div>
          </div>

          {/* DESCRIPTION TEXT */}
          <p className="text-[17px] text-[#6B7280] mt-2 mb-[-18px] leading-relaxed">

            * Good School, Value Appreciation, Rental field and Land Size are estimated value based
            on HouseSigma's internal algorithm. Use it as a starting point to find your perfect
            investment home.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* STICKY BOTTOM BAR */}
      <div className={styles.stickyBarWrapper}>
        <div className="max-w-[1000px] mx-auto flex justify-end gap-4 pb-4">
          <div className="border-t border-[#E5E7EB] w-full"></div>
        </div>

        <div className="max-w-[1000px] mx-auto flex justify-end gap-4 pb-4">
          <button
            onClick={clearAll}
            className="px-5 py-2 text-[17px] border-2 border-[#1BA8C5] text-[#1BA8C5] rounded-md hover:bg-[#e8f7fa]"
          >
            Clear All
          </button>

          <button
            onClick={handleStartRecommendation}
            className="px-5 py-2 text-[17px] bg-[#1BA8C5] text-white rounded-md hover:bg-[#1293ac]"
          >
            Start Recommendation
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
