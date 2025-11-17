import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReportCard from "./ReportCard";

import styles from "./Blog.module.css";

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
      date: "11-05-2025",
    },
    {
      image: agentTalk,
      title:
        "From clicks to footsteps: New HouseSigma tool gauges buyer competition",
      date: "09-24-2025",
    },
    {
      image: scamImage,
      title: "Beware of scam offering payment for reviewing real estate listings",
      date: "09-17-2025",
    },
    {
      image: hampton,
      title: "Hampton Park – Mount Hope Preconstruction Townhomes",
      date: "02-05-2024",
      text: "Developer: Dicenzo Homes — Mount Hope, Ontario starting from $699,000 Tentative...",
    },
    {
      image: willow,
      title: "Willow – Preconstruction London Townhomes",
      date: "11-27-2023",
      text: "Developer: Wastell Homes — London, Ontario mid $700,000s starting price.",
    },
    {
      image: granton,
      title: "Granton Estates – Granton Preconstruction Detached Homes",
      date: "11-10-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: stationSide,
      title: "Stationside – Milton Preconstruction Condo",
      date: "11-06-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: toronto,
      title: "BLVD.Q – Toronto Preconstruction Condos",
      date: "11-01-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: cambridge,
      title: "Black Oaks Towns – Cambridge Preconstruction Townhomes",
      date: "10-30-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: jewelBox,
      title: "Q Tower – Toronto Preconstruction Condo",
      date: "10-18-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: kipling,
      title: "Kipling Station – Toronto Preconstruction Condo",
      date: "04-26-2023",
      text: "Developer: CentreCourt — Dundas & Kipling. Starting from mid $400,000s.",
    },
    {
      image: marketOverview,
      title: "Market Overview – Real Estate Analysis",
      date: "04-15-2023",
      text: "Comprehensive market analysis and trends across GTA regions.",
    },
    {
      image: mayToronto,
      title: "May Toronto – Spring Market Update",
      date: "05-10-2023",
      text: "Spring market trends and pricing updates for Toronto area.",
    },
    {
      image: normLi,
      title: "NORM-Li Project – New Development",
      date: "03-20-2023",
      text: "Exciting new residential development in the Toronto area.",
    },
    {
      image: ottawaNeighbourhood,
      title: "Ottawa Neighbourhood – Growth Opportunities",
      date: "02-28-2023",
      text: "Exploring emerging neighbourhoods and growth potential in Ottawa.",
    },
    {
      image: rendering,
      title: "Architectural Renderings – Future Projects",
      date: "02-14-2023",
      text: "Preview of upcoming developments and architectural designs.",
    },
    {
      image: harbourwalkElevation,
      title: "Harbourwalk Elevation – East Development",
      date: "01-30-2023",
      text: "New waterfront development project with stunning elevation.",
    },
    {
      image: buildingInConstruction,
      title: "Building in Construction – Project Update",
      date: "01-15-2023",
      text: "Progress update on major construction projects in GTA.",
    },
    {
      image: bravo,
      title: "BRAVO Hero – Premium Development",
      date: "01-05-2023",
      text: "Luxury residential project launching in downtown Toronto.",
    },
    {
      image: aerial,
      title: "Aerial Option – Drone Photography",
      date: "12-20-2023",
      text: "Explore properties from unique aerial perspectives.",
    },
    {
      image: exterior,
      title: "Exterior Design – Architectural Excellence",
      date: "12-10-2023",
      text: "Showcasing modern exterior design principles.",
    },
    {
      image: fullTower,
      title: "Full Tower – Complete Development",
      date: "12-01-2022",
      text: "End-to-end overview of our tower development project.",
    },
    {
      image: googleMapsLogo,
      title: "Google Maps Integration – Location Insights",
      date: "11-25-2022",
      text: "Understanding location data for real estate decisions.",
    },
    {
      image: danielsonParliament,
      title: "Danielson Parliament – Historic Restoration",
      date: "11-15-2022",
      text: "Heritage property restoration near Parliament.",
    },
    {
      image: elmSimuLiu,
      title: "Elm Simu Liu – Community Project",
      date: "11-05-2022",
      text: "Community-focused development initiative.",
    },
    {
      image: infographic,
      title: "Real Estate Infographic – Market Insights",
      date: "10-25-2022",
      text: "Visual representation of market data and trends.",
    },
    {
      image: yongeExterior,
      title: "Yonge Street Exterior – Urban Development",
      date: "10-15-2022",
      text: "Revitalization project on Yonge Street corridor.",
    },
    {
      image: mainRendering,
      title: "Main Rendering – Project Visualization",
      date: "10-05-2022",
      text: "3D rendering of main residential development.",
    },
    {
      image: threeHeroRendering,
      title: "316 Hero Rendering – Modern Condo",
      date: "09-25-2022",
      text: "Architectural visualization of 316 unit development.",
    },
    {
      image: aboveHeroRendering,
      title: "ABOVE Hero Rendering – Luxury Living",
      date: "09-15-2022",
      text: "Premium residential tower concept visualization.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-[4.5rem] p-6 md:p-10 max-w-[1400px] mx-auto">
        <h2 className={styles.headingPrimary}>Blog</h2>

        <h3 className={styles.subHeading}>HouseSigma Analytics</h3>

        <div className={styles.gridLayout}>
          {analyticsItems.map((item, index) => (
            <ReportCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <h3 className={styles.subHeading}>HouseSigma Real Estate Blog</h3>

        <div className={styles.gridLayout}>
          {blogItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDate}>{item.date}</p>
                <p className={styles.cardText}>{item.text}</p>
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
