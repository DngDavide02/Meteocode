import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p>&copy; 2025 MeteoCode. Tutti i diritti riservati.</p>
      <p>
        Realizzato con{" "}
        <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
          API OpenWeather
        </a>
      </p>
      <small>Versione 1.0.0</small>
    </footer>
  );
}

export default Footer;
