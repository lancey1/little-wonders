import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./shared/Footer";
import Services from "./pages/Services";
import Play from "./pages/Play";
import Nutrition from "./pages/Nutrition";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/play" element={<Play />} />
        <Route exact path="/services/nutrition" element={<Nutrition />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
