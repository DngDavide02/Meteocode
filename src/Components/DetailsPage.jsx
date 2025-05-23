import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

const API_KEY = "3c3cc806814b733612a0db2378d0c1bd";

function DetailsPage() {
  const { city } = useParams();

  // State
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //coordinate
  useEffect(() => {
    const getCoordinates = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        if (!res.ok) throw new Error("Errore nel recupero coordinate");
        const data = await res.json();
        if (data.length === 0) throw new Error("Città non trovata");

        setCoords({
          lat: data[0].lat,
          lon: data[0].lon,
        });
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getCoordinates();
  }, [city]);

  //meteo e previsioni
  useEffect(() => {
    if (!coords) return;

    const getWeather = async () => {
      try {
        const resWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=it`
        );
        if (!resWeather.ok) throw new Error("Errore nel meteo attuale");
        const dataWeather = await resWeather.json();
        setWeather(dataWeather);

        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=it`
        );
        if (!resForecast.ok) throw new Error("Errore nel recupero previsioni");
        const dataForecast = await resForecast.json();

        //previsioni per giorno
        const days = {};
        dataForecast.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!days[date]) days[date] = [];
          days[date].push(item);
        });

        setForecast(days);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getWeather();
  }, [coords]);

  if (loading) {
    return (
      <div className="details-container" style={{ textAlign: "center", paddingTop: "5rem" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h1 className="city-title">
        <strong>{city}</strong>
      </h1>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {weather && (
        <div className="weather-now">
          <h2>Meteo attuale</h2>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
          <p className="temperature-large">{weather.main.temp}°C</p>
          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
      )}

      <div className="forecast-section">
        <h2>Previsioni per i prossimi giorni</h2>
        {Object.entries(forecast).map(([date, list]) => (
          <div key={date} className="forecast-card">
            <h3>{date}</h3>
            <div className="forecast-day">
              {list.map((item) => (
                <div key={item.dt} className="forecast-item">
                  <p className="time">{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
                  <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                  <p className="temperature">{item.main.temp}°C</p>
                  <p className="description">{item.weather[0].description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
