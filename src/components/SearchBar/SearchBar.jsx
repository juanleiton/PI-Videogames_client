import React from "react";
import "./SearchBar.css"

const SearchBar = ({ newSearch, allowSearch, handleNewSearch, handleSearch }) => {
  return(
    <div className="searchbar">
      <div className="searchbar-title-container">
        <h2 className="searchbar-title">Search for a game</h2>
      </div>
      <div className="searchbar-input-container">
      <input 
        className="searchbar-input"
        type="search"
        value={newSearch}
        onChange={handleNewSearch}
        placeholder="Title of the game..."
        spellCheck="true"/>
      <button className="searchbar-button" type="button" disabled={!allowSearch} onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;