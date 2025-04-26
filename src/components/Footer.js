import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <h3 className="h5 text-white mb-4">Eaximo</h3>
                        <p>Your trusted partner for digital marketing, web development, and AI-powered business solutions.</p>
                        <div className="d-flex mt-4">
                            <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="/" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/" className="social-icon"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h3 className="h5 text-white mb-4">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">Home</a></li>
                            <li className="mb-2"><a href="/services" className="nav-link text-white-50">Services</a></li>
                            <li className="mb-2"><a href="/about" className="nav-link text-white-50">About</a></li>
                            <li className="mb-2"><a href="/testimonials" className="nav-link text-white-50">Testimonials</a></li>
                            <li className="mb-2"><a href="/contact" className="nav-link text-white-50">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 className="h5 text-white mb-4">Services</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">SEO Services</a></li>
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">Web Development</a></li>
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">Social Media Marketing</a></li>
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">AI Marketing Solutions</a></li>
                            <li className="mb-2"><a href="/" className="nav-link text-white-50">Branding & Design</a></li>
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
                        <p className="small nav-link text-white-50 mb-0">Designed with <i className="fas fa-heart text-danger"></i> by Anupam Mondal</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
