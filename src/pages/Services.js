import React from "react";
import { Link } from 'react-router-dom';
import SeoHelmet from "../components/SeoHelmet";
import Navbar from "../components/Navbar";
import Testimonis from "../components/Testimonis";
import Consultation from "../components/Consultation";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import "./Services.css"

const Services = () => {
    return (
        <>
            <SeoHelmet
                title="Digital Services & Solutions | Eaximo"
                description="Explore Eaximo's comprehensive digital services - AI solutions, IT support, digital marketing, web development, and more. Partner with us for your digital transformation."
                url="https://anupammo.github.io/reactjs-eaximo/#/services"
                image="https://anupammo.github.io/reactjs-eaximo/meta-image/services.jpg"
            />
            <Navbar />
            <main>                
                <header className="services-hero py-5" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="display-4 fw-bold mt-5 mb-4">Comprehensive Digital Services for Your Business</h1>
                                <p className="lead mb-4">Eaximo offers end-to-end digital solutions to help your business <strong>thrive in the digital landscape</strong>. From AI-powered automation to cutting-edge web development, we've got you covered.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link to="/services" className="btn btn-primary btn-lg px-4">Explore Services</Link>
                                    <Link to="/contact" className="btn btn-outline-light btn-lg px-4">Get Consultation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5 my-5" id="services">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <span className="category-badge">Our Service Portfolio</span><br />
                                <h2 className="section-title">Digital Solutions That Drive Results</h2>
                                <p className="lead">Comprehensive services tailored to your business requirements</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="card service-card ai-service rounded-0 h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-robot"></i>
                                        </div>
                                        <h3 className="h4">AI-Powered Services</h3>
                                        <p className="text-muted">Transform your business with cutting-edge artificial intelligence solutions.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="text-ai-purple mb-1"><i className="fas fa-check-circle me-2"></i>AI Content Creation</li>
                                            <li className="text-ai-purple mb-1"><i className="fas fa-check-circle me-2"></i>Chatbots & Automation</li>
                                            <li className="text-ai-purple mb-1"><i className="fas fa-check-circle me-2"></i>Predictive Analytics</li>
                                            <li className="text-ai-purple mb-1"><i className="fas fa-check-circle me-2"></i>Custom AI Development</li>
                                        </ul>
                                        <Link to="/ai-solutions" className="btn btn-outline-dark rounded-0 w-100">Explore AI Services</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="card service-card tech-service rounded-0 h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-laptop-code"></i>
                                        </div>
                                        <h3 className="h4">IT & Tech <br />Support</h3>
                                        <p className="text-muted">Reliable technology solutions to keep your business running smoothly.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="mb-1"><i className="fas fa-check-circle me-2"></i>App Development</li>
                                            <li className="mb-1"><i className="fas fa-check-circle me-2"></i>Software Solutions</li>
                                            <li className="mb-1"><i className="fas fa-check-circle me-2"></i>Technical Support</li>
                                            <li className="mb-1"><i className="fas fa-check-circle me-2"></i>Cybersecurity</li>
                                        </ul>
                                        <Link to="/it-support" className="btn btn-outline-dark rounded-0 w-100">Explore IT Services</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="card service-card marketing-service rounded-0 h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h3 className="h4">Digital <br />Marketing</h3>
                                        <p className="text-muted">Data-driven strategies to grow your online presence and customer base.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="text-marketing-orange mb-1"><i className="fas fa-check-circle me-2"></i>SEO Services</li>
                                            <li className="text-marketing-orange mb-1"><i className="fas fa-check-circle me-2"></i>Social Media Marketing</li>
                                            <li className="text-marketing-orange mb-1"><i className="fas fa-check-circle me-2"></i>PPC Advertising</li>
                                            <li className="text-marketing-orange mb-1"><i className="fas fa-check-circle me-2"></i>Content Marketing</li>
                                        </ul>
                                        <Link to="/digital-marketing" className="btn btn-outline-dark rounded-0 w-100">Explore Marketing</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="card service-card web-service rounded-0 h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-globe"></i>
                                        </div>
                                        <h3 className="h4">Web <br />Development</h3>
                                        <p className="text-muted">High-performance websites and web applications that convert visitors.</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="web-green mb-1"><i className="fas fa-check-circle me-2"></i>Custom Website Design</li>
                                            <li className="web-greenmb-1"><i className="fas fa-check-circle me-2"></i>E-Commerce Solutions</li>
                                            <li className="web-green mb-1"><i className="fas fa-check-circle me-2"></i>Web App Development</li>
                                            <li className="web-green mb-1"><i className="fas fa-check-circle me-2"></i>Website Maintenance</li>
                                        </ul>
                                        <Link to="/web-development" className="btn btn-outline-dark rounded-0 w-100">Explore Web Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <span className="category-badge">How We Work</span><br />
                                <h2 className="section-title">Our Proven Process</h2>
                                <p className="lead">A structured approach to delivering exceptional results</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="process-step">
                                    <div className="step-number">1</div>
                                    <div>
                                        <h3 className="h4">Discovery & Strategy</h3>
                                        <p>We begin by understanding your business goals, target audience, and competitive landscape. Our team conducts thorough research to develop a customized strategy tailored to your specific needs.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-number">2</div>
                                    <div>
                                        <h3 className="h4">Planning & Proposal</h3>
                                        <p>After analysis, we present a detailed proposal outlining our recommended solutions, timeline, and investment. We refine the plan based on your feedback until we have perfect alignment.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-number">3</div>
                                    <div>
                                        <h3 className="h4">Execution & Implementation</h3>
                                        <p>Our expert team gets to work implementing the approved strategy using industry best practices and cutting-edge technologies. We maintain transparent communication throughout the process.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-number">4</div>
                                    <div>
                                        <h3 className="h4">Testing & Optimization</h3>
                                        <p>Before delivery, we rigorously test all solutions and optimize performance. For ongoing services, we establish key performance indicators and continuous improvement processes.</p>
                                    </div>
                                </div>
                                <div className="process-step">
                                    <div className="step-number">5</div>
                                    <div>
                                        <h3 className="h4">Launch & Growth</h3>
                                        <p>We deploy the final product and monitor initial performance. For long-term partnerships, we provide ongoing support, regular reporting, and strategic adjustments to ensure continued success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Testimonis />
                
                <Consultation />
                
                <Connect />
            </main>
            <Footer />
        </>
    );
};

export default Services;
