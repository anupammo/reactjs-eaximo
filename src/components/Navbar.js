import "./Navbar.css";
import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from "react";

const Navbar = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 50);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    
    return (
        <nav className={`navbar navbar-expand-md navbar-dark bg-white bg-opacity-100 fixed-top`}>
            <div className="container">
                <Link className="navbar-brand text-primary" title='eaximo' to="/">                    
                    <img src="/favicon.ico" alt="eaximo Logo" className="me-1" />
                    eaximo
                </Link>
                <button className="navbar-toggler shadow-none bg-primary" title='Menu' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-primary active" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-primary dropdown-toggle active" to="#servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About us
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                                <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-primary dropdown-toggle active" to="#servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/web-development">Web Development</Link></li>
                                <li><Link className="dropdown-item" to="/digital-marketing">Digital Marketing</Link></li>
                                <li><Link className="dropdown-item" to="/seo">SEO Services</Link></li>
                                <li><Link className="dropdown-item" to="/sem">SEM Services</Link></li>
                                <li><Link className="dropdown-item" to="/it-support">IT & Tech Support</Link></li>
                                <li><Link className="dropdown-item" to="/ai-solutions">AI Solutions</Link></li>
                                <li><Link className="dropdown-item" to="/branding">Branding & Designing</Link></li>
                                <li><Link className="dropdown-item" to="/media">Media Solutions</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-primary dropdown-toggle active" to="#servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Explore
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/careers">Careers</Link></li>
                                <li><Link className="dropdown-item" to="/academics">Academics</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
