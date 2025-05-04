import { Link } from 'react-router-dom';
import React from "react";

const Header = () => {
    return (
        <header className="hero-section" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h1 className="hero-title fw-bold display-4 mt-5 pt-5">Accelerate Your Growth with Expert Digital Marketing & AI Solutions</h1>
                        <p className="lead mb-4">Eaximo helps brands thrive with cutting-edge SEO, web development, and AI-powered strategies.</p>
                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
                            <Link to="/services" className="btn btn-outline-light btn-lg">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
