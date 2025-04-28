import React from "react";
import Consultation from "../components/Consultation";
// import Connect from "../components/Connect";
// import Testimonis from "../components/Testimonis";
// import Counter from "../components/Counter"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Web.css";

const Web = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="web-hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold mt-5 pt-5">Transform Your Online Presence</h1>
                                <p className="lead mb-4">A well-designed website is the <strong>foundation of digital success</strong>. We specialize in custom solutions that engage audiences and drive conversions.</p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <a href="#services" className="btn btn-primary btn-lg">Explore Services</a>
                                    <a href="#contact" className="btn btn-outline-light btn-lg">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5" id="services">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Web Solutions Services</h2>
                                <p className="lead">Custom websites designed for <strong>performance, aesthetics, and results</strong></p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-paint-brush"></i>
                                        </div>
                                        <h3 className="h4">Website Design</h3>
                                        <p>Beautiful, functional designs tailored to your brand identity and business goals.</p>
                                        <a href="#design" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <h3 className="h4">Website Development</h3>
                                        <p>Robust, scalable websites built with clean code and modern technologies.</p>
                                        <a href="#development" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-shopping-cart"></i>
                                        </div>
                                        <h3 className="h4">E-Commerce Solutions</h3>
                                        <p>Powerful online stores designed to convert visitors into customers.</p>
                                        <a href="#ecommerce" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="design">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Website Design Services</h2>
                                <p className="lead">Custom designs that <strong>captivate visitors</strong> and reflect your brand identity</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-palette fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Custom Website Design</h3>
                                            <p className="mb-0">Tailored aesthetics that match your brand identity</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-mobile-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Responsive Web Design</h3>
                                            <p className="mb-0">Mobile-optimized layouts for all devices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-window-maximize fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Landing Page <br />Design</h3>
                                            <p className="mb-0">High-converting designs for campaigns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-user-friends fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">UI/UX Design</h3>
                                            <p className="mb-0">Enhancing the user engagement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-sync-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Website Redesign</h3>
                                            <p className="mb-0">Modernizing outdated designs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="web-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-search fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">SEO-Focused Design</h3>
                                            <p className="mb-0">Structuring for search visibility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Create a Website That Drives Growth!</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="development">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Website Development Services</h2>
                                <p className="lead">Robust, <strong>high-performance</strong> websites built with modern technologies</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h3 className="h2 mb-4">Comprehensive Development Solutions</h3>
                                <div className="h-100">
                                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Website development" className="img-fluid rounded-3 shadow" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon text-center display-1">
                                            <i className="fas fa-laptop-code"></i>
                                        </div>
                                        <ul className="feature-list">
                                            <li><strong>WordPress Development</strong> - Custom themes & plugins</li>
                                            <li><strong>Custom Website Development</strong> - Scalable solutions</li>
                                            <li><strong>CMS Integration</strong> - Easy content management</li>
                                            <li><strong>Web Applications</strong> - Portals, CRM & admin tools</li>
                                            <li><strong>API Integration</strong> - Third-party connectivity</li>
                                            <li><strong>Website Maintenance</strong> - Updates & security</li>
                                            <li><strong>Performance Optimization</strong> - Speed enhancements</li>
                                            <li><strong>Security Implementation</strong> - Data protection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Build a High-Performance Website Today!</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Website Types We Develop</h2>
                                <p className="lead">Custom solutions for <strong>every business need</strong></p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-4">Business & Informational Websites</h3>
                                        <ul className="feature-list">
                                            <li>Corporate Business Websites</li>
                                            <li>Portfolio & Personal Websites</li>
                                            <li>Landing Pages & One-Page Sites</li>
                                            <li>News/Magazine Platforms</li>
                                            <li>Educational/Institutional Sites</li>
                                            <li>Nonprofit/Charity Websites</li>
                                            <li>Forum & Community Platforms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-4">E-Commerce Websites</h3>
                                        <ul className="feature-list">
                                            <li>WooCommerce/Shopify/Magento</li>
                                            <li>Product Catalog Optimization</li>
                                            <li>Payment Gateway Integration</li>
                                            <li>Shopping Cart Systems</li>
                                            <li>Inventory Management</li>
                                            <li>Shipping & Tax Configuration</li>
                                            <li>Customer Account Features</li>
                                            <li>Sales Analytics & Reporting</li>
                                        </ul>
                                        <div className="mt-3">
                                            <a href="#contact" className="btn btn-outline-primary">Launch Your Online Store</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="benefits-section">
                    <div className="container">
                        <div className="row justify-content-center my-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo for Web Solutions?</h2>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <h3 className="h5">SEO-Optimized</h3>
                                    <p>Designed to rank higher in search results from day one</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <h3 className="h5">Mobile-Friendly</h3>
                                    <p>Perfect experience on all devices and screen sizes</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-bolt"></i>
                                    </div>
                                    <h3 className="h5">Fast & Secure</h3>
                                    <p>Speed-enhanced platforms with robust security</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-expand"></i>
                                    </div>
                                    <h3 className="h5">Scalable</h3>
                                    <p>Tailored solutions that grow with your business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <Testimonis /> */}
                
                <Consultation />
                
                {/* <Connect /> */}
            </main>
            <Footer />
        </>
    );
};

export default Web;
