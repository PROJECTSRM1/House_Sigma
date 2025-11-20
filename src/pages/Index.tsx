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
  exclusivePrecon,
  newlyListed,
  rentalInvestment,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelow
} from '@/data/mockData';

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";
import { useState } from 'react';

const Index = () => {

  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero backgroundImage={ontarioHero} />
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

      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </div>
  );
};

export default Index;
