import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { AuthProvider } from "./context/AuthContext";

import Index from "./pages/Index";
import Alberta from "./pages/Alberta";
import BritishColumbia from "./pages/BritishColumbia";
import NotFound from "./pages/NotFound";

import MapSearch from "./pages/MapSearch";
import MarketTrends from "./pages/MarketTrends";
import HomeValuation from "./pages/HomeValuation";
import Agents from "./pages/Agents";

import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendedCommunities";
import ContactUs from "./pages/ContactUs"; // ✅ ONLY CONTACT PAGE

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/province/on" element={<Index />} />
              <Route path="/province/bc" element={<BritishColumbia />} />
              <Route path="/province/ab" element={<Alberta />} />

              <Route path="/map-search" element={<MapSearch />} />
              <Route path="/market-trends" element={<MarketTrends />} />
              <Route path="/home-valuation" element={<HomeValuation />} />
              <Route path="/agents" element={<Agents />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/recommend-communities" element={<RecommendCommunities />} />

              {/* ✅ SINGLE SOURCE OF TRUTH */}
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
