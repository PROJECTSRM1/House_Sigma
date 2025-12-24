import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PropertySection from "@/components/PropertySection";
import StatsChart from "@/components/StatsChart";
import AgentSection from "@/components/AgentSection";
import CityLinks from "@/components/CityLinks";
import Footer from "@/components/Footer";

import {
  exclusivePrecon,
  newlyListed,
  rentalInvestment,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelow
} from "@/data/mockData";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

const Index = () => {
  const { t } = useTranslation(); // ✅ ADDED
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FilterBar />

      {/* ✅ TRANSLATED SECTION TITLES */}
      <PropertySection
        title={t("exclusivePreconAssignment")}
        properties={exclusivePrecon}
      />

      <PropertySection
        title={t("newlyListed")}
        properties={newlyListed}
      />

      <PropertySection
        title={t("bestForRentalInvestment")}
        properties={rentalInvestment}
      />

      <PropertySection
        title={t("bestForSchools")}
        properties={bestForSchools}
      />

      <PropertySection
        title={t("featuredListings")}
        properties={featuredListings}
      />

      <PropertySection
        title={t("highGrowth")}
        properties={highGrowth}
      />

      <PropertySection
        title={t("soldBelowBought")}
        properties={soldBelow}
      />

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
