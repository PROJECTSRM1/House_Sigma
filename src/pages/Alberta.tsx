import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PropertySection from '@/components/PropertySection';
import StatsChart from '@/components/StatsChart';
import AgentSection from '@/components/AgentSection';
import CityLinks from '@/components/CityLinks';
import Footer from '@/components/Footer';
import {
  exclusivePrecon,
  newlyListed,
  rentalInvestment,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelow
} from '@/data/mockData';

const Alberta = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FilterBar />
      <PropertySection title="Exclusive Precon Assignment" properties={exclusivePrecon} />
      <PropertySection title="Newly Listed" properties={newlyListed} />
      <PropertySection title="Best For Rental Investment" properties={rentalInvestment} />
      <PropertySection title="Best For Schools" properties={bestForSchools} />
      <PropertySection title="Featured Listings" properties={featuredListings} />
      <PropertySection title="High Growth" properties={highGrowth} />
      <PropertySection title="Sold Below Bought" properties={soldBelow} />
      <StatsChart />
      <AgentSection />
      <CityLinks />
      <Footer />
    </div>
  );
};

export default Alberta;
