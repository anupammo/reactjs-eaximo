import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={`navbar navbar-expand-md navbar-light fixed-top ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link className="navbar-brand text-uppercase text-primary fw-bold" to="/">Eaximo</Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-primary active" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-primary dropdown-toggle active" to="#servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/seo">SEO</Link></li>
                                <li><Link className="dropdown-item" to="/sem">SEM</Link></li>
                                <li><Link className="dropdown-item" to="/branding">Branding</Link></li>
                                <li><Link className="dropdown-item" to="/media">Media Solutions</Link></li>
                                <li><Link className="dropdown-item" to="/ai-solutions">AI Solutions</Link></li>
                                <li><Link className="dropdown-item" to="/it-support">IT & Tech Support</Link></li>
                                <li><Link className="dropdown-item" to="/web-development">Web Development</Link></li>
                                <li><Link className="dropdown-item" to="/digital-marketing">Digital Marketing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/careers">Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/academics">Academics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/contact">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
