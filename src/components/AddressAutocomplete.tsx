import { useEffect, useRef, useState } from "react";
import styles from "./AddressAutocomplete.module.css"; // We'll create this style

export default function AddressAutocomplete({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchSuggestions = async (text: string) => {
    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${text}&format=json&addressdetails=1&countrycodes=in&limit=5`
    );

    const data = await res.json();
    setSuggestions(data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            fetchSuggestions(e.target.value);
            setShowList(true);
          }}
          placeholder="Enter your property address"
        />

        {/* ⭐ CLEAR BUTTON ADDED HERE */}
        {value && (
          <button
            className={styles.clearBtn}
            onClick={() => {
              onChange("");
              setSuggestions([]);
              setShowList(false);
            }}
          >
            ×
          </button>
        )}
      </div>

      {showList && suggestions.length > 0 && (
        <div className={styles.dropdown}>
          {suggestions.map((s, index) => (
            <div
              key={index}
              className={styles.option}
              onClick={() => {
                onChange(s.display_name);
                setShowList(false);
              }}
            >
              {s.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}