import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index"
import NotFound from "./pages/NotFound";

// Newly added pages
import MapSearch from "./pages/MapSearch";
import MarketTrends from "./pages/MarketTrends";
import HomeValuation from "./pages/HomeValuation";
import Agents from "./pages/Agents";

// Tools dropdown pages
import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendCommunities";
import Contact from "./pages/Contact";

// Join page
import Join from "./pages/Join";

// Province pages (NEW)
import BritishColumbia from "./pages/BritishColumbia";
import Alberta from "./pages/Alberta";

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

          {/* Navbar navigation */}
          <Route path="/map-search" element={<MapSearch />} />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/home-valuation" element={<HomeValuation />} />
          <Route path="/agents" element={<Agents />} />

          {/* Tools dropdown */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/recommend-communities" element={<RecommendCommunities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Province dropdown routes */}
          <Route path="/province/on" element={<Index />} />
         <Route path="/province/bc" element={<BritishColumbia /> }/>
          <Route path="/province/ab" element={<Alberta />} /> 

          {/* Join page */}
          <Route path="/join" element={<Join />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
