import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyNav.css";
import logo from "../assets/METEOCODE.png";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/details/${query.trim()}`);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" aria-label="Vai alla homepage MeteoApp">
        <img src={logo} alt="logoNav" />
      </Link>

      <form onSubmit={handleSubmit} className="search-form" role="search" aria-label="Ricerca città">
        <input
          type="search"
          placeholder="Cerca una città"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Inserisci il nome della città da cercare"
          required
        />
        <button type="submit" aria-label="Cerca città">
          Cerca
        </button>
      </form>

      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
