import React, { useState } from 'react';
import './PropertyDetail.css';
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyDetailById } from "@/data/propertyDetailsResolver";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


// ===== ICONS (Inline SVG) =====
const Icons = {
  Bed: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
    </svg>
  ),
  Bath: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  ),
  Car: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  Square: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Images: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  ArrowUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Droplet: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  Tree: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19z" />
      <path d="M12 19v3" />
    </svg>
  ),
  GraduationCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Building: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  ),
  Hospital: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6v4M14 14h-4M14 18h-4M14 8h-4M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  ),
  ShoppingBag: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Plus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Minus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  DollarSign: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

// ===== HELPER FUNCTIONS =====
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-CA').format(num);
};

// ===== MAIN COMPONENT =====
const PropertyDetail: React.FC = () => {

    const { id } = useParams();
  const navigate = useNavigate();

  const propertyData = getPropertyDetailById(id);

  if (!propertyData) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <h2>Property details not available</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }


  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['schools']);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Viewing request submitted!');
  };

  const allImages = [...propertyData.images, propertyData.floorPlan];

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const navigateImage = (direction: 'prev' | 'next') => {
    setActiveImageIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? allImages.length - 1 : prev - 1;
      }
      return prev === allImages.length - 1 ? 0 : prev + 1;
    });
  };

  const getStatusLabel = (status: string): { text: string; color: string } => {
    switch (status) {
      case 'underpriced':
        return { text: 'Underpriced – Great Value!', color: '#10b981' };
      case 'fair':
        return { text: 'Fairly Priced', color: '#f59e0b' };
      case 'overpriced':
        return { text: 'Overpriced', color: '#ef4444' };
      default:
        return { text: status, color: '#6b7280' };
    }
  };

  const amenityIcons: Record<string, React.FC> = {
    Lift: Icons.ArrowUp,
    Security: Icons.Shield,
    'Power Backup': Icons.Zap,
    Parking: Icons.Car,
    'Water Supply': Icons.Droplet,
    Garden: Icons.Tree,
  };

  const nearbyIcons: Record<string, React.FC> = {
    schools: Icons.GraduationCap,
    colleges: Icons.Building,
    hospitals: Icons.Hospital,
    shopping: Icons.ShoppingBag,
  };

  const nearbyLabels: Record<string, string> = {
    schools: 'Schools',
    colleges: 'Colleges & Universities',
    hospitals: 'Hospitals & Healthcare',
    shopping: 'Shopping & Markets',
  };

  const statusInfo = getStatusLabel(propertyData.valuation.status);

  return (
    <>
     <Navbar />
    
    <div className="property-detail-page">
      
      {/* Header Section */}
      <header className="pd-header">
        <div className="pd-header-content">
          <div className="pd-header-left">
            <p className="pd-property-id">Property ID: {propertyData.id}</p>
            <h1 className="pd-title">{propertyData.title}</h1>
            <p className="pd-location">{propertyData.area}, {propertyData.city}, {propertyData.province} • {propertyData.community}</p>
            <div className="pd-property-meta">
              <span className="pd-property-type">{propertyData.propertyType}</span>
              <span className="pd-meta-separator">•</span>
              <span className="pd-construction-status">{propertyData.constructionStatus}</span>
            </div>
          </div>
          <div className="pd-header-right">
            <div className="pd-price-section">
              <span className="pd-price-label">Listed for:</span>
              <span className="pd-price-value">{formatCurrency(propertyData.price)}</span>
            </div>
            <button className="pd-save-btn">
              <Icons.Heart />
              Save Property
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="pd-quick-stats">
          <div className="pd-stat-item">
            <Icons.Bed />
            <span>{propertyData.bedrooms} Bedrooms</span>
          </div>
          <div className="pd-stat-item">
            <Icons.Bath />
            <span>{propertyData.bathrooms} Bathrooms</span>
          </div>
          <div className="pd-stat-item">
            <Icons.Car />
            <span>{propertyData.parking} Parking</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pd-main">
        <div className="pd-layout">
          <div className="pd-content">
          {/* Gallery Section */}
          <section className="pd-section">
            <h2 className="pd-section-title">Property Images & Floor Plan</h2>
            <div className="pd-gallery">
              <div className="pd-gallery-main" onClick={() => openModal(activeImageIndex)}>
                <img src={allImages[activeImageIndex]} alt={`Property view ${activeImageIndex + 1}`} />
                <div className="pd-gallery-overlay">
                  <Icons.Images />
                  <span>{activeImageIndex + 1} / {allImages.length}</span>
                </div>
              </div>
              <div className="pd-gallery-thumbnails">
                {allImages.map((img, index) => (
                  <div
                    key={index}
                    className={`pd-thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                    {index === allImages.length - 1 && <span className="pd-thumbnail-label">Floor Plan</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Property Details */}
          <section className="pd-section">
            <h2 className="pd-section-title">Key Property Details</h2>
            <div className="pd-details-grid">
              <div className="pd-detail-item">
                <span className="pd-detail-label">Built-up Area</span>
                <span className="pd-detail-value">{formatNumber(propertyData.builtUpArea)} sq. ft.</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Plot Area</span>
                <span className="pd-detail-value">{formatNumber(propertyData.plotArea)} sq. ft.</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Bedrooms</span>
                <span className="pd-detail-value">{propertyData.bedrooms}</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Bathrooms</span>
                <span className="pd-detail-value">{propertyData.bathrooms}</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Parking</span>
                <span className="pd-detail-value">{propertyData.parking} Spaces</span>
              </div>
              <div className="pd-detail-item">
                <span className="pd-detail-label">Property Tax</span>
                <span className="pd-detail-value">{formatCurrency(propertyData.propertyTax)}/year</span>
              </div>
            </div>
          </section>

          {/* Amenities Section */}
          <section className="pd-section">
            <h2 className="pd-section-title">Amenities</h2>
            <div className="pd-amenities-grid">
              {propertyData.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity.name] || Icons.Square;
                return (
                  <div key={amenity.name} className={`pd-amenity-item ${!amenity.available ? 'unavailable' : ''}`}>
                    <div className="pd-amenity-icon">
                      <IconComponent />
                    </div>
                    <span className="pd-amenity-name">{amenity.name}</span>
                    <span className="pd-amenity-status">{amenity.available ? '✓' : '✗'}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Valuation Section */}
          <section className="pd-section">
            <h2 className="pd-section-title">Property Valuation & Price Insights</h2>
            <div className="pd-valuation-grid">
              <div className="pd-valuation-item">
                <span className="pd-valuation-label">Estimated Market Value</span>
                <span className="pd-valuation-value">{formatCurrency(propertyData.valuation.marketValue)}</span>
              </div>
              <div className="pd-valuation-item">
                <span className="pd-valuation-label">Seller Quoted Price</span>
                <span className="pd-valuation-value">{formatCurrency(propertyData.valuation.sellerPrice)}</span>
              </div>
              <div className="pd-valuation-item">
                <span className="pd-valuation-label">Customer Expected Price</span>
                <span className="pd-valuation-value">{formatCurrency(propertyData.valuation.expectedPrice)}</span>
              </div>
            </div>
            <div className="pd-valuation-status">
              <span className="pd-status-indicator" style={{ backgroundColor: statusInfo.color }}></span>
              <span className="pd-status-text">{statusInfo.text}</span>
            </div>
            <p className="pd-valuation-note">Based on recent market transactions and location trends.</p>
          </section>

          {/* Nearby Infrastructure */}
          <section className="pd-section">
            <h2 className="pd-section-title">Nearby Infrastructure</h2>
            <div className="pd-nearby-list">
              {Object.entries(propertyData.nearby).map(([category, items]) => {
                const IconComponent = nearbyIcons[category] || Icons.MapPin;
                const isExpanded = expandedCategories.includes(category);
                return (
                  <div key={category} className="pd-nearby-category">
                    <button className="pd-nearby-header" onClick={() => toggleCategory(category)}>
                      <div className="pd-nearby-header-left">
                        <div className="pd-nearby-icon">
                          <IconComponent />
                        </div>
                        <span className="pd-nearby-title">{nearbyLabels[category]}</span>
                        <span className="pd-nearby-count">({items.length})</span>
                      </div>
                      <div className="pd-nearby-toggle">
                        {isExpanded ? <Icons.Minus /> : <Icons.Plus />}
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="pd-nearby-items">
                        {items.map((item, index) => (
                          <div key={index} className="pd-nearby-item">
                            <span className="pd-nearby-name">{item.name}</span>
                            <div className="pd-nearby-meta">
                              <span className="pd-nearby-rating">
                                <Icons.Star />
                                {item.rating}/10
                              </span>
                              <span className="pd-nearby-distance">{item.distance} km</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          </div>

          {/* Schedule Viewing Sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-schedule-form-card">
              <h3 className="pd-form-title">Schedule Viewing</h3>
              <p className="pd-form-subtitle">Tour with Property Agent</p>
              <form onSubmit={handleFormSubmit} className="pd-schedule-form">
                <div className="pd-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="pd-form-row">
                  <div className="pd-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Contact Number"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="pd-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address *"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="pd-form-group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>
                <p className="pd-form-note">* Required field</p>
                <button type="submit" className="pd-submit-btn">Schedule Viewing</button>
              </form>
            </div>
          </aside>
        </div>
      </main>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="pd-modal-overlay" onClick={closeModal}>
          <div className="pd-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pd-modal-close" onClick={closeModal}>
              <Icons.X />
            </button>
            <button className="pd-modal-nav pd-modal-prev" onClick={() => navigateImage('prev')}>
              <Icons.ChevronLeft />
            </button>
            <img src={allImages[activeImageIndex]} alt={`Property view ${activeImageIndex + 1}`} />
            <button className="pd-modal-nav pd-modal-next" onClick={() => navigateImage('next')}>
              <Icons.ChevronRight />
            </button>
            <div className="pd-modal-counter">{activeImageIndex + 1} / {allImages.length}</div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
    
  );
};

export default PropertyDetail;
