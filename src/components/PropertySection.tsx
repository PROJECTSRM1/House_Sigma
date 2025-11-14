import PropertyCard from './PropertyCard';
import { PropertyListing } from '@/data/mockData';
import styles from './PropertySection.module.css';

interface PropertySectionProps {
  title: string;
  properties: PropertyListing[];
}

const PropertySection = ({ title, properties }: PropertySectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href="#" className={styles.seeMore}>
          See More
        </a>
      </div>
      <div className={styles.grid}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertySection;
