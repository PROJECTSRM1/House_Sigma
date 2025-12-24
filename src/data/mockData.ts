export interface PropertyListing {
  id: string;
  image: string;
  badge?: string;
  badgeColor?: 'green' | 'blue' | 'teal' | 'orange';
  status: string;
  price: number;
  date: string;
  address: string;
  type: string;
  beds: number | string;
  baths: number | string;
  parking: number | string;
  agent?: string;
  restricted?: boolean;
  loginRequired?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
}

export const newlyListed: PropertyListing[] = [
  {
    id: '1',
    image: '/assets/ontario_files/oc4.jpg',
    status: 'For Sale',
    price: 459000,
    date: '34 minutes ago',
    address: '117 - 85B Morrell Street, Brantford',
    type: 'Condo/Apt Unit',
    beds: 2,
    baths: 2,
    parking: 0,
    loginRequired: true
  },
  {
    id: '2',
    image: '/assets/ontario_files/oc5.jpg',
    status: 'For Sale',
    price: 652900,
    date: '34 minutes ago',
    address: '217 North Street E, Tillsonburg',
    type: 'Single Family Residence',
    beds: '2+2',
    baths: 3,
    parking: 1,
    loginRequired: true
  },
  {
    id: '3',
    image: '/assets/ontario_files/oc6.jpg',
    status: 'For Sale',
    price: 399900,
    date: '34 minutes ago',
    address: '902 - 9 Bonheur Court, Brantford',
    type: 'Condo/Apt Unit',
    beds: 2,
    baths: 1,
    parking: 0,
    loginRequired: true
  },
];

export const rentalInvestment: PropertyListing[] = [
  {
    id: '4',
    image: '/assets/ontario_files/oc7.jpg',
    badge: 'Rental Yield: 5.3%',
    badgeColor: 'teal',
    status: 'For Sale',
    price: 499000,
    date: 'today',
    address: '20 Haymarket Drive, Brampton - Northwest',
    type: 'Freehold Townhouse',
    beds: 3,
    baths: 3,
    parking: 1,
    agent: 'W12540402, ROYAL LEPAGE PLATINUM REALTY',
  },
  {
    id: '5',
    image: '/assets/ontario_files/oc8.jpg',
    badge: 'Rental Yield: 5.0%',
    badgeColor: 'teal',
    status: 'For Sale',
    price: 699000,
    date: '6 days ago',
    address: '370 Coxwell Avenue, Toronto - Greenwood',
    type: 'Semi-Detached',
    beds: '3+1',
    baths: 2,
    parking: 0,
    agent: 'E12521392, RE/MAX REALTY ENTERPRISES INC.',
  },
  {
    id: '6',
    image: '/assets/ontario_files/oc9.jpg',
    badge: 'Rental Yield: 4.8%',
    badgeColor: 'teal',
    status: 'For Sale',
    price: 450000,
    date: '7 days ago',
    address: '602 Seyton Drive, Nepean - Westcliffe Estates',
    type: 'Freehold Townhouse',
    beds: '2+1',
    baths: 2,
    parking: 0,
    agent: 'X12517714, THE AGENCY OTTAWA',
  },
];

export const featuredListings: PropertyListing[] = [
  {
    id: '7',
    image: '/assets/ontario_files/oc13.jpg',
    badge: 'Featured',
    badgeColor: 'orange',
    status: 'For Sale',
    price: 1898000,
    date: '3 days ago',
    address: '26 Brantwood Court, Markham - Unionville',
    type: 'Detached',
    beds: 3,
    baths: 2,
    parking: 2,
    agent: 'N12531354, RE/MAX REALTRON REALTY INC.',
  },
  {
    id: '8',
    image: '/assets/ontario_files/oc14.jpg',
    badge: 'Featured',
    badgeColor: 'orange',
    status: 'For Sale',
    price: 728000,
    date: '4 days ago',
    address: '536 - 33 Cox Boulevard, Markham - Union',
    type: 'Condo Apartment',
    beds: 3,
    baths: 3,
    parking: 1,
    agent: 'N12526384, RE/MAX ALL-STARS REALTY INC.',
    loginRequired: true
  },
  {
    id: '9',
    image: '/assets/ontario_files/oc15.jpg',
    badge: 'Featured',
    badgeColor: 'orange',
    status: 'For Sale',
    price: 1490000,
    date: '6 days ago',
    address: '48 John Button Boulevard, Markham - Butt',
    type: 'Detached',
    beds: 3,
    baths: 3,
    parking: 2,
    agent: 'N12522550, RE/MAX ELITE REAL ESTATE',
  },
];


