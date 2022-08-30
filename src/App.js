import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./shared/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;