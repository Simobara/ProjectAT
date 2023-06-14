import React from "react";
import "./search.css"

const Search = ({ filter, setFilter }) => {
  return (
      <div className="flex items-center my-3 search-wrapper">
        <span className="fw-bold mr-2">Search</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search item"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
  );
};

export default Search;
