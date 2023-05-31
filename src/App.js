import logo from "./logo.svg";
import "./Styles.css";
import Hero from "./Hero";
import Home from "./Home";
import Content from "./Content";
import Footer from "./Footer";
import NoPage from "./NoPage";
import Points from "./Points";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/racedata" element={<Home />} />
          <Route path="/points" element={<Points />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
