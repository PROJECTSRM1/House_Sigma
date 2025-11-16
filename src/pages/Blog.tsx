import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportCard from "./ReportCard";

import analyticCharts from "@/assets/analytic-charts.jpg";
import keysHand from "@/assets/keys-hand.jpg";
import propertyGrowth from "@/assets/property-growth.jpg";

import gtaMarket from "@/assets/GTA-marketwatch-blog-image.jpg";
import agentTalk from "@/assets/Untitled-design.jpg";
import scamImage from "@/assets/scam-image.jpg";
import hampton from "@/assets/Southampton.jpg";
import willow from "@/assets/willow.jpg";
import kipling from "@/assets/Kipling-Station.jpg";
import granton from "@/assets/Granton-Estates.jpg";
import stationSide from "@/assets/Stationside-Hero.jpg";
import toronto from "@/assets/Toronto.jpg";
import cambridge from "@/assets/Cambridge.jpg";
import jewelBox from "@/assets/Jewel-Box.jpg";
import marketOverview from "@/assets/Market-Overview.jpg";
import mayToronto from "@/assets/May_Toronto.jpg";
import normLi from "@/assets/NORM-Li.jpg";
import ottawaNeighbourhood from "@/assets/Ottawa_Neighbourhood.jpg";
import rendering from "@/assets/Rendering.jpg";
import harbourwalkElevation from "@/assets/Harbourwalk-Elevation-East.jpg";
import buildingInConstruction from "@/assets/Building-in-constructions.jpg";
import bravo from "@/assets/BRAVO-Hero.jpg";
import aerial from "@/assets/Aerial-Option.jpg";
import exterior from "@/assets/Exterior-Hero.jpg";
import fullTower from "@/assets/FullTower.jpg";
import googleMapsLogo from "@/assets/Google-Maps-logo.jpg";
import danielsonParliament from "@/assets/danielsonparliament_rendering.jpg";
import elmSimuLiu from "@/assets/Elm-Simu-Liu.jpg";
import infographic from "@/assets/INFOGRAPHIC.jpg";
import yongeExterior from "@/assets/Yonge_Exterior.jpg";
import mainRendering from "@/assets/main-rendering.jpg";
import threeHeroRendering from "@/assets/316-Hero-Rendering.jpg";
import aboveHeroRendering from "@/assets/ABOVE-Hero-Rendering.jpg";

