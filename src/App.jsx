import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Meteors } from "./pages/Meteors.jsx";
import { useState } from "react";
import SlideMenu from "./components/Slidemenu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={menuOpen} setOpen={setMenuOpen} />
      <div className="slidie-mcslide-pants">
        <SlideMenu isOpen={menuOpen} setOpen={setMenuOpen} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meteors" element={<Meteors />} />
      </Routes>
    </>
  );
}

export default App;
