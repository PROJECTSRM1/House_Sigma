import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PropertySection from "@/components/PropertySection";
import StatsChart from "@/components/StatsChart";
import Footer from "@/components/Footer";
import CityLinks from "@/components/CityLinks";
import AlbertaDisclaimer from "@/components/AlbertaDisclaimer";
import { useTranslation } from "react-i18next";

import {
  newlyAdded,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelowBought,
  highReturns,
  justSold
} from "@/data/albertaData";

const Alberta = () => {
  const { t } = useTranslation(); // ✅ ADDED

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* NAVIGATION */}
      <div className="sticky top-0 z-50 shadow-soft">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <Hero />

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <FilterBar />
      </div>

      {/* PROPERTY SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <PropertySection
          title={t("newlyAdded")}
          badge={t("freshListings")}
          properties={newlyAdded}
        />

        <PropertySection
          title={t("bestForSchools")}
          badge={t("topRatedAreas")}
          properties={bestForSchools}
        />

        <PropertySection
          title={t("featuredListings")}
          badge={t("handpicked")}
          properties={featuredListings}
        />

        <PropertySection
          title={t("highGrowthAreas")}
          badge={t("strongAppreciation")}
          properties={highGrowth}
        />

        <PropertySection
          title={t("soldBelowBought")}
          badge={t("betterDeals")}
          properties={soldBelowBought}
        />

        <PropertySection
          title={t("highReturns")}
          badge={t("investorPicks")}
          properties={highReturns}
        />

        <PropertySection
          title={t("recentlySold")}
          badge={t("justClosed")}
          properties={justSold}
        />
      </div>

      {/* MARKET CHART */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <StatsChart />
      </div>

      {/* CITY LINKS */}
      <div className="mt-20">
        <CityLinks />
      </div>

      {/* DISCLAIMER */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <AlbertaDisclaimer />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Alberta;
