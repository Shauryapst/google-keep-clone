import React, {useState} from "react";
import "./Navbar.css";
const Navbar = ({ handleSearch }) => {
  const [searchString, setSearchString] = useState('');

  const handleSearchChange = (e) =>{
    setSearchString(e.target.value)

    
      handleSearch(e.target.value);
    
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="app-name">NotePad</span>
      </div>
      <div className="navbar-middle">
        <i
          className="fa fa-search search-icon"
          onClick={()=>handleSearch(searchString)}
        ></i>
        <input type="text" placeholder="Search..." className="search-box" onChange={handleSearchChange} />
      </div>
    </nav>
  );
};

export default Navbar;
