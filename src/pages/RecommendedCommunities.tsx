import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";


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

const formatPriceShort = (value: number) => {
  if (value >= 5000000) return "Max";
  if (value === 0) return "$0";
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1).replace(".0", "")}M`;
  return `$${Math.round(value / 1000)}K`;
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

  const displayRange = `${formatAdaptive(priceMin)} – ${formatAdaptive(priceMax)}`;

  const clearAll = () => {
    setSelectedInvestment([]);
    setSelectedProperty([]);
    setSelectedCities([]);
    setPriceMin(0);
    setPriceMax(5000000);
    setPriceMinInput("0");
    setPriceMaxInput("5M");
    setPriceError("");
  };

  function formatPrice(priceMax: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />

      <div className="pt-6 px-4 md:px-6 max-w-[1000px] mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8 mt-11">
          Community Recommendations
        </h1>

        {/* PRICE RANGE */}
        <div className="mb-6 pb-6 border-b border-border">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Price Range
          </h2>

          <div className="flex gap-4 mb-5">
            <div className="flex flex-col">
              <label className="text-sm text-muted-foreground mb-1">Min Price</label>
              <input
                className="w-40 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                value={minFocused ? priceMinInput : formatAdaptive(priceMin)}
                onFocus={onMinFocus}
                onBlur={onMinBlur}
                onChange={(e) => onMinInputChange(e.target.value)}
                inputMode="numeric"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-muted-foreground mb-1">Max Price</label>
              <input
                className="w-40 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                value={maxFocused ? priceMaxInput : formatAdaptive(priceMax)}
                onFocus={onMaxFocus}
                onBlur={onMaxBlur}
                onChange={(e) => onMaxInputChange(e.target.value)}
                inputMode="numeric"
              />
            </div>
          </div>

          {priceError && <p className="text-sm text-destructive mb-2">{priceError}</p>}
          
          <p className="text-base font-medium text-foreground mb-4">{displayRange}</p>

          {/* SLIDER */}
          <div className="relative w-full">
            <div className="relative h-10 mb-4">
              {/* Track */}
              <div className="absolute top-1/2 left-2 right-2 h-1.5 bg-slate-200 rounded-full -translate-y-1/2 z-[1]" />

              {/* Filled */}
              <div
className="absolute top-1/2 h-1.5 bg-[#1BA8C5] rounded-full -translate-y-1/2 z-[2] pointer-events-none"
                style={{
                  left: `${leftPercent}%`,
width: `${widthPercent}%`,

                }}
              />

              {/* Min Slider */}
              <input
                type="range"
                min={0}
                max={5000000}
                step={1}
                value={priceMin}
                onChange={(e) => onMinSlider(Number(e.target.value))}
className="
  absolute w-full h-full appearance-none bg-transparent pointer-events-none z-[5]
  [&::-webkit-slider-thumb]:appearance-none 
  [&::-webkit-slider-thumb]:h-4 
  [&::-webkit-slider-thumb]:w-4 
  [&::-webkit-slider-thumb]:rounded-full 
  [&::-webkit-slider-thumb]:bg-white 
  [&::-webkit-slider-thumb]:border-2 
  [&::-webkit-slider-thumb]:border-[#1BA8C5] 
  [&::-webkit-slider-thumb]:cursor-pointer 
  [&::-webkit-slider-thumb]:pointer-events-auto 
  [&::-webkit-slider-thumb]:shadow-md

  [&::-moz-range-thumb]:h-4 
  [&::-moz-range-thumb]:w-4 
  [&::-moz-range-thumb]:rounded-full 
  [&::-moz-range-thumb]:bg-white 
  [&::-moz-range-thumb]:border-2 
  [&::-moz-range-thumb]:border-[#1BA8C5] 
  [&::-moz-range-thumb]:cursor-pointer 
  [&::-moz-range-thumb]:pointer-events-auto 
  [&::-moz-range-thumb]:shadow-md
"

              />

              {/* Max Slider */}
              <input
                type="range"
                min={0}
                max={5000000}
                step={1}
                value={priceMax}
                onChange={(e) => onMaxSlider(Number(e.target.value))}
                className="absolute w-full h-full appearance-none bg-transparent pointer-events-none z-[4] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-background [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:shadow-md"
              />
            </div>

            <div className="relative w-full h-5">
              {TICK_VALUES.map((v, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 text-xs text-slate-400 whitespace-nowrap -translate-x-1/2"
                  style={{ left: `${(v / 5000000) * 100}%` }}
                >
                  {PRICE_MARKS[i]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INVESTMENT REQUIREMENT */}
        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Investment Requirement
            </h2>
            <button
              className="text-sm md:text-base text-[#1BA8C5] hover:underline"

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

          <div className="flex flex-wrap gap-2">
            {investmentOptions.map((opt) => (
              <Button
                key={opt}
                variant={selectedInvestment.includes(opt) ? "default" : "outline"}
                onClick={() =>
                  selectedInvestment.includes(opt)
                    ? setSelectedInvestment((prev) => prev.filter((i) => i !== opt))
                    : setSelectedInvestment((prev) => [...prev, opt])
                }
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* PROPERTY TYPE */}
        <div className="mb-6 pb-6 border-b border-border">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Property Type
            </h2>
            <button
             className="text-sm md:text-base text-[#1BA8C5] hover:underline"

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

          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((opt) => (
              <Button
                key={opt}
                variant={selectedProperty.includes(opt) ? "default" : "outline"}
                onClick={() =>
                  selectedProperty.includes(opt)
                    ? setSelectedProperty((prev) => prev.filter((i) => i !== opt))
                    : setSelectedProperty((prev) => [...prev, opt])
                }
              >
                {opt}
              </Button>
            ))}
          </div>
        </div>

        {/* CITY */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            City
          </h2>

          {Object.keys(cities).map((group, idx) => {
            const allSelected = cities[group].every((c) => selectedCities.includes(c));

            return (
              <div
                key={group}
                className={idx !== Object.keys(cities).length - 1 ? "mb-5 pb-5 border-b border-border" : "pb-2"}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {group}
                  </h3>
                  <button
                    className="text-sm md:text-base text-primary hover:underline"
                    onClick={() => {
                      if (allSelected) {
                        setSelectedCities((prev) => prev.filter((c) => !cities[group].includes(c)));
                      } else {
                        setSelectedCities((prev) => [...new Set([...prev, ...cities[group]])]);
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
                      variant={selectedCities.includes(city) ? "default" : "outline"}
                      onClick={() =>
                        selectedCities.includes(city)
                          ? setSelectedCities((prev) => prev.filter((c) => c !== city))
                          : setSelectedCities((prev) => [...prev, city])
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

            <p className="text-[18px] md:text-[18px] text-gray-500 leading-relaxed">
              * Good School, Value Appreciation, Rental Yield and Land
              Size are estimated values based on HouseSigma's internal
              algorithm.
            </p>

    <div className="w-full border-t border-gray-300 mb-3"></div>
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      {/* STICKY BOTTOM BAR */}
<div className="sticky bottom-0 bg-white z-40 py-4 px-4">

<div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-end gap-2 pb-0">


    <button
  onClick={clearAll}
  className="px-4 py-2 text-lg border-2 border-[#1BA8C5] text-[#1BA8C5] rounded-lg hover:bg-[#1BA8C5]/10"
>
  Clear All
</button>

<button
  onClick={() => alert(`Recommendations Started!`)}
  className="px-4 py-2 text-lg bg-[#1BA8C5] text-white rounded-lg hover:bg-[#1BA8C5]/90"
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
