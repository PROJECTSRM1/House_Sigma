import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PropertySection from '@/components/PropertySection';
import StatsChart from '@/components/StatsChart';
import AgentSection from '@/components/AgentSection';
import CityLinks from '@/components/CityLinks';
import Footer from '@/components/Footer';
import ontarioHero from "@/assets/hero-home.jpg";
import {
  newlyListed,
  rentalInvestment,
  featuredListings,
  soldBelow
} from '@/data/mockData';

import { useState } from 'react';

const Index = () => {

  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FilterBar />
      <PropertySection title="Newly Listed" properties={newlyListed} />
      <PropertySection title="Best For Rental Investment" properties={rentalInvestment} />
      <PropertySection title="Featured Listings" properties={featuredListings} />
      <PropertySection title="Sold" properties={soldBelow} />
      <StatsChart />
      <AgentSection />
      <CityLinks />
      <Footer />
    </div>
  );
};

export default Index;
