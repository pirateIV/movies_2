import useDocumentTitle from "hooks/useDocumentTitle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = () => {
  useDocumentTitle("Search · React Movies");
  const { t } = useTranslation();

  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="search-container">
      <div>
        <div className="search-box">
          <input
            type="text"
            placeholder={t("Type to search...")}
            className="peer w-full text-2xl bg-transparent outline-none"
            autoFocus="true"
          />
          <div className="i-ph:magnifying-glass text-xl opacity-50 transition-opacity peer-focus:opacity-100"></div>
        </div>
        {searchResults ? (
          <></>
        ) : (
          <div className="p-10 text-4xl opacity-50">
            {t("Type something to search...")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
