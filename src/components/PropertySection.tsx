import React from "react";
import PropertyCard from "./PropertyCard";
import { PropertyListing } from "@/data/mockData";
import { Property } from "@/data/albertaData";
import styles from "./PropertySection.module.css";

type PropertyAny = Property | PropertyListing;

interface PropertySectionProps {
  title: string;
  properties: PropertyAny[];
  badge?: string;
}

const PropertySection = ({ title, properties, badge }: PropertySectionProps) => {
  return (
    <section className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>

          {/* Badge */}
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>

        <a href="#" className={styles.seeMore}>
          See More →
        </a>
      </div>

      {/* Property Grid */}
      <div className={styles.grid}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </section>
  );
};

export default PropertySection;
