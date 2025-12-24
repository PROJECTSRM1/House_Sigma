export interface Property {
  id: number;
  image: string;
  price: string;
  address: string;
  location: string;
  type: string;

  bedrooms: number;
  bathrooms: number;
  parking?: number;

  status: string;
  badge?: string;

  schoolScore?: string;
  growthScore?: string;

  listed?: string;
  soldFor?: string;
  soldDate?: string;
  discount?: string;

  agent?: string;

  /* Updated */
  loginRequired?: boolean | "tap-to-view";
  blurred?: boolean;
}


export const newlyAdded: Property[] = [
  {
    id: 25,
    image: "/assets/alberta_Files/alberta1.jpg",
    price: "$63,900",
    address: "108 - 11040 129 Street NW",
    location: "Edmonton - Westminster",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    status: "For Sale",
    listed: "today",
    agent: "Steve Balay, Royal Lepage Arteam Realty"
  },
  {
    id: 26,
    image: "/assets/alberta_Files/alberta2.jpg",
    price: "$250,000",
    address: "475 DUNLUCE Road NW",
    location: "Edmonton - Dunluce",
    type: "Condo Townhouse",
    bedrooms: 3,
    bathrooms: 1,
    status: "For Sale",
    listed: "today",
    agent: "Chris K Karampelas, MaxWell Polaris"
  },
  {
    id: 27,
    image: "/assets/alberta_Files/alberta3.jpg",
    price: "$352,900",
    address: "10132 105 Street",
    location: "Lac la Biche - Lac La Biche",
    type: "Detached",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    status: "For Sale",
    listed: "5 hours ago",
    agent: "A2271498, RE/MAX LA BICHE REALTY"
  }
];

/* ======================================================
   2. Best For Rental Investment
====================================================== */
export const rentalInvestment: Property[] = [
  {
    id: 28,
    image: "/assets/alberta_Files/alberta4.jpg",
    price: "$366,000",
    address: "1003 - 3500 Varsity Drive NW",
    location: "Calgary - Varsity Row/Townhouse",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    status: "For Sale",
    listed: "1 day ago",
    agent: "A2271397, RE/MAX iRealty Innovations",
    badge: "rental"  
  },
  {
    id: 29,
    image: "/assets/alberta_Files/alberta5.jpg",
    price: "$284,900",
    address: "1802 - 3500 Varsity Drive NW",
    location: "Calgary - Varsity Row/Townhouse",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    status: "For Sale",
    listed: "2 days ago",
    agent: "A2270989, Royal LePage Solutions",
    badge: "rental"
  },
  {
    id: 30,
    image: "/assets/alberta_Files/alberta6.jpg",
    price: "$359,900",
    address: "113 - 3950 46 Avenue NW",
    location: "Calgary - Varsity",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    status: "For Sale",
    listed: "2 days ago",
    agent: "A2271133, RE/MAX REAL ESTATE - LETHBRIDGE",
    badge: "rental"
  }
];

/* ======================================================
   3. Featured Listings
====================================================== */
export const featuredListings: Property[] = [
  {
    id: 31,
    image: "/assets/alberta_Files/alberta7.jpg",
    price: "$539,900",
    address: "1921 119A Street SW",
    location: "Edmonton - Rutherford",
    type: "Detached Single Family",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    status: "For Sale",
    badge: "Featured",
    listed: "26 days",
    agent: "Jay S Sandhu, HomeNest Inc"
  },
  {
    id: 32,
    image: "/assets/alberta_Files/alberta8.jpg",
    price: "$499,000",
    address: "2095 Maple Road NW",
    location: "Edmonton - Meadows Area",
    type: "Duplex",
    bedrooms: 5,
    bathrooms: 3,
    parking: 2,
    status: "For Sale",
    badge: "Featured",
    listed: "26 days",
    agent: "Jay S Sandhu, HomeNest Inc"
  },
  {
    id: 33,
    image: "/assets/alberta_Files/alberta9.jpg",
    price: "$299,900",
    address: "5344 38A Avenue NW",
    location: "Edmonton - Greenview",
    type: "Condo Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    badge: "Featured",
    listed: "09-05-2025",
    agent: "Jay S Sandhu, HomeNest Inc"
  }
];


/* ======================================================
   5. Sold Below Bought
====================================================== */
export const soldBelowBought: Property[] = [
  {
    id: 34,
    image: "/assets/alberta_Files/alberta13.jpg",
    price: "$317,000",
    address: "2301 - 310 Mckenzie Towne Gate SE",
    location: "Calgary",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    status: "Sold",
    soldFor: "$317,000",
    discount: "30%",
    soldDate: "09-26-2025",
    agent: "A2238054, RE/MAX House of Real Estate",

    /* Updated */
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 35,
    image: "/assets/alberta_Files/alberta14.jpg",
    price: "$90,100",
    address: "303 - 10335 117 Street NW",
    location: "Edmonton - Oliver",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    status: "Sold",
    soldFor: "$90,100",
    discount: "35%",
    soldDate: "10-15-2025",
    agent: "Edmonton Realtor",

    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 36,
    image: "/assets/alberta_Files/alberta15.jpg",
    price: "$175,000",
    address: "4513 42 Street",
    location: "Bonnyville Town",
    type: "Detached Single Family",
    bedrooms: 5,
    bathrooms: 1,
    status: "Sold",
    soldFor: "$175,000",
    discount: "38%",
    soldDate: "7 days",
    agent: "Bonnyville Realtor",

    loginRequired: "tap-to-view",
    blurred: true
  }
];

