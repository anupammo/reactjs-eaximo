import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Seo from "./pages/Seo";
import Blog from "./pages/Blog";
import Academics from "./pages/Academics";
import Ai from "./pages/Ai";
import Brand from "./pages/Brand";
import Careers from "./pages/Careers";
import Dm from "./pages/Dm";
import Sem from "./pages/Sem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/digital-marketing" element={<Dm />} />
        <Route path="/sem" element={<Sem />} />
      </Routes>
    </Router>
  );
}

export default App;
