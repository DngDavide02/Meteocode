import "./App.css";
import HomePage from "./Components/HomePage";
import DetailsPage from "./Components/DetailsPage";
import MyNav from "./Components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:city" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
