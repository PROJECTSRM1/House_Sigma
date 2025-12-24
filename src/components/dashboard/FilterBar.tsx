import './FilterBar.css';

import { useState } from 'react';
import {
  ChevronDown,
  Filter,
  MapPin,
  Building2,
  Calendar,
} from 'lucide-react';

import { cities, propertyTypes, timeRanges } from '@/data/mockData';

interface FilterBarProps {
  onFilterChange?: (filters: {
    city: string;
    propertyType: string;
    timeRange: string;
  }) => void;
}

type OpenDropdown = 'city' | 'type' | 'time' | null;

export const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedTime, setSelectedTime] = useState('Last 12 Months');

  const [openDropdown, setOpenDropdown] =
    useState<OpenDropdown>(null);

  /* =========================
     HANDLERS
  ========================= */

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setOpenDropdown(null);
    onFilterChange?.({
      city,
      propertyType: selectedType,
      timeRange: selectedTime,
    });
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setOpenDropdown(null);
    onFilterChange?.({
      city: selectedCity,
      propertyType: type,
      timeRange: selectedTime,
    });
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    setOpenDropdown(null);
    onFilterChange?.({
      city: selectedCity,
      propertyType: selectedType,
      timeRange: time,
    });
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <section className="filterbar">
      {/* Header */}
      <div className="filterbar-header">
        <Filter />
        <span>Filters</span>
      </div>

      <div className="filterbar-controls">
        {/* ================= CITY ================= */}
        <div className="filter-group">
          <button
            className="filter-button"
            onClick={() =>
              setOpenDropdown(
                openDropdown === 'city' ? null : 'city'
              )
            }
          >
            <MapPin />
            <span>{selectedCity}</span>
            <ChevronDown
              className={openDropdown === 'city' ? 'rotate' : ''}
            />
          </button>

          {openDropdown === 'city' && (
            <div className="filter-dropdown">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCityChange(city)}
                  className={
                    selectedCity === city ? 'active' : ''
                  }
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ================= TYPE ================= */}
        <div className="filter-group">
          <button
            className="filter-button"
            onClick={() =>
              setOpenDropdown(
                openDropdown === 'type' ? null : 'type'
              )
            }
          >
            <Building2 />
            <span>{selectedType}</span>
            <ChevronDown
              className={openDropdown === 'type' ? 'rotate' : ''}
            />
          </button>

          {openDropdown === 'type' && (
            <div className="filter-dropdown">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={
                    selectedType === type ? 'active' : ''
                  }
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ================= TIME ================= */}
        <div className="filter-group">
          <button
            className="filter-button"
            onClick={() =>
              setOpenDropdown(
                openDropdown === 'time' ? null : 'time'
              )
            }
          >
            <Calendar />
            <span>{selectedTime}</span>
            <ChevronDown
              className={openDropdown === 'time' ? 'rotate' : ''}
            />
          </button>

          {openDropdown === 'time' && (
            <div className="filter-dropdown">
              {timeRanges.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeChange(time)}
                  className={
                    selectedTime === time ? 'active' : ''
                  }
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
