import React from "react";
import { useTranslation } from "react-i18next";
import './search.css'

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
}) => {
  const { t } = useTranslation();

  return (
    <div className="faq-search-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.();
        }}
        className="faq-search-form"
      >
        <input
          type="text"
          placeholder="Search Knowledge Base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="faq-search-input"
        />

        <button type="submit" className="faq-search-button">{t("search")}</button>
      </form>
    </div>
  );
};

export default SearchBar;
