import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const priceMarks = ["$0", "$450K", "$850K", "$1.8M", "$3.8M", "Max"];

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
  "Southwestern Ontario": ["Guelph", "Cambridge", "Kitchener", "Waterloo", "London", "Woodstock"],
  "Eastern Ontario": ["Kawartha Lakes", "Peterborough", "Belleville", "Kingston"],
};

const formatPrice = (value: number) => {
  if (value >= 5000000) return "Max";
  if (value === 0) return "$0";
  if (value >= 1000000)
    return `$${(value / 1000000).toFixed(1).replace(".0", "")}M`;
  return `$${(value / 1000).toFixed(0)}K`;
};

export default function CommunityRecommendations() {
  const [selectedInvestment, setSelectedInvestment] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(5000000);

  const toggleSelect = (item: string, state: string[], setState: any) => {
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

  const handleStartRecommendation = () => {
    alert(
      `Recommendations Started!\nPrice range: ${formatPrice(priceMin)} - ${formatPrice(
        priceMax
      )}\nInvestments: ${selectedInvestment.join(", ") || "None"}\nProperty Types: ${
        selectedProperty.join(", ") || "None"
      }\nCities: ${selectedCities.length} selected`
    );
  };

  return (
    <>
      <Navbar />

      <div className="pt-[4.5rem] p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#374751] mb-6">
          Community Recommendations
        </h2>

        {/* --- PRICE RANGE --- */}
        <div className="mb-8 border-b border-[#E5E7EB] pb-6">
          <h3 className="text-lg font-semibold text-[#374751] mb-3">Price range</h3>

          <p className="text-base text-[#374751] mb-4">
            {formatPrice(priceMin)} – {formatPrice(priceMax)}
          </p>

          <div className="relative w-full mb-8">
            <div className="relative h-1 mb-8">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] bg-[#d9e3ea] rounded-full"></div>

              <div
                className="absolute top-1/2 -translate-y-1/2 h-[3px] bg-[#1BA8C5] rounded-full"
                style={{
                  left: `${(priceMin / 5000000) * 100}%`,
                  width: `${((priceMax - priceMin) / 5000000) * 100}%`,
                }}
              ></div>

              {/* MIN */}
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={priceMin}
                onChange={(e) =>
                  setPriceMin(Math.min(Number(e.target.value), priceMax))
                }
                className="price-slider"
              />

              {/* MAX */}
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={priceMax}
                onChange={(e) =>
                  setPriceMax(Math.max(Number(e.target.value), priceMin))
                }
                className="price-slider"
              />
            </div>

            {/* PRICE LABELS */}
            <div className="flex justify-between text-sm text-[#9BA3AF]">
              {priceMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>

        {/* --- INVESTMENT REQUIREMENT --- */}
        <div className="mb-8 border-b border-[#E5E7EB] pb-6">
          <h3 className="text-lg font-semibold text-[#374751] mb-3">Investment Requirement</h3>

          <div className="flex flex-wrap gap-2">
            {investmentOptions.map((opt) => (
              <Button
                key={opt}
                className="font-normal"
                variant={selectedInvestment.includes(opt) ? "default" : "outline"}
                onClick={() =>
                  toggleSelect(opt, selectedInvestment, setSelectedInvestment)
                }
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* --- PROPERTY TYPE --- */}
        <div className="mb-8 border-b border-[#E5E7EB] pb-6">
          <h3 className="text-lg font-semibold text-[#374751] mb-3">Property Type</h3>

          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => (
              <Button
                key={type}
                className="font-normal"
                variant={selectedProperty.includes(type) ? "default" : "outline"}
                onClick={() =>
                  toggleSelect(type, selectedProperty, setSelectedProperty)
                }
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* --- CITIES --- */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#374751] mb-4">City</h3>

          {Object.keys(cities).map((group) => (
            <div key={group} className="mb-6 pb-4 border-b border-[#E5E7EB] last:border-b-0">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-[#374751]">{group}</h4>

                <button
                  className="text-sm text-[#1BA8C5] hover:underline"
                  onClick={() =>
                    setSelectedCities((prev) => [
                      ...new Set([...prev, ...cities[group]]),
                    ])
                  }
                >
                  Select all
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {cities[group].map((city) => (
                  <Button
                    key={city}
                    className="font-normal"
                    variant={selectedCities.includes(city) ? "default" : "outline"}
                    onClick={() =>
                      toggleSelect(city, selectedCities, setSelectedCities)
                    }
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-base text-[#6B7280] mt-2 mb-6 leading-relaxed">
          * Good School, Value Appreciation, Rental Yield and Land Size are estimated values based on
          HouseSigma’s internal algorithm.
        </p>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex justify-end gap-4">
          <button
            onClick={clearAll}
            className="px-6 py-2 border-2 border-[#1BA8C5] text-[#1BA8C5] rounded-md hover:bg-[#e8f7fa] transition font-medium"
          >
            Clear All
          </button>

          <button
            onClick={handleStartRecommendation}
            className="px-6 py-2 bg-[#1BA8C5] text-white rounded-md font-medium hover:bg-[#1293ac] transition"
          >
            Start Recommendation
          </button>
        </div>

        {/* SLIDER STYLE */}
        <style>{`
          .price-slider {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            pointer-events: none;
            height: 20px;
            position: absolute;
            width: 100%;
            top: -8px;
          }

          .price-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            background: white;
            border: 2px solid #1BA8C5;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: auto;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          .price-slider::-moz-range-thumb {
            height: 18px;
            width: 18px;
            background: white;
            border: 2px solid #1BA8C5;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: auto;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}
