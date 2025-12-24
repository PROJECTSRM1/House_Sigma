export const propertyData = [
  // =======================
  // PROPERTY 1 (Already yours – unchanged)
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
  }
];
