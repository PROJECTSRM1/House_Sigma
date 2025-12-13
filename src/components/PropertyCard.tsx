import React from "react";
import { Bed, Bath, Car } from "lucide-react";
import { PropertyListing } from "@/data/mockData";
import { Property } from "@/data/albertaData";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  property: Property | PropertyListing;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const beds = "beds" in property ? property.beds : property.bedrooms;
  const baths = "baths" in property ? property.baths : property.bathrooms;
  const parking = property.parking ?? 0;
  const date = "date" in property ? property.date : property.listed;

  const getBadgeClass = (badge?: string, badgeColor?: string) => {
    const base = styles.badge;
    const colorMap: Record<string, string> = {
      green: styles.badgeExclusive,
      blue: styles.badSchool,
      teal: styles.badgeRental,
      orange: styles.badgeFeatured,
    };

    if (badgeColor && colorMap[badgeColor.toLowerCase()]) {
      return `${base} ${colorMap[badgeColor.toLowerCase()]}`;
    }

    if (!badge) return `${base} ${styles.badgeDefault}`;

    const text = badge.toLowerCase();
    if (text.includes("exclusive")) return `${base} ${styles.badgeExclusive}`;
    if (text.includes("rental") || text.includes("yield")) return `${base} ${styles.badgeRental}`;
    if (text.includes("school") || text.includes("score")) return `${base} ${styles.badSchool}`;
    if (text.includes("featured")) return `${base} ${styles.badgeFeatured}`;
    if (text.includes("new")) return `${base} ${styles.badgeNewly}`;

    return `${base} ${styles.badgeDefault}`;
  };

  return (
    <div className={styles.card}>
      {/* IMAGE SECTION */}
      <div className={styles.imageContainer}>
        
        {"schoolScore" in property && property.schoolScore && (
          <span className={styles.topLeftBadge}>
            School Score: {property.schoolScore}
          </span>
        )}

        {"growthScore" in property && property.growthScore && (
          <span className={styles.topLeftBadge}>
            Growth Score: {property.growthScore}
          </span>
        )}

        {"badge" in property && property.badge && (
          <span className={`${getBadgeClass(property.badge)} ${styles.badgeTopLeft}`}>
            {property.badge}
          </span>
        )}

        {property.status === "For Sale" && (
          <span className={styles.bottomLeftBadge}>For Sale</span>
        )}

        <img
          src={property.image}
          alt={property.address || "Property"}
          className={styles.image}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className={styles.cardContent}>
        <div className={styles.price}>
          Listed:{" "}
          {typeof property.price === "number"
            ? `$${property.price.toLocaleString()}`
            : property.price}
        </div>

        <div className={styles.timestamp}>{date}</div>
        <div className={styles.address}>{property.address}</div>
        <div className={styles.propertyType}>{property.type}</div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <Bed className={styles.featureIcon} /> <span>{beds}</span>
          </div>
          <div className={styles.feature}>
            <Bath className={styles.featureIcon} /> <span>{baths}</span>
          </div>
          <div className={styles.feature}>
            <Car className={styles.featureIcon} /> <span>{parking}</span>
          </div>
        </div>

        {"agent" in property && property.agent && (
          <div className={styles.agent}>{property.agent}</div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
