import "./MarketTrends.css";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { PriceTrendsChart } from "@/components/dashboard/PriceTrendsChart";
import { RentalDemandChart } from "@/components/dashboard/RentalDemandChart";
import { ComparisonCards } from "@/components/dashboard/ComparisonCards";
import { InvestmentHotspots } from "@/components/dashboard/InvestmentHotspots";
import { CityComparison } from "@/components/dashboard/CityComparison";
import { DataMethodologyModal } from "@/components/dashboard/DataMethodologyModal";

import { priceTrendsData, rentalDemandData } from "@/data/mockData";

type Filters = {
  city: string;
  propertyType: string;
  timeRange: string;
};

const getMonthLimit = (timeRange: string) => {
  switch (timeRange) {
    case "Last 3 Months":
      return 3;
    case "Last 6 Months":
      return 6;
    case "Last 12 Months":
      return 12;
    case "2 Years":
      return 24;
    case "3 Years":
      return 36;
    default:
      return 12;
  }
};

const MarketTrends = () => {
  const [filters, setFilters] = useState<Filters>({
    city: "All Cities",
    propertyType: "All Types",
    timeRange: "Last 12 Months",
  });

  /* ================= PRICE FILTER ================= */
const filteredPriceData = useMemo(() => {
  const monthsLimit = getMonthLimit(filters.timeRange);

  const cityData =
    filters.city === "All Cities"
      ? priceTrendsData
      : priceTrendsData.filter(
          (item) => item.city === filters.city
        );

  const sortedData = [...cityData].sort(
    (a, b) => a.monthIndex - b.monthIndex
  );

  return sortedData.slice(-monthsLimit);
}, [filters.city, filters.timeRange]);


  /* ================= RENTAL FILTER ================= */
const filteredRentalData = useMemo(() => {
  const monthsLimit = getMonthLimit(filters.timeRange);

  const cityData =
    filters.city === "All Cities"
      ? rentalDemandData
      : rentalDemandData.filter(
          (item) => item.city === filters.city
        );

  const sortedData = [...cityData].sort(
    (a, b) => a.monthIndex - b.monthIndex
  );

  return sortedData.slice(-monthsLimit);
}, [filters.city, filters.timeRange]);


  return (
    <div>
      <Navbar/>
    <div className="market-page">
      
      <div className="market-background">
        <div className="bg-glow primary" />
        <div className="bg-glow accent" />
      </div>

      <div className="market-container">
        <DashboardHeader
          city={filters.city}
          propertyType={filters.propertyType}
          timeRange={filters.timeRange}
        />

        <div className="market-filters">
          <FilterBar onFilterChange={setFilters} />
          <DataMethodologyModal />
        </div>

        <div className="market-content">
          <div className="market-row">
            <PriceTrendsChart
              data={filteredPriceData}
              propertyType={filters.propertyType}
            />

            <RentalDemandChart data={filteredRentalData} />
          </div>

          <ComparisonCards />
          <InvestmentHotspots />
          <CityComparison />
        </div>
        
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default MarketTrends;
