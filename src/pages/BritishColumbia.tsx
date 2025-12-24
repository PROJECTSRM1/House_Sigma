import React from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PropertySection from '@/components/PropertySection';
import StatsChart from './bcStatsChart';
import Footer from '@/components/Footer';
import CityLinks from "@/components/CityLinks";
import { useTranslation } from "react-i18next";

import {
  newlyAdded,
  bestForRentalInvestment,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelowBought,
  highReturns,
  justSold
} from '@/data/BritishColumbiaMock';

import type { Property as BCProperty } from '@/data/BritishColumbiaMock';
import type { PropertyListing as MockPropertyListing } from '@/data/mockData';

import './BritishColumbia.css';

/** Convert price string -> number */
const parsePriceToNumber = (p?: string | number): number => {
  if (p === undefined || p === null) return 0;
  if (typeof p === 'number') return p;
  const digits = String(p).replace(/[^\d.]/g, '');
  const n = Number(digits);
  return Number.isFinite(n) ? n : 0;
};

const normalizeDate = (soldDate?: string, listed?: string): string => {
  if (soldDate) return soldDate;
  return listed ?? '';
};

const toListing = (p: BCProperty): MockPropertyListing => ({
  id: String(p.id),
  image: p.image ?? '',
  price: parsePriceToNumber(p.price),
  address: p.address ?? '',
  location: p.location ?? '',
  type: p.type ?? '',
  beds: typeof p.bedrooms === 'number' ? p.bedrooms : 0,
  baths: typeof p.bathrooms === 'number' ? p.bathrooms : 0,
  parking: typeof p.parking === 'number' ? p.parking : 0,
  status: p.status ?? '',
  badge: p.badge ?? undefined,
  date: normalizeDate(p.soldDate, p.listed),
  agent: p.agent ?? '',
  loginRequired: p.loginRequired ?? false
} as MockPropertyListing);

const newlyAddedListings = newlyAdded.map(toListing);
const rentalInvestmentListings = bestForRentalInvestment.map(toListing);
const bestForSchoolsListings = bestForSchools.map(toListing);
const featuredListingsConverted = featuredListings.map(toListing);
const highGrowthListings = highGrowth.map(toListing);
const soldBelowListings = (soldBelowBought ?? []).map(toListing);
const highReturnsListings = (highReturns ?? []).map(toListing);
const justSoldListings = (justSold ?? []).map(toListing);

const BritishColumbia: React.FC = () => {
  const { t } = useTranslation(); // ✅ ADDED

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FilterBar />

      <PropertySection
        title={t("newlyListed")}
        properties={newlyAddedListings}
      />

      <PropertySection
        title={t("bestForRentalInvestment")}
        properties={rentalInvestmentListings}
      />

      <PropertySection
        title={t("bestForSchools")}
        properties={bestForSchoolsListings}
      />

      <PropertySection
        title={t("featuredListings")}
        properties={featuredListingsConverted}
      />

      <PropertySection
        title={t("highGrowth")}
        properties={highGrowthListings}
      />

      <PropertySection
        title={t("soldBelowBought")}
        properties={soldBelowListings}
      />

      <PropertySection
        title={t("highReturns")}
        properties={highReturnsListings}
      />

      <PropertySection
        title={t("justSold")}
        properties={justSoldListings}
      />

      {/* Stats chart */}
      <StatsChart />

      <CityLinks />

      <Footer />
    </div>
  );
};

export default BritishColumbia;
