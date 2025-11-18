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
import Agents from "./pages/Agents";
import HomeValuation from "./pages/HomeValuation";
// Tools dropdown pages
import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendedCommunities";
import Contact from "./pages/Contact";

// Join page
import Join from "./pages/Join";

import Login from "./pages/Login";

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
           <Route path="/home-valuation" element={<HomeValuation/>}/>
          <Route path="/agents" element={<Agents />} />

          {/* Tools Dropdown */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/recommend-communities" element={<RecommendCommunities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login isOpen={false} onClose={function (): void {
            throw new Error("Function not implemented.");
          } } />} />
          <Route path="/join" element={<Join />} />

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
