import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import TermsModal from "./TermsModal";
import { PropertyListing } from "@/data/mockData";
import { Property } from "@/data/albertaData";
import styles from "./PropertySection.module.css";

type PropertyAny = Property | PropertyListing;

interface PropertySectionProps {
  title: string;
  properties: PropertyAny[];
}

const PropertySection = ({ title, properties }: PropertySectionProps) => {
  // Logged-in user
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  // Key becomes user-specific
  const storageKey = user
    ? `revealed_properties_${user.email}`
    : "revealed_properties_guest";

  // Stores revealed IDs
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const [activePropertyId, setActivePropertyId] = useState<number | null>(null);

  // Load revealed IDs for the CURRENT user only
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setRevealedIds(JSON.parse(saved));
    else setRevealedIds([]); // new user → start fresh (all blurred)
  }, [storageKey]); // Reload when user changes

  // Save for current user
  const saveRevealed = (updated: number[]) => {
    setRevealedIds(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const handleTapToView = (id: number) => {
    setActivePropertyId(id);
  };

  const handleAccept = () => {
    if (activePropertyId === null) return;

    const updated = Array.from(new Set([...revealedIds, activePropertyId]));
    saveRevealed(updated);

    setActivePropertyId(null);
  };

  const handleClose = () => {
    setActivePropertyId(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <a href="#" className={styles.seeMore}>See More</a>
      </div>

      <div className={styles.grid}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isRevealed={revealedIds.includes(Number(property.id))}
            onTapToView={() => handleTapToView(Number(property.id))}
          />
        ))}
      </div>

      {/* TERMS MODAL */}
      <TermsModal
        isOpen={activePropertyId !== null}
        onAccept={handleAccept}
        onClose={handleClose}
      />
    </section>
  );
};

export default PropertySection;
