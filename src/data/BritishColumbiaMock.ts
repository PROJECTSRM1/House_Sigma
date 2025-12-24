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


export const newlyAdded: Property[] = [
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
   3. Featured Listings
====================================================== */
export const featuredListings: Property[] = [
  {
    id: 16,
    image: "/assets/Britishcolumbia_files/BC7.jpg",
    price: "$539,900",
    address: "1921 119A Street SW",
    location: "Edmonton - Rutherford",
    type: "Detached Single Family",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    status: "For Sale",
    badge: "featured",
    listed: "26 days",
    agent: "Jay S Sandhu, HomeNest Inc"
  },
  {
    id: 17,
    image: "/assets/Britishcolumbia_files/BC8.jpg",
    price: "$499,000",
    address: "2095 Maple Road NW",
    location: "Edmonton - Meadows Area",
    type: "Duplex",
    bedrooms: 5,
    bathrooms: 3,
    parking: 2,
    status: "For Sale",
    badge: "featured",
    listed: "26 days",
    agent: "Jay S Sandhu, HomeNest Inc"
  },
  {
    id: 18,
    image: "/assets/Britishcolumbia_files/BC9.jpg",
    price: "$299,900",
    address: "5344 38A Avenue NW",
    location: "Edmonton - Greenview",
    type: "Condo Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    badge: "featured",
    listed: "09-05-2025",
    agent: "Jay S Sandhu, HomeNest Inc"
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
  /* ======================================================
   8. Best For Rental Investment
====================================================== */
export const bestForRentalInvestment: Property[] = [
  {
    id: 22,
    image: "/assets/Britishcolumbia_files/BC22.jpg",
    price: "$449,900",
    address: "2204 Renton Park NW",
    location: "Calgary - Renton",
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    status: "For Sale",
    listed: "4 days ago",
    agent: "RentalCorp Realty",
    badge: "rental"
  },
  {
    id: 23,
    image: "/assets/Britishcolumbia_files/BC23.jpg",
    price: "$389,000",
    address: "18 Capital Yield Lane",
    location: "Edmonton - Capital View",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    status: "For Sale",
    listed: "2 days ago",
    agent: "YieldMax Realty",
    badge: "rental"
  },
  {
    id: 24,
    image: "/assets/Britishcolumbia_files/BC.jpg",
    price: "$510,500",
    address: "347 Investment Ridge SW",
    location: "Calgary - Ridgeview",
    type: "Duplex",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    status: "For Sale",
    listed: "1 hour ago",
    agent: "PrimeRent Investors Inc",
    badge: "rental"
  }
];

