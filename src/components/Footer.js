import { Link } from 'react-router-dom';
import React from "react";

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <h3 className="h5 text-white mb-4">Eaximo</h3>
                        <p>Your trusted partner for digital marketing, web development, and AI-powered business solutions.</p>
                        <div className="d-flex mt-4">
                            <Link to="/" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                                <span>facebook</span>
                            </Link>
                            <Link to="/" className="social-icon">
                                <i className="fab fa-twitter"></i>
                                <span>twitter</span>
                            </Link>
                            <Link to="/" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                                <span>linkedin</span>
                            </Link>
                            <Link to="/" className="social-icon">
                                <i className="fab fa-instagram"></i>
                                <span>instagram</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h3 className="h5 text-white mb-4">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">Home</Link></li>
                            <li className="mb-2"><Link to="/services" className="nav-link text-white-50">Services</Link></li>
                            <li className="mb-2"><Link to="/about" className="nav-link text-white-50">About</Link></li>
                            <li className="mb-2"><Link to="/testimonials" className="nav-link text-white-50">Testimonials</Link></li>
                            <li className="mb-2"><Link to="/contact" className="nav-link text-white-50">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 className="h5 text-white mb-4">Services</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">SEO Services</Link></li>
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">Web Development</Link></li>
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">Social Media Marketing</Link></li>
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">AI Marketing Solutions</Link></li>
                            <li className="mb-2"><Link to="/" className="nav-link text-white-50">Branding & Design</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="h5 text-white mb-4">Newsletter</h3>
                        <p className="nav-link text-white-50 mb-4">Subscribe to get marketing tips and industry insights.</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="mt-4 mb-3 border-secondary" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="small nav-link text-white-50 mb-0">© 2025 Eaximo. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="small nav-link text-white-50 mb-0">Designed by <Link className="d-inline-block nav-link text-white" to="https://anupammondal.in" target="_blank" rel="noreferrer">Anupam Mondal</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
