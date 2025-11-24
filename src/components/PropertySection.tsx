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
  const [user, setUser] = useState<any>(null);

  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [activePropertyId, setActivePropertyId] = useState<number | null>(null);

  // ✅ Load user from localStorage properly
  const loadUser = () => {
    const u = localStorage.getItem("user");
    setUser(u ? JSON.parse(u) : null);
  };

  useEffect(() => {
    loadUser();
  }, []);

  // ✅ Listen for login / logout changes
  useEffect(() => {
    const syncAuth = () => {
      loadUser();
    };

    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth-changed", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth-changed", syncAuth);
    };
  }, []);

  // ✅ User based storage key
  const storageKey = user
    ? `revealed_properties_${user.email}`
    : "revealed_properties_guest";

  // ✅ Reload revealed when user changes
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setRevealedIds(JSON.parse(saved));
    } else {
      setRevealedIds([]); // new user → everything locked
    }
  }, [storageKey]);

  // ✅ Save revealed IDs
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

      <TermsModal
        isOpen={activePropertyId !== null}
        onAccept={handleAccept}
        onClose={handleClose}
      />
    </section>
  );
};

export default PropertySection;
