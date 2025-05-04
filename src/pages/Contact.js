import { Link } from 'react-router-dom';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 my-5">
                                <h1 className="hero-title display-4 fw-bold mt-5">Let's Connect & Grow Your Business</h1>
                                <p className="lead mb-4">Have questions? Need a custom marketing strategy or website optimization plan? We're here to help!</p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <Link to="/contact-form" className="btn btn-primary btn-lg">Get Free Consultation</Link>
                                    <Link to="/contact-info" className="btn btn-outline-light btn-lg">Contact Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5" id="contact-info">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Contact Details</h2>
                                <p className="lead">Connect with Eaximo's digital experts today</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h3 className="h4 mb-3">Office Address</h3>
                                    <p className="mb-0">123 Business Avenue<br />Suite 456<br />New York, NY 10001</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <h3 className="h4 mb-3">Phone</h3>
                                    <p className="mb-0">+1 (555) 123-4567<br />Mon-Fri: 9am-6pm EST</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <h3 className="h4 mb-3">Email & Website</h3>
                                    <p className="mb-0">info@eaximo.com<br />www.eaximo.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <h4 className="h5 mb-3">Social Media Handles</h4>
                            <div className="d-flex justify-content-center">
                                <Link to="/" className="social-icon"><i className="fab fa-linkedin-in"></i></Link>
                                <Link to="/" className="social-icon"><i className="fab fa-instagram"></i></Link>
                                <Link to="/" className="social-icon"><i className="fab fa-youtube"></i></Link>
                                <Link to="/" className="social-icon"><i className="fab fa-twitter"></i></Link>
                                <Link to="/" className="social-icon"><i className="fab fa-facebook-f"></i></Link>
                            </div>
                            <div className="alert alert-primary d-inline-flex align-items-center mt-4" role="alert">
                                <i className="fas fa-lightbulb me-2"></i>
                                <div>Want to stay updated? Follow us for industry insights & digital trends!</div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="form-section py-5" id="contact-form">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body p-5">
                                        <h2 className="section-title text-center mb-4">Inquiry Form – Get a Free Consultation</h2>
                                        <p className="text-center mb-5">Fill out the form below and we'll get back to you within 24 hours</p>
                                        
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="name" className="form-label">Your Full Name</label>
                                                    <input type="text" className="form-control" id="name" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="email" className="form-label">Your Email Address</label>
                                                    <input type="email" className="form-control" id="email" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="phone" className="form-label">Your Contact Number</label>
                                                    <input type="tel" className="form-control" id="phone" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="business-type" className="form-label">Business Type</label>
                                                    <select className="form-select" id="business-type" defaultValue="option1">
                                                        <option disabled>Select your business type</option>
                                                        <option>Startup</option>
                                                        <option>SME</option>
                                                        <option>Enterprise</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="service" className="form-label">Service Interest</label>
                                                    <select className="form-select" id="service" defaultValue="option1">
                                                        <option disabled>Select service of interest</option>
                                                        <option>SEO Services</option>
                                                        <option>Branding & Design</option>
                                                        <option>Web Development</option>
                                                        <option>AI Marketing Solutions</option>
                                                        <option>Multiple Services</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="message" className="form-label">How Can We Help You?</label>
                                                    <textarea className="form-control" id="message" rows="5" required></textarea>
                                                </div>
                                                <div className="col-12 text-center mt-4">
                                                    <button type="submit" className="btn btn-primary btn-lg px-5">Submit & Get a Consultation</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Frequently Asked Questions</h2>
                                <p className="lead">Common questions about our services and process</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="faq-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h5 mb-3">How can Eaximo help my business grow?</h3>
                                        <p className="mb-0">We craft <strong>SEO-driven marketing strategies, branding solutions, and AI-powered automation</strong> to boost visibility and drive conversions. Our data-driven approach ensures measurable results tailored to your business objectives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h5 mb-3">What industries do you specialize in?</h3>
                                        <p className="mb-0">We work with <strong>startups, enterprises, e-commerce brands, real estate, tech companies, and service-based businesses</strong>. Our strategies are adaptable to various industries and business models.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h5 mb-3">Do you offer tailored digital solutions?</h3>
                                        <p className="mb-0">Yes! Our <strong>custom marketing plans</strong> align with <strong>your business goals, target audience, and industry trends</strong> for optimal success. We don't believe in one-size-fits-all solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h5 mb-3">How do I get started?</h3>
                                        <p className="mb-0">Simply <strong>reach out via email or fill out our inquiry form</strong>—we'll schedule a consultation to discuss your needs. Our process begins with understanding your unique challenges and objectives.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <Link to="/contact-form" className="btn btn-primary btn-lg px-5">Let's build your digital success story today!</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
