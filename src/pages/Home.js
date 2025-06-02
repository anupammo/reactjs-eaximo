import "./Home.css";
// import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Connect from "../components/Connect";
import SeoHelmet from "../components/SeoHelmet";
import Testimonis from "../components/Testimonis";
import StatsNumber from "../components/StatsNumber";
import Consultation from "../components/Consultation";

const Home = () => {
    return (
        <>
            <SeoHelmet
                title="Eaximo - Digital Marketing Agency | SEO, Branding & Web Solutions"
                description="Boost your online presence with Eaximo! We offer expert digital marketing, branding, web development, and AI-powered services for businesses looking to scale. Get your free consultation today!"
                url="https://eaximo.com/"
                image="https://eaximo.com/meta-image/home.png"
                meta={[
                    { property: "og:title", content: "Eaximo - Digital Marketing Agency | SEO, Branding & Web Solutions" },
                    { property: "og:description", content: "Boost your online presence with Eaximo! We offer expert digital marketing, branding, web development, and AI-powered services for businesses looking to scale. Get your free consultation today!" },
                    { property: "og:image", content: "https://eaximo.com/meta-image/home.png" },
                    { property: "og:url", content: "https://eaximo.com/" },
                    { name: "twitter:title", content: "Eaximo - Digital Marketing Agency | SEO, Branding & Web Solutions" },
                    { name: "twitter:description", content: "Boost your online presence with Eaximo! We offer expert digital marketing, branding, web development, and AI-powered services for businesses looking to scale. Get your free consultation today!" },
                    { name: "twitter:image", content: "https://eaximo.com/meta-image/home.png" }
                ]}
            />

            <Navbar />
            <main>
                <header className="hero-home">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fs-sm-3 fs-md-2 fs-lg-1 mt-5 pt-5">Accelerate Your Growth with Expert
                                    <strong className="fs-sm-3 fs-md-2 fs-lg-1 text-primary"> Digital Marketing</strong> &amp;
                                    <strong className="fs-sm-3 fs-md-2 fs-lg-1 text-primary"> AI Solutions</strong>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <p className="fs-5 mt-4">Your trusted partner for digital marketing, web development, and AI-powered business solutions.</p>
                                <p className="fs-5 mb-4">Eaximo helps brands thrive with cutting-edge SEO, web development, and AI-powered strategies.</p>
                                <p className="fs-5 mb-4">Check out our <strong>Best Services</strong></p>
                                <hr className="w-25" />
                                <div className="d-flex flex-wrap gap-3 my-4">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 text-light">
                                            <i className="fas fa-check-circle fa-lg"></i>
                                        </div>
                                        <span>Digital Marketing</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 text-light">
                                            <i className="fas fa-check-circle fa-lg"></i>
                                        </div>
                                        <span>SEO & Growth</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 text-light">
                                            <i className="fas fa-check-circle fa-lg"></i>
                                        </div>
                                        <span>Website Design</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 text-light">
                                            <i className="fas fa-check-circle fa-lg"></i>
                                        </div>
                                        <span>Web Development</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap gap-3 my-5">
                                    <Link to="/contact" className="btn btn-dark">Free Consultation</Link>
                                    <Link to="/services" className="btn btn-outline-primary">Our Services</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12"></div>
                        </div>
                    </div>
                </header>

                <section className="py-5 my-5" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="section-title mb-4">About Eaximo</h2>
                                    <p className="lead mb-4">Welcome to <strong>Eaximo</strong>, your trusted <strong>digital marketing agency</strong> specializing in <strong>SEO, branding, and web solutions</strong>.</p>
                                    <p>Our data-driven approach ensures higher engagement, <strong>boosts website traffic</strong>, and drives more conversions for businesses of all sizes. We combine creativity with analytics to deliver measurable results.</p>
                                    <div className="d-flex flex-wrap gap-3 mt-4">
                                        <div className="d-flex align-items-center">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-check-circle fa-lg"></i>
                                            </div>
                                            <span>10+ Years Experience</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-check-circle fa-lg"></i>
                                            </div>
                                            <span>500+ Projects Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="/about-eaximo.webp" alt="Digital marketing team working" 
                                className="img-fluid rounded-3 shadow" width={500} height={331} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <StatsNumber />
                
                <section className="py-5 bg-light" id="services">
                    <div className="container my-5">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Key Services</h2>
                                <p className="lead">Comprehensive digital marketing solutions tailored to your business needs</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h3 className="h4 mb-4">Website SEO Services</h3>
                                        <p className="text-muted">Optimize your website to rank higher on Google and drive organic traffic with proven SEO strategies.</p>
                                        <Link to="/seo" className="btn btn-outline-primary mt-3">Explore SEO</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <h3 className="h4 mb-4">Website Development</h3>
                                        <p className="text-muted">Build fast, scalable, and responsive business websites that convert visitors into customers.</p>
                                        <Link to="/web-development" className="btn btn-outline-primary mt-3">Explore Development</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-bullhorn"></i>
                                        </div>
                                        <h3 className="h4 mb-4">Social Media Marketing</h3>
                                        <p className="text-muted">Strengthen brand presence and connect with your audience through targeted social campaigns.</p>
                                        <Link to="/digital-marketing" className="btn btn-outline-primary mt-3">Explore Marketing</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-robot"></i>
                                        </div>
                                        <h3 className="h4 mb-4">AI Powered Marketing</h3>
                                        <p className="text-muted">Enhance efficiency with our smart AI-powered tools for marketing automation and analytics.</p>
                                        <Link to="/ai-solutions" className="btn btn-outline-primary mt-3">AI Marketing</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/services" className="btn btn-primary btn-lg">Discover All Services</Link>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="why-us">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo?</h2>
                                <p className="lead mb-5">We deliver measurable results through innovative strategies</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="h4">Data-Driven Campaigns</h3>
                                <p>Our strategies are backed by real-time analytics and performance tracking to ensure maximum ROI for your marketing spend.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="feature-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="h4">Expert Consultation</h3>
                                <p>Get customized SEO strategies tailored to your business goals for better search ranking and increased visibility.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="feature-icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3 className="h4">AI-Powered Insights</h3>
                                <p>Leverage our smart solutions for automated digital marketing that adapts to market trends and customer behavior.</p>
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

export default Home;
