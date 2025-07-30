import { Link } from 'react-router-dom';
import React from "react";

const Footer = () => {
    return (
        <footer className='home-hero text-white' style={{backgroundColor: '#000B18'}}>
            <div className='boxes'>
                <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <Link className="navbar-brand text-uppercase text-primary fw-bold" title='Eaximo' to="/">
                                <img src="/eaximo-logo.png" alt="Eaximo Logo White" className='img-fluid mb-4' width={142} height={24} />
                            </Link>
                            {/* <h3 className="h5 text-white mb-4">Eaximo</h3> */}
                            <p>Your trusted partner for digital marketing, web development, and AI-powered business solutions.</p>
                            <h3 className="text-white h5 mb-4">
                                <span className="text-gradient">Newsletter</span>
                            </h3>
                            <p className="nav-link text-white mb-4">Subscribe to get marketing tips and industry insights.</p>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h3 className="text-white h5 mb-4">
                                <span className='text-gradient'>Quick Links</span>
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/" className="nav-link text-white">Home</Link></li>
                                <li className="mb-2"><Link to="/portfolio" className="nav-link text-white">Portfolio</Link></li>
                                <li className="mb-2"><Link to="/about" className="nav-link text-white">About Us</Link></li>
                                <li className="mb-2"><Link to="/team" className="nav-link text-white">Our Team</Link></li>
                                <li className="mb-2"><Link to="/careers" className="nav-link text-white">Careers</Link></li>
                                <li className="mb-2"><Link to="/academics" className="nav-link text-white">Academics</Link></li>
                                <li className="mb-2"><Link to="/blog" className="nav-link text-white">Blog</Link></li>
                                <li className="mb-2"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h3 className="text-gradient text-white h5 mb-4">
                                <span className="text-gradient">Services</span>
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/" className="nav-link text-white">Web Development</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">Digital Marketing</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">SEO Services</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">SEM Services</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">IT & Tech Support</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">AI Solutions</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">Branding & Designing</Link></li>
                                <li className="mb-2"><Link to="/" className="nav-link text-white">Media Solutions</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    {/* <hr className="mt-4 mb-3 border-secondary" /> */}
                    <div className="row mb-5 pt-4">
                        <div className="col-12 text-center text-md-start">
                            <div className="d-flex">
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
                        <div className="col-12 text-center text-md-start">
                            <p className="small nav-link text-white mt-5 mb-0">© 2025 Eaximo. All rights reserved.</p>
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            <p className="small nav-link text-white mb-0">Designed by <Link className="d-inline-block nav-link text-white" to="https://anupammondal.in" target="_blank" rel="noreferrer">Anupam Mondal</Link></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
