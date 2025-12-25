import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";
import { useTranslation } from "react-i18next";
import { Property } from "@/data/albertaData";
import { PropertyListing } from "@/data/mockData";

type UnifiedProperty = Property | PropertyListing;

interface PropertyCardProps {
  property: UnifiedProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { t } = useTranslation(); // ✅ ADDED

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
  const navigate = useNavigate();

  const price =
    typeof property.price === "number"
      ? `$${property.price.toLocaleString()}`
      : property.price;

  const getStatusLabel = () => {
    if (property.status === "Sold") return "Sold";

    if ("schoolScore" in property && property.schoolScore) return "For Schools";

    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("school")
    )
      return "For Schools";

    if ("growthScore" in property && property.growthScore)
      return "High Growth";

    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("rental")
    )
      return "For Rental";

    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("featured")
    )
      return "Featured";

    if (
      "badge" in property &&
      property.badge?.toLowerCase().includes("exclusive")
    )
      return "Exclusive";

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

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      {/* IMAGE */}
      <div className={styles.imageContainer}>
        {"schoolScore" in property && property.schoolScore && (
          <span className={styles.topLeftBadge}>
            {t("schoolScore")}: {property.schoolScore}
          </span>
        )}

        {"growthScore" in property && property.growthScore && (
          <span className={styles.topLeftBadge}>
            {t("growthScore")}: {property.growthScore}
          </span>
        )}

        {"badge" in property && property.badge && (
          <span className={`${getBadgeClass(property.badge)} ${styles.badgeTopLeft}`}>
            {property.badge}
          </span>
        )}

        {property.status === "For Sale" && (
          <span className={styles.bottomLeftBadge}>
            {t("forSale")}
          </span>
        )}

        <img
          src={property.image}
          alt={property.address}
          className={styles.image}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.cardContent}>
        <div className={styles.price}>
          {t("listed")}:{" "}
          {typeof property.price === "number"
            ? `$${property.price.toLocaleString()}`
            : property.price}
        </div>
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
