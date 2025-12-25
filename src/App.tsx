import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ArticlePage from "./pages/FAQ/ArticlePage";

import { AuthProvider } from "./context/AuthContext";

import Index from "./pages/Index";
import Alberta from "./pages/Alberta";
import BritishColumbia from "./pages/BritishColumbia";
import NotFound from "./pages/NotFound";

import MapSearch from "./pages/MapSearch";
import MarketTrends from "./pages/MarketTrends";
import MarketStatistics from "./pages/MarketStatistics";
import Agents from "./pages/Agents";
import AgentProfile from "./pages/AgentProfile";

import HomeValuation from "./pages/HomeValuation";

import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendedCommunities";
import Contact from "./pages/Contact";

import ContactUs from "./pages/ContactUs";
import BlogLM from "./pages/BlogLM";
import Join from "./pages/Join";   // Signup page

import FAQ from "./pages/FAQ/FAQ";
import Looking from "./pages/FAQ/Looking";
import ChangeData from "./pages/FAQ/ChangeData";
import Contact_FAQ from "./pages/FAQ/Contact-us";
import Features from "./pages/FAQ/Features";
import Others from "./pages/FAQ/Others";
import CategoryPage from "./pages/FAQ/Categorys";
import Login from "./pages/Login";

import LearnMore from "./pages/LearnMore";

import { AuthProvider } from "./context/AuthContext";
import PropertyDetail from "./pages/PropertyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Provinces */}
          <Route path="/province/on" element={<Index />} />
          <Route path="/province/bc" element={<BritishColumbia />} />
          <Route path="/province/ab" element={<Alberta />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog-lm" element={<BlogLM />} />



          {/* Navbar navigation */}
          <Route path="/map-search" element={<MapSearch />} />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/market-statistics" element={<MarketStatistics />} />
          <Route path="/home-valuation" element={<HomeValuation />} />
          <Route path="/agents" element={<Agents />} />

          <Route path="/agents/:agentId" element={<AgentProfile />} />

           <Route path="/property/:id" element={<PropertyDetail />} />
         



          {/* Tools Dropdown */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/recommend-communities" element={<RecommendCommunities />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/join" element={<Join />} />

          {/* FAQ */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/:categoryId" element={<CategoryPage />} />
          <Route path="/faq/user-account/:articleSlug" element={<ArticlePage />} />
          <Route path="/faq/looking-for-properties/:articleSlug" element={<Looking />} />
          <Route path="/faq/change-data/:articleSlug" element={<ChangeData />} />
          <Route path="/faq/contact-us/:articleSlug" element={<Contact_FAQ />} />
          <Route path="/faq/features/:articleSlug" element={<Features />} />
          <Route path="/faq/others/:articleSlug" element={<Others />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
