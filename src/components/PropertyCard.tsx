import { Bed, Bath, Car } from 'lucide-react';
import { Button } from './ui/button';
import { PropertyListing } from '@/data/mockData';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  property: PropertyListing;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const getBadgeClass = (type: string) => {
    const baseClass = styles.badge;
    switch (type) {
      case 'exclusive':
        return `${baseClass} ${styles.badgeExclusive}`;
      case 'newly':
        return `${baseClass} ${styles.badgeNewly}`;
      case 'rental':
        return `${baseClass} ${styles.badgeRental}`;
      case 'featured':
        return `${baseClass} ${styles.badgeFeatured}`;
      case 'school':
        return `${baseClass} ${styles.badgeSchool}`;
      default:
        return `${baseClass} ${styles.badgeDefault}`;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={property.image}
          alt={property.address}
          className={property.restricted ? `${styles.image} ${styles.blurredImage}` : styles.image}
        />
        {property.badge && (
          <span className={getBadgeClass(property.badgeColor || '')}>
            {property.badge}
          </span>
        )}
        {property.status === 'For Sale' && (
          <span className={styles.forSaleTag}>For Sale</span>
        )}
        {property.restricted && (
          <div className={styles.restrictedOverlay}>
            <Button size="sm" className="bg-primary text-white">
              Login Required
            </Button>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.price}>Listed: ${property.price.toLocaleString()}</div>
        <div className={styles.timestamp}>{property.date}</div>
        <div className={styles.address}>{property.address}</div>
        <div className={styles.propertyType}>{property.type}</div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <Bed className={styles.featureIcon} />
            <span>{property.beds}</span>
          </div>
          <div className={styles.feature}>
            <Bath className={styles.featureIcon} />
            <span>{property.baths}</span>
          </div>
          <div className={styles.feature}>
            <Car className={styles.featureIcon} />
            <span>{property.parking}</span>
          </div>
        </div>

        {property.agent && (
          <div className={styles.agent}>{property.agent}</div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
