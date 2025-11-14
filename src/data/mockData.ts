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
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
}

export const exclusivePrecon: PropertyListing[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    badge: 'Exclusive Assignment',
    badgeColor: 'green',
    status: 'For Sale',
    price: 933500,
    date: '2024-01-30',
    address: '1 Promenade Circle, Markham - Thornhill',
    type: 'Condo Apt',
    beds: '2+1',
    baths: 2,
    parking: 1,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    badge: 'Exclusive Assignment',
    badgeColor: 'green',
    status: 'For Sale',
    price: 1118000,
    date: '2025-09-18',
    address: '292 Dundas St W, Toronto, Toronto - Junction',
    type: 'Condo Apt',
    beds: 3,
    baths: 2,
    parking: 1,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    badge: 'Exclusive Assignment',
    badgeColor: 'green',
    status: 'For Sale',
    price: 499999,
    date: '2023-10-31',
    address: '286 Main St, Toronto - East End-Danforth',
    type: 'Condo Apt',
    beds: 1,
    baths: 1,
    parking: 0,
  },
];

export const newlyListed: PropertyListing[] = [
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    status: 'For Sale',
    price: 459000,
    date: '34 minutes ago',
    address: '117 - 85B Morrell Street, Brantford',
    type: 'Condo/Apt Unit',
    beds: 2,
    baths: 2,
    parking: 0,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    status: 'For Sale',
    price: 652900,
    date: '34 minutes ago',
    address: '217 North Street E, Tillsonburg',
    type: 'Single Family Residence',
    beds: '2+2',
    baths: 3,
    parking: 1,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    status: 'For Sale',
    price: 399900,
    date: '34 minutes ago',
    address: '902 - 9 Bonheur Court, Brantford',
    type: 'Condo/Apt Unit',
    beds: 2,
    baths: 1,
    parking: 0,
  },
];

export const rentalInvestment: PropertyListing[] = [
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
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
    id: '8',
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80',
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
    id: '9',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
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

export const bestForSchools: PropertyListing[] = [
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    badge: 'School Score: 10/10',
    badgeColor: 'blue',
    status: 'For Sale',
    price: 1898000,
    date: '3 days ago',
    address: '26 Brantwood Court, Markham - Unionville',
    type: 'Detached',
    beds: '4+2',
    baths: 4,
    parking: 2,
    agent: 'N12531354, RE/MAX REALTRON REALTY INC.',
  },
  {
    id: '11',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    badge: 'School Score: 10/10',
    badgeColor: 'blue',
    status: 'For Sale',
    price: 728000,
    date: '4 days ago',
    address: '536 - 33 Cox Boulevard, Markham - Union',
    type: 'Condo Apartment',
    beds: 2,
    baths: 2,
    parking: 1,
    agent: 'N12526384, RE/MAX ALL-STARS REALTY INC.',
  },
  {
    id: '12',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    badge: 'School Score: 10/10',
    badgeColor: 'blue',
    status: 'For Sale',
    price: 1490000,
    date: '6 days ago',
    address: '48 John Button Boulevard, Markham - Butt',
    type: 'Detached',
    beds: '4+1',
    baths: 4,
    parking: 2,
    agent: 'N12522550, RE/MAX ELITE REAL ESTATE',
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