export const soldBelow: PropertyListing[] = [
  {
    id: '10',
    image: '/assets/ontario_files/oc19.jpg',
    badgeColor: 'blue',
    status: 'Sold',
    price: 1898000,
    date: '3 days ago',
    address: '26 Brantwood Court, Markham - Unionville',
    type: 'Detached',
    beds: 3,
    baths: 2,
    parking: 2,
    agent: 'N12531354, RE/MAX REALTRON REALTY INC.',
    loginRequired: true
  },
  {
    id: '11',
    image: '/assets/ontario_files/oc20.jpg',
    badgeColor: 'blue',
    status: 'Sold',
    price: 728000,
    date: '4 days ago',
    address: '536 - 33 Cox Boulevard, Markham - Union',
    type: 'Condo Apartment',
    beds: 3,
    baths: 3,
    parking: 1,
    agent: 'N12526384, RE/MAX ALL-STARS REALTY INC.',
    loginRequired: true
  },
  {
    id: '12',
    image: '/assets/ontario_files/oc21.jpg',
    badgeColor: 'blue',
    status: 'Sold',
    price: 1490000,
    date: '6 days ago',
    address: '48 John Button Boulevard, Markham - Butt',
    type: 'Detached',
    beds: 3,
    baths: 3,
    parking: 2,
    agent: 'N12522550, RE/MAX ELITE REAL ESTATE',
    loginRequired: true
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Kathy Lord',
    title: 'Sales Representative',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    id: '2',
    name: 'Amir Aslani',
    title: 'Sales Representative',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: '3',
    name: 'Tyler Pope',
    title: 'Sales Representative',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
];

export const ontarioCities = [
  'Homes for Sale in Toronto',
  'Homes for Sale in Mississauga',
  'Homes for Sale in North York',
  'Homes for Sale in Brampton',
  'Homes for Sale in Scarborough',
  'Homes for Sale in Vaughan',
  'Homes for Sale in Etobicoke',
  'Homes for Sale in Oakville',
  'Homes for Sale in Markham',
  'Homes for Sale in London',
];

export const bcCities = [
  'Homes for Sale in Vancouver',
  'Homes for Sale in Surrey',
  'Homes for Sale in Burnaby',
  'Homes for Sale in Richmond',
  'Homes for Sale in Langley',
  'Homes for Sale in Kelowna',
  'Homes for Sale in Coquitlam',
  'Homes for Sale in North Vancouver',
  'Homes for Sale in Abbotsford',
  'Homes for Sale in Chilliwack',
];

export const albertaCities = [
  'Homes for Sale in Calgary',
  'Homes for Sale in Edmonton',
  'Homes for Sale in Airdrie',
  'Homes for Sale in Red Deer',
  'Homes for Sale in Lethbridge',
  'Homes for Sale in Grande Prairie',
  'Homes for Sale in St. Albert',
  'Homes for Sale in Sherwood Park',
  'Homes for Sale in Fort McMurray',
  'Homes for Sale in Cochrane',
];

export const soldOntarioCities = [
  'Sold Homes in Toronto',
  'Sold Homes in Mississauga',
  'Sold Homes in North York',
  'Sold Homes in Brampton',
  'Sold Homes in Scarborough',
  'Sold Homes in Vaughan',
  'Sold Homes in Etobicoke',
  'Sold Homes in Oakville',
  'Sold Homes in Markham',
  'Sold Homes in London',
];

export const soldBcCities = [
  'Sold Homes in Vancouver',
  'Sold Homes in Surrey',
  'Sold Homes in Burnaby',
  'Sold Homes in Richmond',
  'Sold Homes in Langley',
  'Sold Homes in Kelowna',
  'Sold Homes in Coquitlam',
  'Sold Homes in North Vancouver',
  'Sold Homes in Abbotsford',
  'Sold Homes in Chilliwack',
];

export const soldAlbertaCities = [
  'Sold Homes in Calgary',
  'Sold Homes in Edmonton',
  'Sold Homes in Airdrie',
  'Sold Homes in Red Deer',
  'Sold Homes in Lethbridge',
  'Sold Homes in Grande Prairie',
  'Sold Homes in St. Albert',
  'Sold Homes in Sherwood Park',
  'Sold Homes in Fort McMurray',
  'Sold Homes in Cochrane',
];





// Price Trends Data
export const priceTrendsData = [
  /* ================= HYDERABAD ================= */
  { city: 'Hyderabad', month: 'Jan', monthIndex: 0, apartment: 8500, villa: 12000, commercial: 15000 },
  { city: 'Hyderabad', month: 'Feb', monthIndex: 1, apartment: 8700, villa: 12200, commercial: 15200 },
  { city: 'Hyderabad', month: 'Mar', monthIndex: 2, apartment: 8900, villa: 12500, commercial: 15100 },
  { city: 'Hyderabad', month: 'Apr', monthIndex: 3, apartment: 9200, villa: 12800, commercial: 15400 },
  { city: 'Hyderabad', month: 'May', monthIndex: 4, apartment: 9400, villa: 13100, commercial: 15600 },
  { city: 'Hyderabad', month: 'Jun', monthIndex: 5, apartment: 9300, villa: 13000, commercial: 15800 },

  /* ================= BANGALORE ================= */
  { city: 'Bangalore', month: 'Jan', monthIndex: 0, apartment: 10500, villa: 15500, commercial: 18000 },
  { city: 'Bangalore', month: 'Feb', monthIndex: 1, apartment: 10700, villa: 15800, commercial: 18200 },
  { city: 'Bangalore', month: 'Mar', monthIndex: 2, apartment: 10900, villa: 16000, commercial: 18500 },
  { city: 'Bangalore', month: 'Apr', monthIndex: 3, apartment: 11200, villa: 16200, commercial: 18800 },
  { city: 'Bangalore', month: 'May', monthIndex: 4, apartment: 11400, villa: 16500, commercial: 19000 },
  { city: 'Bangalore', month: 'Jun', monthIndex: 5, apartment: 11600, villa: 16800, commercial: 19200 },

  /* ================= MUMBAI ================= */
  { city: 'Mumbai', month: 'Jan', monthIndex: 0, apartment: 18500, villa: 26000, commercial: 30000 },
  { city: 'Mumbai', month: 'Feb', monthIndex: 1, apartment: 18800, villa: 26200, commercial: 30200 },
  { city: 'Mumbai', month: 'Mar', monthIndex: 2, apartment: 19000, villa: 26500, commercial: 30500 },
  { city: 'Mumbai', month: 'Apr', monthIndex: 3, apartment: 19200, villa: 26800, commercial: 30800 },
  { city: 'Mumbai', month: 'May', monthIndex: 4, apartment: 19500, villa: 27000, commercial: 31000 },
  { city: 'Mumbai', month: 'Jun', monthIndex: 5, apartment: 19800, villa: 27500, commercial: 31500 },

  /* ================= PUNE ================= */
  { city: 'Pune', month: 'Jan', monthIndex: 0, apartment: 9500, villa: 13500, commercial: 16000 },
  { city: 'Pune', month: 'Feb', monthIndex: 1, apartment: 9700, villa: 13800, commercial: 16200 },
  { city: 'Pune', month: 'Mar', monthIndex: 2, apartment: 9900, villa: 14000, commercial: 16500 },
  { city: 'Pune', month: 'Apr', monthIndex: 3, apartment: 10100, villa: 14200, commercial: 16800 },
  { city: 'Pune', month: 'May', monthIndex: 4, apartment: 10300, villa: 14500, commercial: 17000 },
  { city: 'Pune', month: 'Jun', monthIndex: 5, apartment: 10500, villa: 14800, commercial: 17200 },

  /* ================= CHENNAI ================= */
  { city: 'Chennai', month: 'Jan', monthIndex: 0, apartment: 8800, villa: 12500, commercial: 15500 },
  { city: 'Chennai', month: 'Feb', monthIndex: 1, apartment: 9000, villa: 12800, commercial: 15800 },
  { city: 'Chennai', month: 'Mar', monthIndex: 2, apartment: 9200, villa: 13000, commercial: 16000 },
  { city: 'Chennai', month: 'Apr', monthIndex: 3, apartment: 9400, villa: 13200, commercial: 16200 },
  { city: 'Chennai', month: 'May', monthIndex: 4, apartment: 9600, villa: 13500, commercial: 16500 },
  { city: 'Chennai', month: 'Jun', monthIndex: 5, apartment: 9800, villa: 13800, commercial: 16800 },

  /* ================= DELHI NCR ================= */
  { city: 'Delhi NCR', month: 'Jan', monthIndex: 0, apartment: 12500, villa: 18000, commercial: 21000 },
  { city: 'Delhi NCR', month: 'Feb', monthIndex: 1, apartment: 12800, villa: 18300, commercial: 21200 },
  { city: 'Delhi NCR', month: 'Mar', monthIndex: 2, apartment: 13000, villa: 18500, commercial: 21500 },
  { city: 'Delhi NCR', month: 'Apr', monthIndex: 3, apartment: 13300, villa: 18800, commercial: 21800 },
  { city: 'Delhi NCR', month: 'May', monthIndex: 4, apartment: 13500, villa: 19000, commercial: 22000 },
  { city: 'Delhi NCR', month: 'Jun', monthIndex: 5, apartment: 13800, villa: 19300, commercial: 22300 },
];


// Rental Demand Data
export const rentalDemandData = [
  /* ================= HYDERABAD ================= */
  { city: 'Hyderabad', month: 'Jan', monthIndex: 0, yield: 4.2, avgRent: 25000, demand: 78 },
  { city: 'Hyderabad', month: 'Feb', monthIndex: 1, yield: 4.3, avgRent: 25500, demand: 82 },
  { city: 'Hyderabad', month: 'Mar', monthIndex: 2, yield: 4.5, avgRent: 26000, demand: 85 },
  { city: 'Hyderabad', month: 'Apr', monthIndex: 3, yield: 4.4, avgRent: 26500, demand: 88 },
  { city: 'Hyderabad', month: 'May', monthIndex: 4, yield: 4.6, avgRent: 27000, demand: 91 },
  { city: 'Hyderabad', month: 'Jun', monthIndex: 5, yield: 4.7, avgRent: 27500, demand: 89 },
  { city: 'Hyderabad', month: 'Jul', monthIndex: 6, yield: 4.8, avgRent: 28000, demand: 92 },
  { city: 'Hyderabad', month: 'Aug', monthIndex: 7, yield: 4.9, avgRent: 28500, demand: 94 },
  { city: 'Hyderabad', month: 'Sep', monthIndex: 8, yield: 5.0, avgRent: 29000, demand: 96 },
  { city: 'Hyderabad', month: 'Oct', monthIndex: 9, yield: 5.1, avgRent: 29500, demand: 93 },
  { city: 'Hyderabad', month: 'Nov', monthIndex: 10, yield: 5.2, avgRent: 30000, demand: 95 },
  { city: 'Hyderabad', month: 'Dec', monthIndex: 11, yield: 5.3, avgRent: 30500, demand: 97 },

  /* ================= BANGALORE ================= */
  { city: 'Bangalore', month: 'Jan', monthIndex: 0, yield: 3.9, avgRent: 32000, demand: 82 },
  { city: 'Bangalore', month: 'Feb', monthIndex: 1, yield: 4.0, avgRent: 32500, demand: 84 },
  { city: 'Bangalore', month: 'Mar', monthIndex: 2, yield: 4.1, avgRent: 33000, demand: 86 },
  { city: 'Bangalore', month: 'Apr', monthIndex: 3, yield: 4.2, avgRent: 33500, demand: 88 },
  { city: 'Bangalore', month: 'May', monthIndex: 4, yield: 4.3, avgRent: 34000, demand: 90 },
  { city: 'Bangalore', month: 'Jun', monthIndex: 5, yield: 4.4, avgRent: 34500, demand: 89 },
  { city: 'Bangalore', month: 'Jul', monthIndex: 6, yield: 4.5, avgRent: 35000, demand: 91 },
  { city: 'Bangalore', month: 'Aug', monthIndex: 7, yield: 4.6, avgRent: 35500, demand: 93 },
  { city: 'Bangalore', month: 'Sep', monthIndex: 8, yield: 4.7, avgRent: 36000, demand: 95 },
  { city: 'Bangalore', month: 'Oct', monthIndex: 9, yield: 4.8, avgRent: 36500, demand: 92 },
  { city: 'Bangalore', month: 'Nov', monthIndex: 10, yield: 4.9, avgRent: 37000, demand: 94 },
  { city: 'Bangalore', month: 'Dec', monthIndex: 11, yield: 5.0, avgRent: 37500, demand: 96 },

  /* ================= MUMBAI ================= */
  { city: 'Mumbai', month: 'Jan', monthIndex: 0, yield: 3.1, avgRent: 45000, demand: 88 },
  { city: 'Mumbai', month: 'Feb', monthIndex: 1, yield: 3.2, avgRent: 45500, demand: 89 },
  { city: 'Mumbai', month: 'Mar', monthIndex: 2, yield: 3.3, avgRent: 46000, demand: 90 },
  { city: 'Mumbai', month: 'Apr', monthIndex: 3, yield: 3.4, avgRent: 46500, demand: 91 },
  { city: 'Mumbai', month: 'May', monthIndex: 4, yield: 3.5, avgRent: 47000, demand: 92 },
  { city: 'Mumbai', month: 'Jun', monthIndex: 5, yield: 3.6, avgRent: 47500, demand: 91 },
  { city: 'Mumbai', month: 'Jul', monthIndex: 6, yield: 3.7, avgRent: 48000, demand: 93 },
  { city: 'Mumbai', month: 'Aug', monthIndex: 7, yield: 3.8, avgRent: 48500, demand: 94 },
  { city: 'Mumbai', month: 'Sep', monthIndex: 8, yield: 3.9, avgRent: 49000, demand: 95 },
  { city: 'Mumbai', month: 'Oct', monthIndex: 9, yield: 4.0, avgRent: 49500, demand: 94 },
  { city: 'Mumbai', month: 'Nov', monthIndex: 10, yield: 4.1, avgRent: 50000, demand: 95 },
  { city: 'Mumbai', month: 'Dec', monthIndex: 11, yield: 4.2, avgRent: 50500, demand: 96 },

  /* ================= PUNE ================= */
  { city: 'Pune', month: 'Jan', monthIndex: 0, yield: 4.5, avgRent: 28000, demand: 80 },
  { city: 'Pune', month: 'Feb', monthIndex: 1, yield: 4.6, avgRent: 28500, demand: 82 },
  { city: 'Pune', month: 'Mar', monthIndex: 2, yield: 4.7, avgRent: 29000, demand: 84 },
  { city: 'Pune', month: 'Apr', monthIndex: 3, yield: 4.8, avgRent: 29500, demand: 86 },
  { city: 'Pune', month: 'May', monthIndex: 4, yield: 4.9, avgRent: 30000, demand: 88 },
  { city: 'Pune', month: 'Jun', monthIndex: 5, yield: 5.0, avgRent: 30500, demand: 87 },
  { city: 'Pune', month: 'Jul', monthIndex: 6, yield: 5.1, avgRent: 31000, demand: 89 },
  { city: 'Pune', month: 'Aug', monthIndex: 7, yield: 5.2, avgRent: 31500, demand: 91 },
  { city: 'Pune', month: 'Sep', monthIndex: 8, yield: 5.3, avgRent: 32000, demand: 92 },
  { city: 'Pune', month: 'Oct', monthIndex: 9, yield: 5.4, avgRent: 32500, demand: 90 },
  { city: 'Pune', month: 'Nov', monthIndex: 10, yield: 5.5, avgRent: 33000, demand: 92 },
  { city: 'Pune', month: 'Dec', monthIndex: 11, yield: 5.6, avgRent: 33500, demand: 94 },

  /* ================= CHENNAI ================= */
  { city: 'Chennai', month: 'Jan', monthIndex: 0, yield: 4.0, avgRent: 26000, demand: 76 },
  { city: 'Chennai', month: 'Feb', monthIndex: 1, yield: 4.1, avgRent: 26500, demand: 78 },
  { city: 'Chennai', month: 'Mar', monthIndex: 2, yield: 4.2, avgRent: 27000, demand: 80 },
  { city: 'Chennai', month: 'Apr', monthIndex: 3, yield: 4.3, avgRent: 27500, demand: 82 },
  { city: 'Chennai', month: 'May', monthIndex: 4, yield: 4.4, avgRent: 28000, demand: 84 },
  { city: 'Chennai', month: 'Jun', monthIndex: 5, yield: 4.5, avgRent: 28500, demand: 83 },
  { city: 'Chennai', month: 'Jul', monthIndex: 6, yield: 4.6, avgRent: 29000, demand: 85 },
  { city: 'Chennai', month: 'Aug', monthIndex: 7, yield: 4.7, avgRent: 29500, demand: 87 },
  { city: 'Chennai', month: 'Sep', monthIndex: 8, yield: 4.8, avgRent: 30000, demand: 88 },
  { city: 'Chennai', month: 'Oct', monthIndex: 9, yield: 4.9, avgRent: 30500, demand: 86 },
  { city: 'Chennai', month: 'Nov', monthIndex: 10, yield: 5.0, avgRent: 31000, demand: 88 },
  { city: 'Chennai', month: 'Dec', monthIndex: 11, yield: 5.1, avgRent: 31500, demand: 90 },

  /* ================= DELHI NCR ================= */
  { city: 'Delhi NCR', month: 'Jan', monthIndex: 0, yield: 3.8, avgRent: 35000, demand: 84 },
  { city: 'Delhi NCR', month: 'Feb', monthIndex: 1, yield: 3.9, avgRent: 35500, demand: 85 },
  { city: 'Delhi NCR', month: 'Mar', monthIndex: 2, yield: 4.0, avgRent: 36000, demand: 87 },
  { city: 'Delhi NCR', month: 'Apr', monthIndex: 3, yield: 4.1, avgRent: 36500, demand: 89 },
  { city: 'Delhi NCR', month: 'May', monthIndex: 4, yield: 4.2, avgRent: 37000, demand: 90 },
  { city: 'Delhi NCR', month: 'Jun', monthIndex: 5, yield: 4.3, avgRent: 37500, demand: 89 },
  { city: 'Delhi NCR', month: 'Jul', monthIndex: 6, yield: 4.4, avgRent: 38000, demand: 91 },
  { city: 'Delhi NCR', month: 'Aug', monthIndex: 7, yield: 4.5, avgRent: 38500, demand: 92 },
  { city: 'Delhi NCR', month: 'Sep', monthIndex: 8, yield: 4.6, avgRent: 39000, demand: 93 },
  { city: 'Delhi NCR', month: 'Oct', monthIndex: 9, yield: 4.7, avgRent: 39500, demand: 91 },
  { city: 'Delhi NCR', month: 'Nov', monthIndex: 10, yield: 4.8, avgRent: 40000, demand: 93 },
  { city: 'Delhi NCR', month: 'Dec', monthIndex: 11, yield: 4.9, avgRent: 40500, demand: 95 },
];



// Comparison Data
export const comparisonData = {
  underConstruction: {
    pricePerSqft: 8500,
    appreciation: 18,
    rentalPotential: 4.2,
    riskLevel: 'Medium',
    possession: '24-36 months',
    recommendation: 'long-term',
  },
  readyToMove: {
    pricePerSqft: 10500,
    appreciation: 8,
    rentalPotential: 5.5,
    riskLevel: 'Low',
    possession: 'Immediate',
    recommendation: 'short-term',
  },
};

// Investment Hotspots
export const investmentHotspots = [
  {
    id: 1,
    name: 'Whitefield',
    city: 'Bangalore',
    appreciation: 24,
    rentalYield: 5.8,
    infrastructureScore: 92,
    salesActivity: 156,
    badge: 'high-growth',
  },
  {
    id: 2,
    name: 'Baner',
    city: 'Pune',
    appreciation: 18,
    rentalYield: 5.2,
    infrastructureScore: 88,
    salesActivity: 142,
    badge: 'emerging',
  },
  {
    id: 3,
    name: 'Gachibowli',
    city: 'Hyderabad',
    appreciation: 22,
    rentalYield: 5.5,
    infrastructureScore: 90,
    salesActivity: 168,
    badge: 'high-growth',
  },
  {
    id: 4,
    name: 'Powai',
    city: 'Mumbai',
    appreciation: 12,
    rentalYield: 4.8,
    infrastructureScore: 95,
    salesActivity: 98,
    badge: 'stable',
  },
  {
    id: 5,
    name: 'Sector 150',
    city: 'Noida',
    appreciation: 20,
    rentalYield: 4.5,
    infrastructureScore: 85,
    salesActivity: 124,
    badge: 'emerging',
  },
  {
    id: 6,
    name: 'OMR',
    city: 'Chennai',
    appreciation: 16,
    rentalYield: 5.0,
    infrastructureScore: 87,
    salesActivity: 112,
    badge: 'stable',
  },
];

// City Comparison Data with Localities
export interface LocalityData {
  name: string;
  avgPrice: number;
  priceChange: number;
  avgRent: number;
  rentChange: number;
  demandScore: number;
}

export interface CityWithLocalities {
  city: string;
  searchDemand: number;
  salesVolume: number;
  rentalInquiries: number;
  yoyChange: number;
  qoqChange: number;
  localities: LocalityData[];
}

export const cityComparisonData: CityWithLocalities[] = [
  { 
    city: 'Mumbai', 
    searchDemand: 95, 
    salesVolume: 8500, 
    rentalInquiries: 12000,
    yoyChange: 12.5,
    qoqChange: 3.2,
    localities: [
      { name: 'Powai', avgPrice: 18500, priceChange: 8.2, avgRent: 45000, rentChange: 5.1, demandScore: 92 },
      { name: 'Andheri West', avgPrice: 22000, priceChange: 6.8, avgRent: 52000, rentChange: 4.2, demandScore: 88 },
      { name: 'Bandra', avgPrice: 42000, priceChange: 4.5, avgRent: 85000, rentChange: 3.8, demandScore: 95 },
      { name: 'Lower Parel', avgPrice: 35000, priceChange: 7.2, avgRent: 72000, rentChange: 6.1, demandScore: 90 },
    ]
  },
  { 
    city: 'Bangalore', 
    searchDemand: 92, 
    salesVolume: 9200, 
    rentalInquiries: 14500,
    yoyChange: 18.2,
    qoqChange: 5.8,
    localities: [
      { name: 'Whitefield', avgPrice: 10500, priceChange: 24.5, avgRent: 32000, rentChange: 12.3, demandScore: 96 },
      { name: 'Electronic City', avgPrice: 7200, priceChange: 15.8, avgRent: 22000, rentChange: 8.5, demandScore: 85 },
      { name: 'Koramangala', avgPrice: 15800, priceChange: 10.2, avgRent: 42000, rentChange: 7.2, demandScore: 94 },
      { name: 'HSR Layout', avgPrice: 12500, priceChange: 18.6, avgRent: 35000, rentChange: 9.8, demandScore: 91 },
    ]
  },
  { 
    city: 'Hyderabad', 
    searchDemand: 88, 
    salesVolume: 7800, 
    rentalInquiries: 11000,
    yoyChange: 22.4,
    qoqChange: 6.5,
    localities: [
      { name: 'Gachibowli', avgPrice: 9800, priceChange: 22.8, avgRent: 28000, rentChange: 10.5, demandScore: 94 },
      { name: 'HITEC City', avgPrice: 11200, priceChange: 18.5, avgRent: 32000, rentChange: 8.2, demandScore: 92 },
      { name: 'Kondapur', avgPrice: 8500, priceChange: 20.1, avgRent: 25000, rentChange: 9.8, demandScore: 88 },
      { name: 'Financial District', avgPrice: 12500, priceChange: 15.2, avgRent: 35000, rentChange: 7.5, demandScore: 90 },
    ]
  },
  { 
    city: 'Pune', 
    searchDemand: 82, 
    salesVolume: 6500, 
    rentalInquiries: 9800,
    yoyChange: 14.8,
    qoqChange: 4.2,
    localities: [
      { name: 'Baner', avgPrice: 9200, priceChange: 18.5, avgRent: 26000, rentChange: 8.2, demandScore: 90 },
      { name: 'Hinjewadi', avgPrice: 7800, priceChange: 22.3, avgRent: 22000, rentChange: 10.5, demandScore: 88 },
      { name: 'Kharadi', avgPrice: 8500, priceChange: 16.8, avgRent: 24000, rentChange: 7.8, demandScore: 85 },
      { name: 'Wakad', avgPrice: 7200, priceChange: 14.2, avgRent: 20000, rentChange: 6.5, demandScore: 82 },
    ]
  },
  { 
    city: 'Chennai', 
    searchDemand: 78, 
    salesVolume: 5800, 
    rentalInquiries: 8500,
    yoyChange: 10.5,
    qoqChange: 2.8,
    localities: [
      { name: 'OMR', avgPrice: 7500, priceChange: 16.2, avgRent: 22000, rentChange: 7.5, demandScore: 86 },
      { name: 'Velachery', avgPrice: 8200, priceChange: 8.5, avgRent: 24000, rentChange: 4.2, demandScore: 82 },
      { name: 'Porur', avgPrice: 6800, priceChange: 12.8, avgRent: 18000, rentChange: 5.8, demandScore: 78 },
      { name: 'Sholinganallur', avgPrice: 7000, priceChange: 14.5, avgRent: 20000, rentChange: 6.2, demandScore: 84 },
    ]
  },
  { 
    city: 'Delhi NCR', 
    searchDemand: 90, 
    salesVolume: 8800, 
    rentalInquiries: 13200,
    yoyChange: 15.2,
    qoqChange: 4.5,
    localities: [
      { name: 'Sector 150, Noida', avgPrice: 8200, priceChange: 20.5, avgRent: 25000, rentChange: 9.2, demandScore: 88 },
      { name: 'Dwarka Expressway', avgPrice: 9500, priceChange: 25.8, avgRent: 28000, rentChange: 12.5, demandScore: 92 },
      { name: 'Golf Course Road', avgPrice: 22000, priceChange: 10.2, avgRent: 55000, rentChange: 5.8, demandScore: 94 },
      { name: 'Greater Noida', avgPrice: 5800, priceChange: 18.2, avgRent: 16000, rentChange: 8.5, demandScore: 80 },
    ]
  },
];

// Filter Options
export const cities = ['All Cities', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Delhi NCR'];
export const propertyTypes = ['All Types', 'Apartment', 'Villa', 'Commercial'];
export const timeRanges = ['Last 3 Months', 'Last 6 Months', 'Last 12 Months', '2 Years', '5 Years'];

// Investment Insights
export interface InvestmentInsight {
  id: string;
  type: 'short-term' | 'long-term' | 'general';
  title: string;
  description: string;
  recommendation: string;
  confidence: number;
  metrics: {
    label: string;
    value: string;
  }[];
}

export const investmentInsights: InvestmentInsight[] = [
  {
    id: '1',
    type: 'short-term',
    title: 'Ready-to-Move Properties in Mumbai',
    description: 'Immediate rental income opportunity with stable appreciation. Ideal for investors seeking consistent monthly returns.',
    recommendation: 'BUY',
    confidence: 85,
    metrics: [
      { label: 'Expected ROI', value: '8-12%' },
      { label: 'Rental Yield', value: '4.8%' },
      { label: 'Payback Period', value: '18-24 months' },
    ],
  },
  {
    id: '2',
    type: 'long-term',
    title: 'Under-Construction in Hyderabad IT Corridor',
    description: 'High appreciation potential with upcoming metro connectivity and IT expansion. Best for wealth creation over 5+ years.',
    recommendation: 'STRONG BUY',
    confidence: 92,
    metrics: [
      { label: 'Expected Appreciation', value: '18-25%' },
      { label: 'Infrastructure Growth', value: 'High' },
      { label: 'Break-even', value: '3-4 years' },
    ],
  },
  {
    id: '3',
    type: 'general',
    title: 'Bangalore Whitefield Remains Top Pick',
    description: 'Consistent performer across all metrics. Strong rental demand from IT professionals and excellent resale value.',
    recommendation: 'ACCUMULATE',
    confidence: 88,
    metrics: [
      { label: 'Demand Score', value: '96/100' },
      { label: 'Price Stability', value: 'High' },
      { label: 'Liquidity', value: 'Excellent' },
    ],
  },
  {
    id: '4',
    type: 'short-term',
    title: 'Pune Rental Market Opportunity',
    description: 'Growing IT presence driving rental demand. Quick leasing with minimal vacancy periods.',
    recommendation: 'BUY',
    confidence: 78,
    metrics: [
      { label: 'Avg. Vacancy', value: '< 15 days' },
      { label: 'Tenant Quality', value: 'High' },
      { label: 'Rental Growth', value: '8-10%' },
    ],
  },
];

// Data Methodology
export const dataMethodology = {
  demandScore: {
    title: 'Demand Score',
    description: 'A composite metric (0-100) measuring real-time market interest and activity.',
    calculation: 'Calculated using: Search volume (40%), Property inquiries (30%), Site visits (20%), and Transaction velocity (10%).',
    dataSource: 'Aggregated from major property portals, broker networks, and transaction registries.',
    updateFrequency: 'Updated weekly',
  },
  appreciation: {
    title: 'Appreciation %',
    description: 'Year-over-year percentage change in average property prices per square foot.',
    calculation: 'Formula: ((Current Avg Price - Previous Year Avg Price) / Previous Year Avg Price) × 100',
    dataSource: 'Based on registered sale deeds, project launches, and resale transactions.',
    updateFrequency: 'Updated monthly',
  },
  infrastructureScore: {
    title: 'Infrastructure Score',
    description: 'Rating (0-100) of existing and upcoming infrastructure quality.',
    calculation: 'Weighted average of: Connectivity (35%), Social amenities (25%), Commercial hubs (25%), and Future projects (15%).',
    dataSource: 'Government development plans, municipal data, and on-ground surveys.',
    updateFrequency: 'Updated quarterly',
  },
  rentalYield: {
    title: 'Rental Yield',
    description: 'Annual rental income as a percentage of property value.',
    calculation: 'Formula: (Annual Rent / Property Value) × 100',
    dataSource: 'Rental listings, lease agreements, and property management data.',
    updateFrequency: 'Updated monthly',
  },
};