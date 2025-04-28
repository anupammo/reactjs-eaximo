import React from "react";
import Consultation from "../components/Consultation";
import Connect from "../components/Connect";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Brand.css";

const Brand = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="brand-hero-section pb-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold mt-5 pt-5">Empower Your Brand with Stunning Visuals & Strategy</h1>
                                <p className="lead mb-4">At <strong>Eaximo</strong>, we craft <strong>unique brand identities, professional designs, and high-quality prints</strong> to help businesses stand out.</p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <a href="#branding" className="btn btn-primary btn-lg">Explore Services</a>
                                    <a href="#contact" className="btn btn-outline-light btn-lg">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5 my-5" id="branding">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Brand Identity Creation</h2>
                                <p className="lead">Crafting a <strong>strong brand identity</strong> involves more than just visuals—it's about making a <strong>lasting impression</strong></p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-trademark"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Complete Brand Development</h3>
                                        <ul className="feature-list">
                                            <li><strong>Business Name Creation</strong> - Unique, industry-relevant brand names</li>
                                            <li><strong>Tagline & Slogan Development</strong> - Memorable phrases to strengthen brand recall</li>
                                            <li><strong>Brand Strategy & Positioning</strong> - Market research & competitor analysis</li>
                                            <li><strong>Logo Design</strong> - Custom concepts with multiple revisions</li>
                                            <li><strong>Brand Color & Typography Selection</strong> - Consistent design language</li>
                                            <li><strong>Brand Style Guide</strong> - Comprehensive guidelines for consistency</li>
                                            <li><strong>Rebranding Services</strong> - Modernizing outdated branding</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="h-100 d-flex align-items-center">
                                    <img src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Brand identity design process" className="img-fluid rounded-3 shadow" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Let's Craft Your Unique Brand Identity Today!</a>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Graphic Design Services</h2>
                                <p className="lead">Visuals <strong>shape</strong> brand perception—our designs ensure businesses create <strong>memorable</strong> impressions</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-hashtag fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Social Media Design</h3>
                                    </div>
                                    <p>Eye-catching content tailored for engagement across all platforms including Instagram, Facebook, LinkedIn and Twitter.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-file-alt fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Marketing Materials</h3>
                                    </div>
                                    <p>Professional brochures, flyers & posters with compelling designs that communicate your brand message effectively.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-id-card fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Corporate Identity</h3>
                                    </div>
                                    <p>High-end business cards, letterheads and stationery that reflect your professional brand image.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-chart-pie fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Infographics</h3>
                                    </div>
                                    <p>Presenting complex data and insights through smart, visually appealing infographics.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-tv fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Presentations</h3>
                                    </div>
                                    <p>Powerful pitch decks and corporate presentations with professional storytelling formats.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-gift fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Packaging Design</h3>
                                    </div>
                                    <p>Captivating product packaging and labels that enhance shelf appeal and brand recognition.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Get Stunning Graphics for Your Business!</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Professional Printing Services</h2>
                                <p className="lead">We ensure your <strong>print materials</strong> match the <strong>excellence of your brand</strong></p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Professional printing services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-print"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Premium Printing Solutions</h3>
                                        <ul className="feature-list">
                                            <li><strong>Business Stationery</strong> - Premium business cards, letterheads and office materials</li>
                                            <li><strong>Marketing Collaterals</strong> - High-resolution flyers, posters and brochures</li>
                                            <li><strong>Product Packaging</strong> - Branded packaging with various finishing options</li>
                                            <li><strong>Promotional Items</strong> - T-shirts, mugs and corporate gifts</li>
                                            <li><strong>Large Format Printing</strong> - Banners, hoardings and vehicle wraps</li>
                                            <li><strong>Custom Merchandise</strong> - Personalized products for events and branding kits</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Print Your Brand with Excellence!</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo for Branding & Printing?</h2>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card text-center h-100">
                                    <div className="feature-icon mx-auto mb-4">
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <h3 className="h4">Creative & Strategic</h3>
                                    <p>We combine artistic flair with smart branding strategies for maximum impact.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card text-center h-100">
                                    <div className="feature-icon mx-auto mb-4">
                                        <i className="fas fa-pencil-ruler"></i>
                                    </div>
                                    <h3 className="h4">Custom Designs</h3>
                                    <p>Tailored solutions that match your unique business goals and vision.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card text-center h-100">
                                    <div className="feature-icon mx-auto mb-4">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <h3 className="h4">Expert Team</h3>
                                    <p>Knowledgeable professionals well-versed in industry trends and techniques.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-card text-center h-100">
                                    <div className="feature-icon mx-auto mb-4">
                                        <i className="fas fa-tasks"></i>
                                    </div>
                                    <h3 className="h4">End-to-End Service</h3>
                                    <p>From initial concept to final execution, we handle every detail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Consultation />

                <Connect />
            </main>
            <Footer />
        </>
    );
};

export default Brand;
