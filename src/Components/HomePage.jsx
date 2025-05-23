import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";
import weatherAnimation from "../weather-animation.json";
import logo from "../assets/METEOCODE.png";
import "./Homepage.css";

function HomePage() {
  const [city, setCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);

  const navigate = useNavigate();

  // localStorage
  useEffect(() => {
    const savedCities = localStorage.getItem("recentCities");
    if (savedCities) {
      setRecentCities(JSON.parse(savedCities));
    }
  }, []);

  //Save city
  const saveCity = (cityName) => {
    const cleanCity = cityName.trim();

    if (cleanCity === "") return;
    let newCities = recentCities.filter((city) => city.toLowerCase() !== cleanCity.toLowerCase());

    newCities.unshift(cleanCity);

    if (newCities.length > 5) {
      newCities = newCities.slice(0, 5);
    }

    // Aggiorno state e salvo
    setRecentCities(newCities);
    localStorage.setItem("recentCities", JSON.stringify(newCities));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      saveCity(city);
      navigate(`/details/${city.trim()}`);
    }
  };

  const handleRecentClick = (cityName) => {
    navigate(`/details/${cityName}`);
  };

  return (
    <div className="container py-5 text-center">
      <img src={logo} alt="Logo Meteo" className="logo-animated" />

      <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-3 flex-wrap form-container">
        <input
          type="text"
          placeholder="Inserisci una città"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control flex-grow-1"
          required
        />
        <button type="submit" className="btn btn-primary px-4">
          Cerca
        </button>
      </form>

      {recentCities.length > 0 && (
        <div className="mt-4">
          <h3>Ricerche recenti</h3>
          <div className="recent-cities d-flex justify-content-center flex-wrap gap-2">
            {recentCities.map((cityName) => (
              <button key={cityName} onClick={() => handleRecentClick(cityName)} className="btn btn-outline-secondary">
                <span className="uppercase">{cityName}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5">
        <h2>Perché usare questa app?</h2>

        <Lottie loop animationData={weatherAnimation} play style={{ width: 150, height: 150, margin: "0 auto 2rem" }} />

        <div className="row mt-4 justify-content-center g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <h5>Aggiornamenti in tempo reale</h5>
              <p>Previsioni aggiornate ogni ora con OpenWeather API.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h5>Interfaccia elegante</h5>
              <p>Stile moderno e professionale.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h5>Facile da usare</h5>
              <p>Scrivi la città e ottieni subito il meteo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
