import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Alberta from "./pages/Alberta";
import BritishCoulmbia from "./pages/BritishCoulmbia";
import NotFound from "./pages/NotFound";

import MapSearch from "./pages/MapSearch";
import MarketTrends from "./pages/MarketTrends";
import Agents from "./pages/Agents";
import HomeValuation from "./pages/HomeValuation";

import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendedCommunities";
import Contact from "./pages/Contact";

import Join from "./pages/Join";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Provinces */}
          <Route path="/province/on" element={<Index />} />
          <Route path="/province/bc" element={<BritishCoulmbia />} />
          <Route path="/province/ab" element={<Alberta />} />

          {/* Navbar navigation */}
          <Route path="/map-search" element={<MapSearch />} />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/home-valuation" element={<HomeValuation />} />
          <Route path="/agents" element={<Agents />} />

          {/* Tools Dropdown */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/recommend-communities" element={<RecommendCommunities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/join" element={<Join />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
