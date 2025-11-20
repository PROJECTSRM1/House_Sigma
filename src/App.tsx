import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/FAQ/ArticlePage";
//Dashboard pages
import Index from "./pages/Index";
import Alberta from "./pages/Alberta";
// import BritishCoulmbia from "./pages/BritishCoulmbia";
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
import FAQ from "./pages/FAQ/FAQ";
import Looking from "./pages/FAQ/Looking";
import ChangeData from "./pages/FAQ/ChangeData";
import ContactUs from "./pages/FAQ/Contact-us";
import Features from "./pages/FAQ/Features";
import Others from "./pages/FAQ/Others";
import CategoryPage from "./pages/FAQ/Categorys";
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
          <Route path ="/province/on" element={<Index/>}/>
          {/* <Route path ="/province/bc" element={<BritishCoulmbia/>}/> */}
          <Route path ="/province/ab" element={<Alberta/>}/>

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
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/faq/:categoryId" element={<CategoryPage />} />
          <Route path="/faq/user-account/:articleSlug" element={<ArticlePage />} />
          <Route path="/faq/looking-for-properties/:articleSlug" element={<Looking />} />
          <Route path="/faq/change-data/:articleSlug" element={<ChangeData/>} />
          <Route path="/faq/contact-us/:articleSlug" element={<ContactUs/>} />
           <Route path="/faq/features/:articleSlug" element={<Features/>} />
            <Route path="/faq/others/:articleSlug" element={<Others/>} />



          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
