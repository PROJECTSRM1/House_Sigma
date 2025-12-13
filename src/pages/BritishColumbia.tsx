import React from "react";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PropertySection from '@/components/PropertySection';
import StatsChart from './bcStatsChart';
import Footer from '@/components/Footer';
import britishHero from "/assets/Britishcolumbia_files/BC.jpg";

import {
  newlyAdded,
  bestForSchools,
  featuredListings,
  highGrowth,
  soldBelowBought,
  highReturns,
  justSold
} from '@/data/BritishColumbiaMock';

import type { Property as BCProperty } from '@/data/BritishColumbiaMock';
import type { PropertyListing as MockPropertyListing } from '@/data/mockData';

// page-local CSS (file placed next to this component)
import './BritishColumbia.css';
import CityLinks from "@/components/CityLinks";

/** Convert price string -> number (e.g. "$1,200,000" -> 1200000) */
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
const rentalInvestmentListings = newlyAdded.map(toListing);
const bestForSchoolsListings = bestForSchools.map(toListing);
const featuredListingsConverted = featuredListings.map(toListing);
const highGrowthListings = highGrowth.map(toListing);
const soldBelowListings = (soldBelowBought ?? []).map(toListing);
const highReturnsListings = (highReturns ?? []).map(toListing);
const justSoldListings = (justSold ?? []).map(toListing);

const BritishColumbia: React.FC = () => {
  return (
    <div className="min-h-screen">
     <Hero  />
     <Navbar />
       <FilterBar />
       
        
      

        <PropertySection title="Newly Listed" properties={newlyAddedListings} />
        <PropertySection title="Best For Rental Investment" properties={rentalInvestmentListings} />
        <PropertySection title="Best For Schools" properties={bestForSchoolsListings} />
        <PropertySection title="Featured Listings" properties={featuredListingsConverted} />
        <PropertySection title="High Growth" properties={highGrowthListings} />
        <PropertySection title="Sold Below Bought" properties={soldBelowListings} />
        <PropertySection title="High Returns" properties={highReturnsListings} />
        <PropertySection title="Just Sold" properties={justSoldListings} />

        {/* Stats chart */}
        <StatsChart />
        <CityLinks />

      {/* Footer placed outside the centered container so it can be wider */}
      <Footer />
    </div>
  );
};

export default BritishColumbia;