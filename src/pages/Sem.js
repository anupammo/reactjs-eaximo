import "./Sem.css";
import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHelmet from "../components/SeoHelmet";
// import Connect from "../components/Connect";
// import Counter from "../components/Counter"
// import Testimonis from "../components/Testimonis";
import Consultation from "../components/Consultation";

const Sem = () => {
    return (
        <>
            <SeoHelmet
                title="SEM Fuels Your Business Growth | Eaximo"
                description="We craft performance-driven digital marketing strategies that increase brand awareness, improve search rankings, and maximize lead conversions."
                url="https://eaximo.com/sem"
                image="https://eaximo.com/meta-image/sem.png"
                meta={[
                    { property: "og:title", content: "SEM Fuels Your Business Growth | Eaximo" },
                    { property: "og:description", content: "We craft performance-driven digital marketing strategies that increase brand awareness, improve search rankings, and maximize lead conversions." },
                    { property: "og:image", content: "https://eaximo.com/meta-image/sem.png" },
                    { property: "og:url", content: "https://eaximo.com/sem" },
                    { name: "twitter:title", content: "SEM Fuels Your Business Growth | Eaximo" },
                    { name: "twitter:description", content: "We craft performance-driven digital marketing strategies that increase brand awareness, improve search rankings, and maximize lead conversions." },
                    { name: "twitter:image", content: "https://eaximo.com/meta-image/sem.png" }
                ]}
            />

            <Navbar />
            <main>
                <header className="sem-hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold">Fuel Your Business Growth</h1>
                                <p className="lead mb-4">We craft <strong>performance-driven digital marketing strategies</strong> that increase brand awareness, improve search rankings, and maximize lead conversions.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link to="/services" className="btn btn-primary btn-lg">Explore Services</Link>
                                    <Link to="/contact" className="btn btn-outline-light btn-lg">Get Free Consultation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5 my-5" id="services">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Digital Marketing Services</h2>
                                <p className="lead">Comprehensive solutions to <strong>grow your online presence</strong> and drive business results</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h3 className="h4">SEO Services</h3>
                                        <p>Improve search rankings and drive organic traffic with our proven strategies.</p>
                                        <Link to="/seo" className="btn btn-outline-primary mt-3">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-ad"></i>
                                        </div>
                                        <h3 className="h4">Paid Advertising</h3>
                                        <p>Targeted PPC campaigns that deliver measurable results.</p>
                                        <Link to="/ppc" className="btn btn-outline-primary mt-3">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <h3 className="h4">Social Media Marketing</h3>
                                        <p>Grow your audience and engagement across platforms.</p>
                                        <Link to="/social" className="btn btn-outline-primary mt-3">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="seo">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Search Engine Optimization (SEO)</h2>
                                <p className="lead">Improve your <strong>search visibility</strong> and attract quality traffic</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-file-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">On-Page & Off-Page SEO</h3>
                                            <p className="mb-0">Content structuring, backlinking, and keyword strategy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-cog fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Technical SEO</h3>
                                            <p className="mb-0">Faster website load time & indexing improvements</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-map-marker-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Local SEO</h3>
                                            <p className="mb-0">Google My Business optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-shopping-cart fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">E-commerce SEO</h3>
                                            <p className="mb-0">Product listing optimization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-play fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">YouTube SEO</h3>
                                            <p className="mb-0">Video optimization strategies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="marketing-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-chart-bar fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">SEO Audits</h3>
                                            <p className="mb-0">Data-driven growth insights</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <Link to="/contact" className="btn btn-primary btn-lg px-5">Rank Higher on Google & Drive More Traffic!</Link>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="social">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Social Media & Influencer Marketing</h2>
                                <p className="lead">Grow your <strong>audience engagement</strong> and brand awareness</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="h-100">
                                    <img src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Social media marketing" className="img-fluid rounded-3 shadow" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-hashtag"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Social Media Solutions</h3>
                                        <ul className="feature-list">
                                            <li><strong>Social Media Strategy</strong> - Custom campaigns across platforms</li>
                                            <li><strong>Organic Growth</strong> - Posting schedules & engagement techniques</li>
                                            <li><strong>Reel & Story Marketing</strong> - Short-form content for engagement</li>
                                            <li><strong>LinkedIn B2B Outreach</strong> - Professional networking strategies</li>
                                            <li><strong>Influencer Marketing</strong> - Brand collaborations & promotions</li>
                                            <li><strong>Community Engagement</strong> - Hashtag optimization & reach</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <Link to="/contact" className="btn btn-primary btn-lg px-5">Expand Your Social Presence!</Link>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="ppc">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Paid Advertising (PPC & Social Ads)</h2>
                                <p className="lead">Drive <strong>targeted traffic</strong> and conversions with strategic ad campaigns</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-4">Paid Search & Display</h3>
                                        <ul className="feature-list">
                                            <li>Google Search & Display Ads</li>
                                            <li>Shopping & YouTube Campaigns</li>
                                            <li>Meta Ads (Facebook & Instagram)</li>
                                            <li>LinkedIn B2B Lead Generation</li>
                                            <li>Retargeting & Remarketing</li>
                                            <li>Campaign Testing & Optimization</li>
                                            <li>Budget Planning & Tracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-4">Content & Lead Generation</h3>
                                        <ul className="feature-list">
                                            <li>SEO-Optimized Blog Writing</li>
                                            <li>Website & Landing Page Copy</li>
                                            <li>Infographics & Carousels</li>
                                            <li>Short Video Marketing</li>
                                            <li>YouTube Script Writing</li>
                                            <li>Lead Funnel Strategy</li>
                                            <li>CRM Setup & Automation</li>
                                        </ul>
                                        <div className="mt-3">
                                            <Link to="/contact" className="btn btn-outline-primary">Generate More Leads!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="benefits-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo for Digital Marketing?</h2>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h3 className="h5">Tailored Strategies</h3>
                                    <p>Custom marketing plans aligned with your business goals</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3 className="h5">Data-Driven</h3>
                                    <p>Performance tracking and actionable insights</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                    <h3 className="h5">AI-Powered</h3>
                                    <p>Smart automation for efficient campaigns</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h3 className="h5">Comprehensive</h3>
                                    <p>Full-spectrum digital presence building</p>
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

export default Sem;
