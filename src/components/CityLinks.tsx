import { useState } from "react";
import {
  ontarioCities,
  bcCities,
  albertaCities,
  soldOntarioCities,
  soldBcCities,
  soldAlbertaCities,
} from "@/data/mockData";

import styles from "./CityLinks.module.css";
import { ChevronDown } from "lucide-react";

interface ProvinceBlockProps {
  title: string;
  provinces: {
    name: string;
    cities: string[];
  }[];
}

const ProvinceBlock = ({ title, provinces }: ProvinceBlockProps) => {
  const [openProvince, setOpenProvince] = useState<string | null>(null);

  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>

      <div className={styles.dropdownWrapper}>
        {provinces.map((province) => (
          <div key={province.name} className={styles.dropdownCard}>
            {/* Header */}
            <button
              className={styles.dropdownHeader}
              onClick={() =>
                setOpenProvince(openProvince === province.name ? null : province.name)
              }
            >
              <span>{province.name}</span>
              <ChevronDown
                className={`${styles.chevron} ${
                  openProvince === province.name ? styles.chevronOpen : ""
                }`}
              />
            </button>

            {/* Expandable city list */}
            {openProvince === province.name && (
              <div className={styles.cityList}>
                {province.cities.map((city, i) => (
                  <a key={i} href="#" className={styles.cityLink}>
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CityLinks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Homes for Sale Dropdowns */}
        <ProvinceBlock
          title="Homes for Sale in Popular Cities"
          provinces={[
            { name: "Ontario", cities: ontarioCities },
            { name: "British Columbia", cities: bcCities },
            { name: "Alberta", cities: albertaCities },
          ]}
        />

        {/* Sold Homes Dropdowns */}
        <ProvinceBlock
          title="Sold Homes in Popular Cities"
          provinces={[
            { name: "Ontario", cities: soldOntarioCities },
            { name: "British Columbia", cities: soldBcCities },
            { name: "Alberta", cities: soldAlbertaCities },
          ]}
        />
      </div>
    </section>
  );
};

export default CityLinks;
