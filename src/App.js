import React from "react";
import { HelmetProvider } from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Portfolio from "./pages/Portfolio";
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
import Media from "./pages/Media";
import Support from "./pages/Support";
import Web from "./pages/Web";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/ai-solutions" element={<Ai />} />
          <Route path="/branding" element={<Brand />} />
          <Route path="/digital-marketing" element={<Dm />} />
          <Route path="/sem" element={<Sem />} />
          <Route path="/media" element={<Media />} />
          <Route path="/it-support" element={<Support />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
