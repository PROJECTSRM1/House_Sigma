import React from "react";
import { MapPin } from "lucide-react";
import styles from "./PropertyCard.module.css";
import { Property } from "@/data/albertaData";
import { PropertyListing } from "@/data/mockData";

type UnifiedProperty = Property | PropertyListing;

interface PropertyCardProps {
  property: UnifiedProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const price =
    typeof property.price === "number"
      ? `$${property.price.toLocaleString()}`
      : property.price;

  const getStatusLabel = () => {
    // 1️⃣ SOLD
    if (property.status === "Sold") return "Sold";

    // 2️⃣ FOR SCHOOLS (Alberta + BC + Ontario)
    if ("schoolScore" in property && property.schoolScore)
      return "For Schools";

    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("school")
    )
      return "For Schools";

    // 3️⃣ HIGH GROWTH
    if ("growthScore" in property && property.growthScore)
      return "High Growth";

    // 4️⃣ FOR RENTAL (explicit only)
    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("rental")
    )
      return "For Rental";

    // 5️⃣ FEATURED
    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("featured")
    )
      return "Featured";

    // 6️⃣ EXCLUSIVE
    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("exclusive")
    )
      return "Exclusive";

    // 7️⃣ DEFAULT
    return "Newly Listed";
  };

  const getStatusClass = () => {
    const label = getStatusLabel();

    switch (label) {
      case "Sold":
        return styles.sold;
      case "For Schools":
        return styles.school;
      case "High Growth":
        return styles.growth;
      case "For Rental":
        return styles.rental;
      case "Featured":
        return styles.featured;
      case "Exclusive":
        return styles.exclusive;
      default:
        return styles.new;
    }
  };

  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageContainer}>
        <img
          src={property.image}
          alt={property.address}
          className={styles.image}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.cardContent}>
        <div className={styles.priceRow}>
          <div className={styles.price}>Price: {price}</div>

          <span className={`${styles.statusBadge} ${getStatusClass()}`}>
            {getStatusLabel()}
          </span>
        </div>

        <div className={styles.location}>
          <MapPin size={14} />
          {property.address}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
