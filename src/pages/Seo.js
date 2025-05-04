import { Link } from 'react-router-dom';
import React from "react";
import Consultation from "../components/Consultation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Seo.css";

const Seo = () => {
    return (
        <>
            <Navbar />
            <main>
                <section class="seo-hero-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h1 class="hero-title display-4 fw-bold mt-5 pt-5">Dominate Search Rankings with Expert SEO Services</h1>
                                <p class="lead mb-4">Get <strong>more traffic, leads, and sales</strong> with Eaximo's comprehensive digital marketing solutions tailored to your business goals.</p>
                                <div class="d-flex flex-wrap gap-3 mb-5">
                                    <Link to="/services" class="btn btn-primary btn-lg">Explore Services</Link>
                                    <Link to="/contact" class="btn btn-outline-light btn-lg">Get Free Audit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="py-5 my-5" id="services">
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-8 text-center">
                                <h2 class="section-title">Comprehensive SEO Services</h2>
                                <p class="lead">Our <strong>data-driven strategies</strong> help businesses rank higher and attract quality traffic</p>
                            </div>
                        </div>
                        
                        <div class="row g-4">
                            <div class="col-lg-4">
                                <div class="service-card card h-100">
                                    <div class="card-body p-4">
                                        <div class="service-icon">
                                            <i class="fas fa-search"></i>
                                        </div>
                                        <h3 class="h4">Technical SEO</h3>
                                        <ul class="feature-list">
                                            <li>Website speed optimization</li>
                                            <li>Mobile responsiveness audit</li>
                                            <li>Site structure improvement</li>
                                            <li>Schema markup implementation</li>
                                            <li>Indexability analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="service-card card h-100">
                                    <div class="card-body p-4">
                                        <div class="service-icon">
                                            <i class="fas fa-keyboard"></i>
                                        </div>
                                        <h3 class="h4">Content Optimization</h3>
                                        <ul class="feature-list">
                                            <li>Keyword research & strategy</li>
                                            <li>On-page SEO optimization</li>
                                            <li>Content gap analysis</li>
                                            <li>SEO copywriting</li>
                                            <li>Content cluster development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="service-card card h-100">
                                    <div class="card-body p-4">
                                        <div class="service-icon">
                                            <i class="fas fa-link"></i>
                                        </div>
                                        <h3 class="h4">Link Building</h3>
                                        <ul class="feature-list">
                                            <li>Guest posting outreach</li>
                                            <li>Broken link building</li>
                                            <li>Digital PR campaigns</li>
                                            <li>Local citations</li>
                                            <li>Authority backlink acquisition</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="py-5 bg-light">
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-8 text-center">
                                <h2 class="section-title">Digital Marketing Solutions</h2>
                                <p class="lead">Complement your SEO with our <strong>performance-driven marketing services</strong></p>
                            </div>
                        </div>
                        
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-3">
                                <div class="benefit-card">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-ad fa-2x"></i>
                                        </div>
                                        <h3 class="h4 mb-0">PPC Advertising</h3>
                                    </div>
                                    <p>Strategic Google Ads and social media advertising campaigns that drive targeted traffic and conversions.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="benefit-card">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-hashtag fa-2x"></i>
                                        </div>
                                        <h3 class="h4 mb-0">Social Media Marketing</h3>
                                    </div>
                                    <p>Platform-specific strategies to grow your audience and engagement across all major social networks.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="benefit-card">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-envelope-open-text fa-2x"></i>
                                        </div>
                                        <h3 class="h4 mb-0">Email Marketing</h3>
                                    </div>
                                    <p>Automated email sequences and newsletter campaigns that nurture leads and drive repeat business.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="benefit-card">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="me-3 text-primary">
                                            <i class="fas fa-chart-line fa-2x"></i>
                                        </div>
                                        <h3 class="h4 mb-0">Conversion Optimization</h3>
                                    </div>
                                    <p>Data-driven improvements to your website that increase lead generation and sales conversions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="py-5 my-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <h2 class="section-title">Proven Results</h2>
                                <p class="lead mb-4">We deliver <strong>measurable improvements</strong> to your online visibility and business growth</p>
                                <p>Our data-driven approach combines technical expertise with creative marketing strategies to achieve sustainable results. We don't just chase rankings - we focus on metrics that actually impact your bottom line.</p>
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <div class="stats-card">
                                            <div class="display-4 fw-bold mb-2">300%+</div>
                                            <p class="mb-0">Average traffic increase</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="stats-card">
                                            <div class="display-4 fw-bold mb-2">5-10x</div>
                                            <p class="mb-0">ROI on marketing spend</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="SEO analytics dashboard" 
                                    class="img-fluid rounded-3 shadow" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <Consultation />
            </main>
            <Footer />
        </>
    );
};

export default Seo;
