import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // ✅ Make sure you have this file
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />  {/* ✅ Navbar should be outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
