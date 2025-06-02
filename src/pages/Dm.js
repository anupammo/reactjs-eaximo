import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHelmet from "../components/SeoHelmet";
import Consultation from "../components/Consultation";
import "./Dm.css";

const Dm = () => {
    return (
        <>
            <SeoHelmet
                title="Digital Marketing, Web Solutions & AI Services | Eaximo"
                description="Explore Eaximo's expert digital services—from branding and web development to AI-powered solutions. Get tailored marketing strategies designed to boost your business."
                url="https://eaximo.com/digital-marketing"
                image="https://eaximo.com/meta-image/digital-marketing.png"
                meta={[
                    { property: "og:title", content: "Digital Marketing, Web Solutions & AI Services | Eaximo" },
                    { property: "og:description", content: "Explore Eaximo's expert digital services—from branding and web development to AI-powered solutions. Get tailored marketing strategies designed to boost your business." },
                    { property: "og:image", content: "https://eaximo.com/meta-image/digital-marketing.png" },
                    { property: "og:url", content: "https://eaximo.com/digital-marketing" },
                    { name: "twitter:title", content: "Digital Marketing, Web Solutions & AI Services | Eaximo" },
                    { name: "twitter:description", content: "Explore Eaximo's expert digital services—from branding and web development to AI-powered solutions. Get tailored marketing strategies designed to boost your business." },
                    { name: "twitter:image", content: "https://eaximo.com/meta-image/digital-marketing.png" }
                ]}
            />

            <Navbar />
            <main>
                <header className="hero-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold mt-5 pt-5">Our Digital Services</h1>
                                <p className="lead mb-4">Comprehensive solutions to enhance your digital presence, optimize marketing strategies, and accelerate business growth.</p>
                                <Link to="/services" className="btn btn-primary btn-lg mb-5">Explore Services</Link>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Overview of Our Services</h2>
                                <p className="lead">At <strong>Eaximo</strong>, we offer a <strong>comprehensive suite</strong> of services designed to <strong>enhance digital presence, optimize marketing strategies, and accelerate business growth</strong>. From <strong>branding & design</strong> to <strong>AI-powered automation</strong>, our expertise helps businesses build a strong and scalable online footprint.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title mb-5">Branding, Design & Printing</h2>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Branding and design services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <p className="lead mt-4">Build a powerful brand identity that resonates with your audience.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Brand Identity Creation</h4>
                                        <p className="mb-0">Business names, taglines, brand positioning & logo design.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Graphic Design Services</h4>
                                        <p className="mb-0">Social media creatives, corporate branding, packaging, and infographics.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Professional Printing</h4>
                                        <p className="mb-0">Flyers, business cards, merchandise, and large-format banners.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="text-center pb-4">
                                    <Link to="contact.html" className="btn btn-primary my-4">Create a Unique Brand Identity Today!</Link>
                                </p>
                            </div>
                        </div>
                        
                        <div className="row mb-5 flex-lg-row-reverse">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Media and visual services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">Media & Visual Services</h2>
                                <p className="lead mb-4">Captivate your audience with high-quality media production.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Photography & Videography</h4>
                                        <p className="mb-0">Professional product, corporate, and lifestyle shoots.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Animation & Motion Graphics</h4>
                                        <p className="mb-0">Explainer videos, logo animation, and interactive visuals.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Audio & Video Marketing</h4>
                                        <p className="mb-0">YouTube video strategy, voiceovers, and promotional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center pt-4">
                                <Link to="contact.html" className="btn btn-primary my-5">Enhance Brand Engagement with Premium Media Solutions!</Link>
                            </div>
                        </div>
                        
                        <div className="row mb-5">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Web solutions services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">Web Solutions</h2>
                                <p className="lead mb-4">Custom-built websites tailored for business success.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Website Design & Development</h4>
                                        <p className="mb-0">Responsive, SEO-friendly, and scalable solutions.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">E-commerce Development</h4>
                                        <p className="mb-0">WooCommerce, Shopify, and online payment integration.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Web Hosting & Maintenance</h4>
                                        <p className="mb-0">Security, backups, and performance optimization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center pt-4">
                                <Link to="contact.html" className="btn btn-primary my-5">Launch a High-Performance Website Today!</Link>
                            </div>
                        </div>
                        
                        <div className="row mb-5 flex-lg-row-reverse">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Digital marketing services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">Digital Marketing</h2>
                                <p className="lead mb-4">Drive traffic, generate leads, and boost sales with expert marketing strategies.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">SEO Optimization</h4>
                                        <p className="mb-0">On-page, off-page, technical, and local SEO.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Social Media Growth</h4>
                                        <p className="mb-0">Meta Ads, LinkedIn outreach, influencer partnerships.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">PPC Advertising & Lead Generation</h4>
                                        <p className="mb-0">Google Ads, retargeting, and conversion strategies.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center pt-4">
                                <Link to="contact.html" className="btn btn-primary my-5">Get More Leads with Advanced Marketing Solutions!</Link>
                            </div>
                        </div>
                        
                        <div className="row mb-5">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="IT and tech support services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">IT & Tech Support</h2>
                                <p className="lead mb-4">Robust tech solutions to optimize digital operations.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">App & Software Development</h4>
                                        <p className="mb-0">Custom solutions for Android, iOS & SaaS platforms.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Technical Support & Maintenance</h4>
                                        <p className="mb-0">IT troubleshooting, hosting, and cybersecurity services.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Pro Tools & Workflow Automation</h4>
                                        <p className="mb-0">DevOps, cloud-based CRM, and AI-driven tech integration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-4 text-center">
                                <Link to="contact.html" className="btn btn-primary mt-4">Scale Your Business with Cutting-Edge Tech!</Link>
                            </div>
                        </div>
                        
                        <div className="row flex-lg-row-reverse">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://images.pexels.com/photos/8386428/pexels-photo-8386428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="AI powered services" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">AI-Powered Services</h2>
                                <p className="lead mb-4">Harness the power of AI for smarter business growth.</p>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">AI-Generated Content</h4>
                                        <p className="mb-0">Blog writing, social media automation, and ad optimization.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Chatbot & Conversational AI</h4>
                                        <p className="mb-0">24/7 support bots, lead qualification, and customer engagement.</p>
                                    </div>
                                </div>
                                <div className="service-feature">
                                    <i className="fas fa-check-circle"></i>
                                    <div>
                                        <h4 className="h5">Predictive Analytics & AI Automation</h4>
                                        <p className="mb-0">Data-driven insights, sales forecasting, and AI-enhanced CRM.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-4 text-center">
                                <Link to="contact.html" className="btn btn-primary mt-4">Revolutionize Your Strategy with AI Automation!</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo?</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-chart-line fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">ROI-Driven Strategies</h3>
                                    </div>
                                    <p>Data-backed solutions designed to improve conversions and deliver measurable business impact.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-sliders-h fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Custom & Scalable Services</h3>
                                    </div>
                                    <p>Tailored plans that grow with your business, whether you're a startup, SME, or large enterprise.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-users fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Expert Team & Technology</h3>
                                    </div>
                                    <p>The perfect blend of AI, automation, and human-driven creativity to deliver exceptional results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Consultation />

                {/* <Connect /> */}
            </main>
            <Footer />
        </>
    );
};

export default Dm;
