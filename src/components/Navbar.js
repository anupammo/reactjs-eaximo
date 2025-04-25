import React, { useEffect, useState } from "react";

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
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand text-uppercase text-primary fw-bold" href="#">Eaximo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-primary active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item ms-lg-3">
                            <a className="btn btn-primary" href="#contact">Get Started</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
