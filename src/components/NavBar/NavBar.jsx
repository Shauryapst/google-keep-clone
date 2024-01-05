// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ handleSearch }) => {
  const [searchString, setSearchString] = useState('');
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
    handleSearch(e.target.value);
  };

  const toggleSearchBox = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchString);
    toggleSearchBox();
  };

  return (
    <nav className={`navbar ${isSearchBoxVisible ? 'search-open' : ''}`}>
      <div className="navbar-left">
        <span className="app-name">NotePad</span>
      </div>
      <div className="navbar-right">
        <div className="search-box-container">
          <input
            type="text"
            placeholder="Search..."
            className={`search-box ${isSearchBoxVisible ? 'visible' : ''}`}
            onChange={handleSearchChange}
          />
          <i
          className={`fa fa-search search-icon`}
          onClick={toggleSearchBox}
        ></i>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
