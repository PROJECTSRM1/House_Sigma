import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PropertySection from "@/components/PropertySection";
import StatsChart from "@/components/StatsChart";
import Footer from "@/components/Footer";
import CityLinks from "@/components/CityLinks";
import AlbertaDisclaimer from "@/components/AlbertaDisclaimer";
import albertaHero from "/assets/alberta_Files/alberta.jpg";

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
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* NAVIGATION */}
      <div className="sticky top-0 z-50 shadow-soft">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <Hero 
      />

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <FilterBar />
      </div>

      {/* PROPERTY SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <PropertySection 
          title="Newly Added Properties" 
          badge="Fresh Listings" 
          properties={newlyAdded} 
        />

        <PropertySection 
          title="Best For Schools"
          badge="Top Rated Areas"
          properties={bestForSchools} 
        />

        <PropertySection 
          title="Featured Listings"
          badge="Handpicked"
          properties={featuredListings} 
        />

        <PropertySection 
          title="High Growth Areas"
          badge="Strong Appreciation"
          properties={highGrowth} 
        />

        <PropertySection 
          title="Sold Below Bought"
          badge="Better Deals"
          properties={soldBelowBought} 
        />

        <PropertySection 
          title="High Returns"
          badge="Investor Picks"
          properties={highReturns} 
        />

        <PropertySection 
          title="Recently Sold"
          badge="Just Closed"
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
