import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PropertySection from "@/components/PropertySection";
import StatsChart from "@/components/StatsChart";
import Footer from "@/components/Footer";
import CityLinks from "@/components/CityLinks";
import AlbertaDisclaimer from "@/components/AlbertaDisclaimer";
import albertaHero from "@/assets/alberta_Files/alberta.jpg";

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
    <div className="min-h-screen">
      <Navbar />
       <Hero backgroundImage={albertaHero} />
      <FilterBar />
      
      <PropertySection title="Newly Added to HouseSigma" properties={newlyAdded} />
      <PropertySection title="Best For Schools" properties={bestForSchools} />
      <PropertySection title="Featured Listings" properties={featuredListings} />
      <PropertySection title="High Growth" properties={highGrowth} />
      <PropertySection title="Sold Below Bought" properties={soldBelowBought} />
      <PropertySection title="High Returns" properties={highReturns} />
      <PropertySection title="Just Sold" properties={justSold} />

      <StatsChart />
      <CityLinks />
      <AlbertaDisclaimer />
      <Footer />
    </div>
  );
};

export default Alberta;
