import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/FAQ/ArticlePage";

import Index from "./pages/Index";
import Alberta from "./pages/Alberta";
import BritishColumbia from "./pages/BritishColumbia";
import NotFound from "./pages/NotFound";

import MapSearch from "./pages/MapSearch";
import MarketTrends from "./pages/MarketTrends";
import Agents from "./pages/Agents";
import HomeValuation from "./pages/HomeValuation";

import Blog from "./pages/Blog";
import RecommendCommunities from "./pages/RecommendedCommunities";
import Contact from "./pages/Contact";

import ContactUs from "./pages/ContactUs";
import BlogLM from "./pages/BlogLM";
// Join page
import Join from "./pages/Join";

import Login from "./pages/Login";
import FAQ from "./pages/FAQ/FAQ";
import Looking from "./pages/FAQ/Looking";
import ChangeData from "./pages/FAQ/ChangeData";
import ContactUs from "./pages/FAQ/Contact-us";
import Features from "./pages/FAQ/Features";
import Others from "./pages/FAQ/Others";
import CategoryPage from "./pages/FAQ/Categorys";

import LearnMore from "./pages/LearnMore";

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
          {/*Dashboard Navigation*/}

          {/* Provinces */}
          <Route path="/province/on" element={<Index />} />
          <Route path="/province/bc" element={<BritishColumbia />} />
          <Route path="/province/ab" element={<Alberta />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog-lm" element={<BlogLM/>}/>

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
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/faq/:categoryId" element={<CategoryPage />} />
          <Route path="/faq/user-account/:articleSlug" element={<ArticlePage />} />
          <Route path="/faq/looking-for-properties/:articleSlug" element={<Looking />} />
          <Route path="/faq/change-data/:articleSlug" element={<ChangeData/>} />
          <Route path="/faq/contact-us/:articleSlug" element={<ContactUs/>} />
           <Route path="/faq/features/:articleSlug" element={<Features/>} />
            <Route path="/faq/others/:articleSlug" element={<Others/>} />



          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
