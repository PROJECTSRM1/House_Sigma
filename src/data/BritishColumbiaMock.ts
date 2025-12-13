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

  /* Updated for premium/tap-to-view flow */
  loginRequired?: boolean | "tap-to-view";
  blurred?: boolean;
}

/* ======================================================
   1. Newly Added to HouseSigma
====================================================== */
export const newlyAdded: Property[] = [
  {
    id: 1,
    image: "/assets/Britishcolumbia_files/BC1.jpg",
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
    id: 2,
    image: "/assets/Britishcolumbia_files/BC2.jpg",
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
    id: 3,
    image: "/assets/Britishcolumbia_files/BC3.jpg",
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
   2. Best For Schools
====================================================== */
export const bestForSchools: Property[] = [
  {
    id: 4,
    image: "/assets/Britishcolumbia_files/BC4.jpg",
    price: "$366,000",
    address: "1003 - 3500 Varsity Drive NW",
    location: "Calgary - Varsity Row/Townhouse",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    status: "For Sale",
    schoolScore: "10/10",
    listed: "1 day ago",
    agent: "A2271397, RE/MAX iRealty Innovations"
  },
  {
    id: 5,
    image: "/assets/Britishcolumbia_files/BC5.jpg",
    price: "$284,900",
    address: "1802 - 3500 Varsity Drive NW",
    location: "Calgary - Varsity Row/Townhouse",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    status: "For Sale",
    schoolScore: "10/10",
    listed: "2 days ago",
    agent: "A2270989, Royal LePage Solutions"
  },
  {
    id: 6,
    image: "/assets/Britishcolumbia_files/BC6.jpg",
    price: "$359,900",
    address: "113 - 3950 46 Avenue NW",
    location: "Calgary - Varsity",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    status: "For Sale",
    schoolScore: "10/10",
    listed: "2 days ago",
    agent: "A2271133, RE/MAX REAL ESTATE - LETHBRIDGE"
  }
];

/* ======================================================
   3. Featured Listings
====================================================== */
export const featuredListings: Property[] = [
  {
    id: 7,
    image: "/assets/Britishcolumbia_files/BC7.jpg",
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
    agent: "Jay S Sandhu, HouseSigma Inc"
  },
  {
    id: 8,
    image: "/assets/Britishcolumbia_files/BC8.jpg",
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
    agent: "Jay S Sandhu, HouseSigma Inc"
  },
  {
    id: 9,
    image: "/assets/Britishcolumbia_files/BC9.jpg",
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
    agent: "Jay S Sandhu, HouseSigma Inc"
  }
];

/* ======================================================
   4. High Growth
====================================================== */
export const highGrowth: Property[] = [
  {
    id: 10,
    image: "/assets/Britishcolumbia_files/BC10.jpg",
    price: "$790,000",
    address: "1527 22 Street NW",
    location: "Calgary - Hounsfield Heights",
    type: "Detached",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    growthScore: "10/10",
    listed: "1 day ago",
    agent: "A2267800, PropZap Realty"
  },
  {
    id: 11,
    image: "/assets/Britishcolumbia_files/BC11.jpg",
    price: "$1,195,000",
    address: "1731 12 Avenue NW",
    location: "Calgary - Hounsfield Heights",
    type: "Detached",
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    status: "For Sale",
    growthScore: "10/10",
    listed: "1 day ago",
    agent: "A2269461, RE/MAX Realty Professionals"
  },
  {
    id: 12,
    image: "/assets/Britishcolumbia_files/BC12.jpg",
    price: "$354,998",
    address: "100 - 3705 141 Street SW",
    location: "Edmonton",
    type: "Condo Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    growthScore: "10/10",
    listed: "2 days ago",
    agent: "Wally Karout, Royal Lepage Arteam Realty"
  }
];

/* ======================================================
   5. Sold Below Bought (Premium — Tap to View)
====================================================== */
export const soldBelowBought: Property[] = [
  {
    id: 13,
    image: "/assets/Britishcolumbia_files/BC13.jpg",
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
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 14,
    image: "/assets/Britishcolumbia_files/BC14.jpg",
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
    id: 15,
    image: "/assets/Britishcolumbia_files/BC15.jpg",
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

/* ======================================================
   6. High Returns (Premium — Tap to View)
====================================================== */
export const highReturns: Property[] = [
  {
    id: 16,
    image: "/assets/Britishcolumbia_files/BC16.jpg",
    price: "$425,000",
    address: "123 Investment Drive",
    location: "Edmonton - Downtown",
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    listed: "3 days ago",
    agent: "Investment Realty",
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 17,
    image: "/assets/Britishcolumbia_files/BC17.jpg",
    price: "$380,000",
    address: "456 Rental Avenue",
    location: "Calgary - Beltline",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    status: "For Sale",
    listed: "1 week ago",
    agent: "High Returns Realty",
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 18,
    image: "/assets/Britishcolumbia_files/BC18.jpg",
    price: "$550,000",
    address: "789 Profit Street",
    location: "Edmonton - Whyte Ave",
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    status: "For Sale",
    listed: "5 days ago",
    agent: "Investment Pro Realty",
    loginRequired: "tap-to-view",
    blurred: true
  }
];

/* ======================================================
   7. Just Sold (Premium — Tap to View)
====================================================== */
export const justSold: Property[] = [
  {
    id: 19,
    image: "/assets/Britishcolumbia_files/BC19.jpg",
    price: "$685,000",
    soldFor: "$660,000",
    status: "Sold",
    soldDate: "2 days ago",
    address: "45 Kingsway Crescent SW",
    location: "Calgary - Kingsland",
    type: "Detached",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    discount: "4%",
    agent: "A2272511, Royal LePage Benchmark",
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 20,
    image: "/assets/Britishcolumbia_files/BC20.jpg",
    price: "$520,000",
    soldFor: "$505,000",
    status: "Sold",
    soldDate: "3 days ago",
    address: "210 Aspen Glen Drive",
    location: "Edmonton - Aspen Gardens",
    type: "Duplex",
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    discount: "3%",
    agent: "A2272467, MaxWell Polaris",
    loginRequired: "tap-to-view",
    blurred: true
  },
  {
    id: 21,
    image: "/assets/Britishcolumbia_files/BC21.jpg",
    price: "$399,900",
    soldFor: "$385,000",
    status: "Sold",
    soldDate: "5 days ago",
    address: "78 Harvest Hills Road NE",
    location: "Calgary - Harvest Hills",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    discount: "4%",
    agent: "A2272232, RE/MAX Real Estate",
    loginRequired: "tap-to-view",
    blurred: true
  }
];
