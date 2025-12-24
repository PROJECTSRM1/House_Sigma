export const propertyData = [
  // =======================
  // PROPERTY 1
  // =======================
  {
    id: "1",
    title: "117 morell street",
    city: "Brantford",
    area: "Waterdown",
    community: "West Flamborough",
    province: "ON",
    propertyType: "Independent House",
    constructionStatus: "Ready-to-Move",
    price: 1250000,
    builtUpArea: 2850,
    plotArea: 4200,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 6840,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
      { name: "Power Backup", available: true },
      { name: "Parking", available: true },
      { name: "Garden", available: true },
    ],
    valuation: {
      marketValue: 1280000,
      sellerPrice: 1250000,
      expectedPrice: 1220000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Dundas Central Public School", rating: 8.5, distance: 0.8 },
      ],
      colleges: [
        { name: "McMaster University", rating: 9.2, distance: 8.5 },
      ],
      hospitals: [
        { name: "Hamilton Health Sciences", rating: 9.0, distance: 6.2 },
      ],
      shopping: [
        { name: "Dundas Town Centre", rating: 7.5, distance: 0.5 },
      ],
    },
  },

  // =======================
  // PROPERTY 2 – Tillsonburg
  // =======================
  {
    id: "2",
    title: "217 North Street East",
    city: "Tillsonburg",
    area: "Downtown",
    community: "Norfolk County",
    province: "ON",
    propertyType: "Single Family Residence",
    constructionStatus: "Ready-to-Move",
    price: 652900,
    builtUpArea: 2100,
    plotArea: 3600,
    bedrooms: 4,
    bathrooms: 3,
    parking: 1,
    propertyTax: 5120,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Security", available: true },
      { name: "Parking", available: true },
      { name: "Power Backup", available: false },
    ],
    valuation: {
      marketValue: 670000,
      sellerPrice: 652900,
      expectedPrice: 640000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Tillsonburg Public School", rating: 8.1, distance: 1.1 },
      ],
      hospitals: [
        { name: "Tillsonburg District Memorial Hospital", rating: 8.7, distance: 2.3 },
      ],
      shopping: [
        { name: "Tillsonburg Mall", rating: 7.6, distance: 1.8 },
      ],
    },
  },

  // =======================
  // PROPERTY 3 – Brantford Condo
  // =======================
  {
    id: "3",
    title: "902 - 9 Bonheur Court",
    city: "Brantford",
    area: "North End",
    community: "Bonheur Heights",
    province: "ON",
    propertyType: "Condo Apartment",
    constructionStatus: "Ready-to-Move",
    price: 399900,
    builtUpArea: 1100,
    plotArea: 0,
    bedrooms: 2,
    bathrooms: 1,
    parking: 0,
    propertyTax: 2980,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600585154207-3a6f0d3fdc48?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337236-688c6f77c7d5?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: false },
    ],
    valuation: {
      marketValue: 410000,
      sellerPrice: 399900,
      expectedPrice: 390000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "St. Johns College", rating: 7.8, distance: 1.4 },
      ],
      hospitals: [
        { name: "Brantford General Hospital", rating: 8.6, distance: 3.2 },
      ],
      shopping: [
        { name: "Lynden Park Mall", rating: 7.9, distance: 2.5 },
      ],
    },
  },

  // =======================
  // PROPERTY 4 – Brampton Townhouse
  // =======================
  {
    id: "4",
    title: "20 Haymarket Drive",
    city: "Brampton",
    area: "Northwest",
    community: "Mount Pleasant",
    province: "ON",
    propertyType: "Freehold Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 499000,
    builtUpArea: 1650,
    plotArea: 2200,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 4580,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600585154154-12a7d9b9a40b?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 520000,
      sellerPrice: 499000,
      expectedPrice: 490000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Mount Pleasant Public School", rating: 8.3, distance: 0.9 },
      ],
      hospitals: [
        { name: "Brampton Civic Hospital", rating: 8.9, distance: 5.6 },
      ],
      shopping: [
        { name: "Trinity Common Mall", rating: 8.1, distance: 4.2 },
      ],
    },
  },

  // =======================
  // PROPERTY 5 – Toronto Semi-Detached
  // =======================
  {
    id: "5",
    title: "370 Coxwell Avenue",
    city: "Toronto",
    area: "Greenwood",
    community: "East York",
    province: "ON",
    propertyType: "Semi-Detached",
    constructionStatus: "Ready-to-Move",
    price: 699000,
    builtUpArea: 1800,
    plotArea: 2500,
    bedrooms: 4,
    bathrooms: 2,
    parking: 0,
    propertyTax: 6100,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
      "https://images.unsplash.com/photo-1600573472780-1a9c4d99d9d4?w=1200",
      "https://images.unsplash.com/photo-1600585153900-3774e7fae7b9?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Security", available: true },
      { name: "Garden", available: true },
    ],
    valuation: {
      marketValue: 725000,
      sellerPrice: 699000,
      expectedPrice: 690000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Greenwood Secondary School", rating: 8.4, distance: 0.7 },
      ],
      hospitals: [
        { name: "Michael Garron Hospital", rating: 8.8, distance: 3.9 },
      ],
      shopping: [
        { name: "Danforth Shops", rating: 8.6, distance: 0.6 },
      ],
    },
  },

  // =======================
  // PROPERTY 6 – Nepean Townhouse
  // =======================
  {
    id: "6",
    title: "602 Seyton Drive",
    city: "Nepean",
    area: "Westcliffe Estates",
    community: "Ottawa West",
    province: "ON",
    propertyType: "Freehold Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 450000,
    builtUpArea: 1550,
    plotArea: 2100,
    bedrooms: 3,
    bathrooms: 2,
    parking: 0,
    propertyTax: 4320,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600607687630-3c2f44b6fa5c?w=1200",
      "https://images.unsplash.com/photo-1600585154084-4bba43c6c9a3?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336954-9a60a0f01c45?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 470000,
      sellerPrice: 450000,
      expectedPrice: 440000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Westcliffe Public School", rating: 8.0, distance: 1.0 },
      ],
      hospitals: [
        { name: "Queensway Carleton Hospital", rating: 8.7, distance: 6.4 },
      ],
      shopping: [
        { name: "Bayshore Shopping Centre", rating: 8.5, distance: 5.9 },
      ],
    },
  },

  // =======================
  // PROPERTY 7–12 (Featured + Sold) – SHORTER DEMO
  // =======================
  {
    id: "7",
    title: "26 Brantwood Court",
    city: "Markham",
    area: "Unionville",
    community: "Historic Unionville",
    province: "ON",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 1898000,
    builtUpArea: 3200,
    plotArea: 5200,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    propertyTax: 11200,
    images: [
      "https://images.unsplash.com/photo-1600585154345-81d8b9e87b40?w=1200",
      "https://images.unsplash.com/photo-1600607687936-4f4c9d46c3f6?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336981-1d2f73bde3c6?w=900",
    amenities: [{ name: "Garden", available: true }],
    valuation: {
      marketValue: 1920000,
      sellerPrice: 1898000,
      expectedPrice: 1880000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Unionville High School", rating: 9.1, distance: 1.2 }],
      hospitals: [{ name: "Markham Stouffville Hospital", rating: 8.9, distance: 4.7 }],
      shopping: [{ name: "Markville Mall", rating: 8.6, distance: 3.5 }],
    },
  },
  // =======================
  // PROPERTY 8 – Markham Condo Apartment
  // =======================
  {
    id: "8",
    title: "536 - 33 Cox Boulevard",
    city: "Markham",
    area: "Union",
    community: "Downtown Markham",
    province: "ON",
    propertyType: "Condo Apartment",
    constructionStatus: "Ready-to-Move",
    price: 728000,
    builtUpArea: 1450,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 5480,
    images: [
      "https://images.unsplash.com/photo-1600607688066-890987f18c4a?w=1200",
      "https://images.unsplash.com/photo-1600585154203-1c7d40c9e3bb?w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6c42c7f60f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337162-bd0f1d29c11a?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
      { name: "Power Backup", available: true },
    ],
    valuation: {
      marketValue: 750000,
      sellerPrice: 728000,
      expectedPrice: 720000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Markham District High School", rating: 8.8, distance: 1.1 },
      ],
      hospitals: [
        { name: "Markham Stouffville Hospital", rating: 9.0, distance: 4.9 },
      ],
      shopping: [
        { name: "Downtown Markham Shops", rating: 8.4, distance: 0.6 },
      ],
    },
  },

  // =======================
  // PROPERTY 9 – Markham Detached House
  // =======================
  {
    id: "9",
    title: "48 John Button Boulevard",
    city: "Markham",
    area: "Buttonville",
    community: "Buttonville Estates",
    province: "ON",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 1490000,
    builtUpArea: 2950,
    plotArea: 4800,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    propertyTax: 9800,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600573472784-bd49c6c2a4b4?w=1200",
      "https://images.unsplash.com/photo-1600607687618-3ae9c88dbb0f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336999-1b9e8a5c10d4?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 1520000,
      sellerPrice: 1490000,
      expectedPrice: 1470000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Buttonville Public School", rating: 8.6, distance: 0.9 },
      ],
      hospitals: [
        { name: "Shouldice Hospital", rating: 8.7, distance: 6.1 },
      ],
      shopping: [
        { name: "First Markham Place", rating: 8.8, distance: 3.2 },
      ],
    },
  },

  // =======================
  // PROPERTY 10 – Sold Detached (Markham)
  // =======================
  {
    id: "10",
    title: "26 Brantwood Court",
    city: "Markham",
    area: "Unionville",
    community: "Historic Unionville",
    province: "ON",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 1898000,
    builtUpArea: 3300,
    plotArea: 5400,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    propertyTax: 11350,
    images: [
      "https://images.unsplash.com/photo-1600585154345-81d8b9e87b40?w=1200",
      "https://images.unsplash.com/photo-1600607687935-9fef6f70d0d8?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337011-9fa8b1e1c44d?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 1920000,
      sellerPrice: 1898000,
      expectedPrice: 1885000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Unionville High School", rating: 9.1, distance: 1.3 },
      ],
      hospitals: [
        { name: "Markham Stouffville Hospital", rating: 8.9, distance: 4.8 },
      ],
      shopping: [
        { name: "Unionville Main Street Shops", rating: 8.7, distance: 0.5 },
      ],
    },
  },

  // =======================
  // PROPERTY 11 – Sold Condo Apartment
  // =======================
  {
    id: "11",
    title: "536 - 33 Cox Boulevard",
    city: "Markham",
    area: "Union",
    community: "Downtown Markham",
    province: "ON",
    propertyType: "Condo Apartment",
    constructionStatus: "Ready-to-Move",
    price: 728000,
    builtUpArea: 1400,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 5400,
    images: [
      "https://images.unsplash.com/photo-1600607688090-4f7b3a5c27de?w=1200",
      "https://images.unsplash.com/photo-1600585154116-3c40c1e1a9a8?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337034-f6bba7a67a7c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 740000,
      sellerPrice: 728000,
      expectedPrice: 725000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Markham District High School", rating: 8.7, distance: 1.2 },
      ],
      hospitals: [
        { name: "Markham Stouffville Hospital", rating: 8.9, distance: 4.9 },
      ],
      shopping: [
        { name: "CF Markville", rating: 8.6, distance: 3.4 },
      ],
    },
  },

  // =======================
  // PROPERTY 12 – Sold Detached (Markham)
  // =======================
  {
    id: "12",
    title: "48 John Button Boulevard",
    city: "Markham",
    area: "Buttonville",
    community: "Buttonville Estates",
    province: "ON",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 1490000,
    builtUpArea: 3050,
    plotArea: 4900,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    propertyTax: 9950,
    images: [
      "https://images.unsplash.com/photo-1600585154206-4b6c3e19b0d4?w=1200",
      "https://images.unsplash.com/photo-1600607687601-dacac1b33a88?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337069-0b7c97a0f59b?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 1505000,
      sellerPrice: 1490000,
      expectedPrice: 1480000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Buttonville Public School", rating: 8.5, distance: 1.0 },
      ],
      hospitals: [
        { name: "Shouldice Hospital", rating: 8.6, distance: 6.0 },
      ],
      shopping: [
        { name: "First Markham Place", rating: 8.7, distance: 3.1 },
      ],
    },
  },

    // =======================
  // PROPERTY 13 – Edmonton Apartment
  // =======================
  {
    id: "13",
    title: "108 - 11040 129 Street NW",
    city: "Edmonton",
    area: "Westminster",
    community: "North Central Edmonton",
    province: "BC",
    propertyType: "Apartment",
    constructionStatus: "Ready-to-Move",
    price: 63900,
    builtUpArea: 650,
    plotArea: 0,
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    propertyTax: 1200,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 70000,
      sellerPrice: 63900,
      expectedPrice: 65000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Westminster School", rating: 7.6, distance: 0.9 }],
      hospitals: [{ name: "Royal Alexandra Hospital", rating: 8.8, distance: 3.4 }],
      shopping: [{ name: "Kingsway Mall", rating: 8.2, distance: 2.6 }],
    },
  },

  // =======================
  // PROPERTY 14 – Edmonton Condo Townhouse
  // =======================
  {
    id: "14",
    title: "475 Dunluce Road NW",
    city: "Edmonton",
    area: "Dunluce",
    community: "Castle Downs",
    province: "BC",
    propertyType: "Condo Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 250000,
    builtUpArea: 1350,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    propertyTax: 3100,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
      "https://images.unsplash.com/photo-1600585154154-12a7d9b9a40b?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 265000,
      sellerPrice: 250000,
      expectedPrice: 248000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Dunluce School", rating: 7.9, distance: 0.6 }],
      hospitals: [{ name: "Misericordia Hospital", rating: 8.5, distance: 6.2 }],
      shopping: [{ name: "Northgate Centre", rating: 8.0, distance: 3.8 }],
    },
  },

  // =======================
  // PROPERTY 15 – Lac La Biche Detached
  // =======================
  {
    id: "15",
    title: "10132 105 Street",
    city: "Lac La Biche",
    area: "Town Centre",
    community: "Lac La Biche County",
    province: "BC",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 352900,
    builtUpArea: 1750,
    plotArea: 4600,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    propertyTax: 2850,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600573472784-bd49c6c2a4b4?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 365000,
      sellerPrice: 352900,
      expectedPrice: 350000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Lac La Biche School", rating: 7.8, distance: 1.2 }],
      hospitals: [{ name: "Lac La Biche Hospital", rating: 8.4, distance: 2.1 }],
      shopping: [{ name: "Portage College Shops", rating: 7.5, distance: 1.6 }],
    },
  },

  // =======================
  // PROPERTY 16 – Edmonton Detached (Featured)
  // =======================
  {
    id: "16",
    title: "1921 119A Street SW",
    city: "Edmonton",
    area: "Rutherford",
    community: "South Edmonton",
    province: "BC",
    propertyType: "Detached Single Family",
    constructionStatus: "Ready-to-Move",
    price: 539900,
    builtUpArea: 2150,
    plotArea: 3900,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    propertyTax: 5200,
    images: [
      "https://images.unsplash.com/photo-1600585154345-81d8b9e87b40?w=1200",
      "https://images.unsplash.com/photo-1600607687936-4f4c9d46c3f6?w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6c42c7f60f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336981-1d2f73bde3c6?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 565000,
      sellerPrice: 539900,
      expectedPrice: 535000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Johnny Bright School", rating: 8.3, distance: 1.0 }],
      hospitals: [{ name: "Grey Nuns Hospital", rating: 8.7, distance: 5.1 }],
      shopping: [{ name: "South Edmonton Common", rating: 8.9, distance: 4.6 }],
    },
  },

  // =======================
  // PROPERTY 17 – Edmonton Duplex (Featured)
  // =======================
  {
    id: "17",
    title: "2095 Maple Road NW",
    city: "Edmonton",
    area: "Meadows Area",
    community: "The Meadows",
    province: "BC",
    propertyType: "Duplex",
    constructionStatus: "Ready-to-Move",
    price: 499000,
    builtUpArea: 2450,
    plotArea: 4100,
    bedrooms: 5,
    bathrooms: 3,
    parking: 2,
    propertyTax: 5600,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600585154084-4bba43c6c9a3?w=1200",
      "https://images.unsplash.com/photo-1600607687630-3c2f44b6fa5c?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336954-9a60a0f01c45?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 525000,
      sellerPrice: 499000,
      expectedPrice: 495000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Maple Crest School", rating: 8.1, distance: 1.3 }],
      hospitals: [{ name: "Grey Nuns Hospital", rating: 8.7, distance: 6.0 }],
      shopping: [{ name: "Meadows Rec Centre", rating: 8.0, distance: 2.2 }],
    },
  },

  // =======================
  // PROPERTY 18 – Edmonton Townhouse (Featured)
  // =======================
  {
    id: "18",
    title: "5344 38A Avenue NW",
    city: "Edmonton",
    area: "Greenview",
    community: "Mill Woods",
    province: "BC",
    propertyType: "Condo Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 299900,
    builtUpArea: 1450,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    propertyTax: 3400,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600585154203-1c7d40c9e3bb?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337162-bd0f1d29c11a?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 315000,
      sellerPrice: 299900,
      expectedPrice: 295000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Greenview School", rating: 7.7, distance: 0.8 }],
      hospitals: [{ name: "Mill Woods Hospital", rating: 8.4, distance: 4.3 }],
      shopping: [{ name: "Mill Woods Town Centre", rating: 8.1, distance: 3.1 }],
    },
  },

    // =======================
  // PROPERTY 19 – Sold Detached (Calgary – Kingsland)
  // =======================
  {
    id: "19",
    title: "45 Kingsway Crescent SW",
    city: "Calgary",
    area: "Kingsland",
    community: "Southwest Calgary",
    province: "BC",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 685000,
    builtUpArea: 2450,
    plotArea: 4800,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 7200,
    images: [
      "https://images.unsplash.com/photo-1600585154345-81d8b9e87b40?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6c42c7f60f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336999-1b9e8a5c10d4?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 690000,
      sellerPrice: 685000,
      expectedPrice: 680000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Kingsland School", rating: 8.1, distance: 0.9 },
      ],
      hospitals: [
        { name: "Rockyview General Hospital", rating: 8.9, distance: 4.8 },
      ],
      shopping: [
        { name: "Chinook Centre", rating: 9.0, distance: 2.6 },
      ],
    },
  },

  // =======================
  // PROPERTY 20 – Sold Duplex (Edmonton – Aspen Gardens)
  // =======================
  {
    id: "20",
    title: "210 Aspen Glen Drive",
    city: "Edmonton",
    area: "Aspen Gardens",
    community: "Southwest Edmonton",
    province: "BC",
    propertyType: "Duplex",
    constructionStatus: "Ready-to-Move",
    price: 520000,
    builtUpArea: 2100,
    plotArea: 3600,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 5600,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600585154084-4bba43c6c9a3?w=1200",
      "https://images.unsplash.com/photo-1600607687630-3c2f44b6fa5c?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336954-9a60a0f01c45?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 525000,
      sellerPrice: 520000,
      expectedPrice: 515000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Lansdowne School", rating: 8.4, distance: 1.1 },
      ],
      hospitals: [
        { name: "University of Alberta Hospital", rating: 9.1, distance: 5.2 },
      ],
      shopping: [
        { name: "Southgate Centre", rating: 8.7, distance: 3.9 },
      ],
    },
  },

  // =======================
  // PROPERTY 21 – Sold Townhouse (Calgary – Harvest Hills)
  // =======================
  {
    id: "21",
    title: "78 Harvest Hills Road NE",
    city: "Calgary",
    area: "Harvest Hills",
    community: "North Calgary",
    province: "BC",
    propertyType: "Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 399900,
    builtUpArea: 1650,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    propertyTax: 4100,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600585154203-1c7d40c9e3bb?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337162-bd0f1d29c11a?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 405000,
      sellerPrice: 399900,
      expectedPrice: 395000,
      status: "fair",
    },
    nearby: {
      schools: [
        { name: "Harvest Hills School", rating: 7.9, distance: 0.8 },
      ],
      hospitals: [
        { name: "Peter Lougheed Centre", rating: 8.7, distance: 6.1 },
      ],
      shopping: [
        { name: "Country Hills Town Centre", rating: 8.2, distance: 2.4 },
      ],
    },
  },

  // =======================
  // PROPERTY 22 – Rental Condo (Calgary – Renton)
  // =======================
  {
    id: "22",
    title: "2204 Renton Park NW",
    city: "Calgary",
    area: "Renton",
    community: "Northwest Calgary",
    province: "BC",
    propertyType: "Condo",
    constructionStatus: "Ready-to-Move",
    price: 449900,
    builtUpArea: 1200,
    plotArea: 0,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    propertyTax: 3600,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 465000,
      sellerPrice: 449900,
      expectedPrice: 445000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Renton School", rating: 7.8, distance: 0.7 },
      ],
      hospitals: [
        { name: "Foothills Medical Centre", rating: 9.0, distance: 5.8 },
      ],
      shopping: [
        { name: "Market Mall", rating: 8.6, distance: 4.2 },
      ],
    },
  },

  // =======================
  // PROPERTY 23 – Rental Townhouse (Edmonton – Capital View)
  // =======================
  {
    id: "23",
    title: "18 Capital Yield Lane",
    city: "Edmonton",
    area: "Capital View",
    community: "West Edmonton",
    province: "BC",
    propertyType: "Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 389000,
    builtUpArea: 1750,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 3900,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 405000,
      sellerPrice: 389000,
      expectedPrice: 385000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Jasper Place School", rating: 8.0, distance: 1.0 },
      ],
      hospitals: [
        { name: "Misericordia Hospital", rating: 8.6, distance: 4.7 },
      ],
      shopping: [
        { name: "West Edmonton Mall", rating: 9.3, distance: 3.9 },
      ],
    },
  },

  // =======================
  // PROPERTY 24 – Rental Duplex (Calgary – Ridgeview)
  // =======================
  {
    id: "24",
    title: "347 Investment Ridge SW",
    city: "Calgary",
    area: "Ridgeview",
    community: "Southwest Calgary",
    province: "BC",
    propertyType: "Duplex",
    constructionStatus: "Ready-to-Move",
    price: 510500,
    builtUpArea: 2300,
    plotArea: 4200,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 6100,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687618-3ae9c88dbb0f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 535000,
      sellerPrice: 510500,
      expectedPrice: 505000,
      status: "underpriced",
    },
    nearby: {
      schools: [
        { name: "Ridgeview School", rating: 8.2, distance: 1.2 },
      ],
      hospitals: [
        { name: "Rockyview General Hospital", rating: 8.9, distance: 6.4 },
      ],
      shopping: [
        { name: "Signal Hill Centre", rating: 8.4, distance: 4.1 },
      ],
    },
  },

    // =======================
  // PROPERTY 25 – Calgary Detached
  // =======================
  {
    id: "25",
    title: "112 Aspen Summit Drive SW",
    city: "Calgary",
    area: "Aspen Woods",
    community: "West Calgary",
    province: "AB",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 985000,
    builtUpArea: 3100,
    plotArea: 5200,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 9400,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687618-3ae9c88dbb0f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 1010000,
      sellerPrice: 985000,
      expectedPrice: 980000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Webber Academy", rating: 9.0, distance: 1.8 }],
      hospitals: [{ name: "Foothills Medical Centre", rating: 9.1, distance: 6.9 }],
      shopping: [{ name: "Aspen Landing", rating: 8.5, distance: 2.1 }],
    },
  },

  // =======================
  // PROPERTY 26 – Edmonton Condo
  // =======================
  {
    id: "26",
    title: "905 - 10135 Saskatchewan Drive",
    city: "Edmonton",
    area: "Strathcona",
    community: "Old Strathcona",
    province: "AB",
    propertyType: "Condo Apartment",
    constructionStatus: "Ready-to-Move",
    price: 329000,
    builtUpArea: 980,
    plotArea: 0,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    propertyTax: 3900,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 345000,
      sellerPrice: 329000,
      expectedPrice: 325000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Strathcona High School", rating: 8.6, distance: 1.0 }],
      hospitals: [{ name: "University of Alberta Hospital", rating: 9.2, distance: 2.3 }],
      shopping: [{ name: "Whyte Avenue", rating: 9.1, distance: 0.4 }],
    },
  },

  // =======================
  // PROPERTY 27 – Airdrie Townhouse
  // =======================
  {
    id: "27",
    title: "84 Kingsbury Close SE",
    city: "Airdrie",
    area: "Kings Heights",
    community: "East Airdrie",
    province: "AB",
    propertyType: "Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 415000,
    builtUpArea: 1650,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 4200,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 430000,
      sellerPrice: 415000,
      expectedPrice: 410000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Kings Heights School", rating: 8.3, distance: 0.9 }],
      hospitals: [{ name: "Airdrie Community Health", rating: 8.2, distance: 3.5 }],
      shopping: [{ name: "Sierra Springs", rating: 8.0, distance: 2.8 }],
    },
  },

  // =======================
  // PROPERTY 28 – Red Deer Detached
  // =======================
  {
    id: "28",
    title: "14 Lancaster Crescent",
    city: "Red Deer",
    area: "Lancaster",
    community: "North Red Deer",
    province: "AB",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 465000,
    builtUpArea: 2200,
    plotArea: 4700,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 5100,
    images: [
      "https://images.unsplash.com/photo-1600585154345-81d8b9e87b40?w=1200",
      "https://images.unsplash.com/photo-1600607687936-4f4c9d46c3f6?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336981-1d2f73bde3c6?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 480000,
      sellerPrice: 465000,
      expectedPrice: 460000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Lancaster School", rating: 7.9, distance: 1.1 }],
      hospitals: [{ name: "Red Deer Regional Hospital", rating: 8.7, distance: 4.6 }],
      shopping: [{ name: "Bower Place Mall", rating: 8.4, distance: 3.9 }],
    },
  },

  // =======================
  // PROPERTY 29 – Calgary Condo (Rental)
  // =======================
  {
    id: "29",
    title: "1506 - 1122 3 Street SE",
    city: "Calgary",
    area: "East Village",
    community: "Downtown East",
    province: "AB",
    propertyType: "Condo",
    constructionStatus: "Ready-to-Move",
    price: 389900,
    builtUpArea: 980,
    plotArea: 0,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    propertyTax: 3900,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 405000,
      sellerPrice: 389900,
      expectedPrice: 385000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Riverside School", rating: 8.0, distance: 1.3 }],
      hospitals: [{ name: "Foothills Medical Centre", rating: 9.1, distance: 5.9 }],
      shopping: [{ name: "Calgary Central Library", rating: 9.5, distance: 0.3 }],
    },
  },

  // =======================
  // PROPERTY 30 – Edmonton Duplex
  // =======================
  {
    id: "30",
    title: "4527 Meadowbrook Way",
    city: "Edmonton",
    area: "Meadowlark",
    community: "West Edmonton",
    province: "AB",
    propertyType: "Duplex",
    constructionStatus: "Ready-to-Move",
    price: 475000,
    builtUpArea: 2050,
    plotArea: 3800,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 5400,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600585154084-4bba43c6c9a3?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336954-9a60a0f01c45?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 490000,
      sellerPrice: 475000,
      expectedPrice: 470000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Meadowlark School", rating: 8.1, distance: 1.0 }],
      hospitals: [{ name: "Misericordia Hospital", rating: 8.6, distance: 2.8 }],
      shopping: [{ name: "West Edmonton Mall", rating: 9.4, distance: 1.9 }],
    },
  },

  // =======================
  // PROPERTY 31 – Calgary Semi-Detached
  // =======================
  {
    id: "31",
    title: "19 Legacy Reach Crescent SE",
    city: "Calgary",
    area: "Legacy",
    community: "South Calgary",
    province: "AB",
    propertyType: "Semi-Detached",
    constructionStatus: "Ready-to-Move",
    price: 529000,
    builtUpArea: 1950,
    plotArea: 3500,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    propertyTax: 5600,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687618-3ae9c88dbb0f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 545000,
      sellerPrice: 529000,
      expectedPrice: 525000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "All Saints High School", rating: 8.5, distance: 2.1 }],
      hospitals: [{ name: "South Health Campus", rating: 9.0, distance: 4.4 }],
      shopping: [{ name: "Legacy Village", rating: 8.3, distance: 1.7 }],
    },
  },

  // =======================
  // PROPERTY 32 – Edmonton Townhouse
  // =======================
  {
    id: "32",
    title: "67 Griesbach Parade NW",
    city: "Edmonton",
    area: "Griesbach",
    community: "North Edmonton",
    province: "AB",
    propertyType: "Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 459900,
    builtUpArea: 1750,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    propertyTax: 4300,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 475000,
      sellerPrice: 459900,
      expectedPrice: 455000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Major General Griesbach School", rating: 8.4, distance: 0.6 }],
      hospitals: [{ name: "Royal Alexandra Hospital", rating: 8.8, distance: 5.1 }],
      shopping: [{ name: "Northgate Centre", rating: 8.1, distance: 3.7 }],
    },
  },

  // =======================
  // PROPERTY 33 – Calgary Detached (Luxury)
  // =======================
  {
    id: "33",
    title: "6 Spring Valley Place SW",
    city: "Calgary",
    area: "Springbank Hill",
    community: "West Calgary",
    province: "AB",
    propertyType: "Detached",
    constructionStatus: "Ready-to-Move",
    price: 1325000,
    builtUpArea: 3850,
    plotArea: 6500,
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    propertyTax: 12800,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687618-3ae9c88dbb0f?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337191-df5c8c6f1d7a?w=900",
    amenities: [
      { name: "Garden", available: true },
      { name: "Security", available: true },
      { name: "Parking", available: true },
    ],
    valuation: {
      marketValue: 1380000,
      sellerPrice: 1325000,
      expectedPrice: 1310000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Ernest Manning High School", rating: 8.9, distance: 2.6 }],
      hospitals: [{ name: "Foothills Medical Centre", rating: 9.1, distance: 7.2 }],
      shopping: [{ name: "Westhills Towne Centre", rating: 8.6, distance: 4.9 }],
    },
  },

  // =======================
  // PROPERTY 34 – Edmonton Condo (Luxury)
  // =======================
  {
    id: "34",
    title: "1802 - 10024 Jasper Avenue",
    city: "Edmonton",
    area: "Downtown",
    community: "Ice District",
    province: "AB",
    propertyType: "Condo Apartment",
    constructionStatus: "Ready-to-Move",
    price: 615000,
    builtUpArea: 1350,
    plotArea: 0,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    propertyTax: 5800,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7d1b7d7b54d?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900",
    amenities: [
      { name: "Lift", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 640000,
      sellerPrice: 615000,
      expectedPrice: 610000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "NorQuest College", rating: 8.5, distance: 0.8 }],
      hospitals: [{ name: "Royal Alexandra Hospital", rating: 8.9, distance: 2.9 }],
      shopping: [{ name: "Ice District Plaza", rating: 9.2, distance: 0.4 }],
    },
  },

  // =======================
  // PROPERTY 35 – Airdrie Duplex
  // =======================
  {
    id: "35",
    title: "204 Bayside Loop SW",
    city: "Airdrie",
    area: "Bayside",
    community: "Southwest Airdrie",
    province: "AB",
    propertyType: "Duplex",
    constructionStatus: "Ready-to-Move",
    price: 489900,
    builtUpArea: 2150,
    plotArea: 3900,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    propertyTax: 4700,
    images: [
      "https://images.unsplash.com/photo-1600047509782-20a66c4f70f5?w=1200",
      "https://images.unsplash.com/photo-1600585154084-4bba43c6c9a3?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854336954-9a60a0f01c45?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 505000,
      sellerPrice: 489900,
      expectedPrice: 485000,
      status: "fair",
    },
    nearby: {
      schools: [{ name: "Nose Creek Elementary", rating: 8.2, distance: 1.4 }],
      hospitals: [{ name: "Airdrie Community Health", rating: 8.3, distance: 3.2 }],
      shopping: [{ name: "Coopers Promenade", rating: 8.1, distance: 2.7 }],
    },
  },

  // =======================
  // PROPERTY 36 – Calgary Townhouse
  // =======================
  {
    id: "36",
    title: "54 Walden Square SE",
    city: "Calgary",
    area: "Walden",
    community: "South Calgary",
    province: "AB",
    propertyType: "Townhouse",
    constructionStatus: "Ready-to-Move",
    price: 419900,
    builtUpArea: 1600,
    plotArea: 0,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    propertyTax: 4300,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
    ],
    floorPlan: "https://images.unsplash.com/photo-1588854337057-2b5fefc6b71d?w=900",
    amenities: [
      { name: "Parking", available: true },
      { name: "Security", available: true },
    ],
    valuation: {
      marketValue: 435000,
      sellerPrice: 419900,
      expectedPrice: 415000,
      status: "underpriced",
    },
    nearby: {
      schools: [{ name: "Dr. E.P. Scarlett High School", rating: 8.4, distance: 2.8 }],
      hospitals: [{ name: "South Health Campus", rating: 9.0, distance: 5.1 }],
      shopping: [{ name: "Walden Gate", rating: 8.3, distance: 1.1 }],
    },
  }



];