const Blog = () => {
  const analyticsItems = [
    {
      image: analyticCharts,
      title: "Investor Demand Report",
      description: "How many buyers rent out their homes right after purchase?",
    },
    {
      image: keysHand,
      title: "Median Price Report",
      description: "Median price monthly/yearly change by city & community",
    },
    {
      image: propertyGrowth,
      title: "GTA Median Price Heat Map",
      description:
        "Interactive Heat Map for median monthly price change within GTA",
    },
  ];

  const blogItems = [
    {
      image: gtaMarket,
      title:
        "Infographic: GTA terminated listings outpace home sales in October as prices stay flat",
      date: "2025-11-05",
    },
    {
      image: agentTalk,
      title:
        "From clicks to footsteps: New HouseSigma tool gauges buyer competition",
      date: "2025-09-24",
    },
    {
      image: scamImage,
      title:
        "Beware of scam offering payment for reviewing real estate listings",
      date: "2025-09-17",
    },
    {
      image: hampton,
      title: "Hampton Park – Mount Hope Preconstruction Townhomes",
      date: "2024-02-05",
      text: "Developer: Dicenzo Homes — Mount Hope, Ontario starting from $699,000 Tentative...",
    },
    {
      image: willow,
      title: "Willow – Preconstruction London Townhomes",
      date: "2023-11-27",
      text: "Developer: Wastell Homes — London, Ontario mid $700,000s starting price.",
    },
    {
      image: granton,
      title: "Granton Estates – Granton Preconstruction Detached Homes",
      date: "2023-11-10",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: stationSide,
      title: "Stationside – Milton Preconstruction Condo",
      date: "2023-11-06",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: toronto,
      title: "BLVD.Q – Toronto Preconstruction Condos",
      date: "2023-11-01",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: cambridge,
      title: "Black Oaks Towns – Cambridge Preconstruction Townhomes",
      date: "2023-10-30",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: jewelBox,
      title: "Q Tower – Toronto Preconstruction Condo",
      date: "2023-10-18",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: kipling,
      title: "Kipling Station – Toronto Preconstruction Condo",
      date: "2023-04-26",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: marketOverview,
      title: "Market Overview – Real Estate Analysis",
      date: "2023-04-15",
      text: "Comprehensive market analysis and trends across GTA regions.",
    },
    {
      image: mayToronto,
      title: "May Toronto – Spring Market Update",
      date: "2023-05-10",
      text: "Spring market trends and pricing updates for Toronto area.",
    },
    {
      image: normLi,
      title: "NORM-Li Project – New Development",
      date: "2023-03-20",
      text: "Exciting new residential development in the Toronto area.",
    },
    {
      image: ottawaNeighbourhood,
      title: "Ottawa Neighbourhood – Growth Opportunities",
      date: "2023-02-28",
      text: "Exploring emerging neighbourhoods and growth potential in Ottawa.",
    },
    {
      image: rendering,
      title: "Architectural Renderings – Future Projects",
      date: "2023-02-14",
      text: "Preview of upcoming developments and architectural designs.",
    },
    {
      image: harbourwalkElevation,
      title: "Harbourwalk Elevation – East Development",
      date: "2023-01-30",
      text: "New waterfront development project with stunning elevation.",
    },
    {
      image: buildingInConstruction,
      title: "Building in Construction – Project Update",
      date: "2023-01-15",
      text: "Progress update on major construction projects in GTA.",
    },
    {
      image: bravo,
      title: "BRAVO Hero – Premium Development",
      date: "2023-01-05",
      text: "Luxury residential project launching in downtown Toronto.",
    },
    {
      image: aerial,
      title: "Aerial Option – Drone Photography",
      date: "2022-12-20",
      text: "Explore properties from unique aerial perspectives.",
    },
    {
      image: exterior,
      title: "Exterior Design – Architectural Excellence",
      date: "2022-12-10",
      text: "Showcasing modern exterior design principles.",
    },
    {
      image: fullTower,
      title: "Full Tower – Complete Development",
      date: "2022-12-01",
      text: "End-to-end overview of our tower development project.",
    },
    {
      image: googleMapsLogo,
      title: "Google Maps Integration – Location Insights",
      date: "2022-11-25",
      text: "Understanding location data for real estate decisions.",
    },
    {
      image: danielsonParliament,
      title: "Danielson Parliament – Historic Restoration",
      date: "2022-11-15",
      text: "Heritage property restoration near Parliament.",
    },
    {
      image: elmSimuLiu,
      title: "Elm Simu Liu – Community Project",
      date: "2022-11-05",
      text: "Community-focused development initiative.",
    },
    {
      image: infographic,
      title: "Real Estate Infographic – Market Insights",
      date: "2022-10-25",
      text: "Visual representation of market data and trends.",
    },
    {
      image: yongeExterior,
      title: "Yonge Street Exterior – Urban Development",
      date: "2022-10-15",
      text: "Revitalization project on Yonge Street corridor.",
    },
    {
      image: mainRendering,
      title: "Main Rendering – Project Visualization",
      date: "2022-10-05",
      text: "3D rendering of main residential development.",
    },
    {
      image: threeHeroRendering,
      title: "316 Hero Rendering – Modern Condo",
      date: "2022-09-25",
      text: "Architectural visualization of 316 unit development.",
    },
    {
      image: aboveHeroRendering,
      title: "ABOVE Hero Rendering – Luxury Living",
      date: "2022-09-15",
      text: "Premium residential tower concept visualization.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-[4.5rem] p-6 md:p-10 max-w-[1400px] mx-auto">

        <h2 className="text-[20px] font-semibold mb-4">Blog</h2>

        <h3 className="text-[18px] font-semibold mb-6">HouseSigma Analytics</h3>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {analyticsItems.map((item, index) => (
            <ReportCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <h3 className="text-[18px] font-semibold mt-10 mb-6">
          HouseSigma Real Estate Blog
        </h3>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[13px] text-gray-500 mb-2">
                  {item.date}
                </p>

                <p className="text-[14px] text-gray-600 leading-[20px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
