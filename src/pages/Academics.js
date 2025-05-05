import React from "react";
import { Link } from 'react-router-dom';
import SeoHelmet from "../components/SeoHelmet";
// import Consultation from "../components/Consultation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Academics.css";

const Academics = () => {
    return (
        <>
            <SeoHelmet
                title="Academics & Training | Eaximo Digital Marketing & AI Courses"
                description="Explore Eaximo's expert-led training programs in digital marketing, SEO, branding, AI automation, and web development. Get certified and grow your expertise today!"
                url="https://anupammo.github.io/reactjs-eaximo/#/academics"
                image="https://anupammo.github.io/reactjs-eaximo/meta-image/academics.jpg"
            />
            <Navbar />
            <main>
                <header className="academics-hero-section py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title fw-bold display-4 mt-5">Upskill with Eaximo's Expert-Led Training Programs</h1>
                                <p className="lead mb-4">Master digital marketing, branding, web development, AI automation, and more with our professional training programs.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link to="/programs" className="btn btn-primary btn-lg">Explore Programs</Link>
                                    <Link to="/enroll" className="btn btn-outline-light btn-lg">How to Enroll</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h2 className="section-title">Transform Your Career with Industry-Leading Training</h2>
                                <p className="lead mb-5">At <strong>Eaximo</strong>, we believe that <strong>continuous learning fuels success</strong> in the <strong>digital world</strong>. Our programs are designed to help individuals and businesses master essential digital skills through practical, real-world training.</p>
                                
                                <div className="row g-4 text-start">
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-user-graduate fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Beginner to Advanced</h4>
                                                <p>Structured learning paths for all skill levels</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-certificate fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Industry Certifications</h4>
                                                <p>Recognized credentials for career growth</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-briefcase fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Practical Skills</h4>
                                                <p>Real-world applications and case studies</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="programs">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Training Programs</h2>
                                <p className="lead">Comprehensive courses designed for digital success</p>
                            </div>
                        </div>
                        
                        <div className="program-card card">
                            <div className="card-body p-4 p-lg-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="program-icon">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h3 className="h2 mb-3">Digital Marketing Mastery</h3>
                                        <div className="mb-4">
                                            <span className="highlight-badge">SEO & Keyword Strategy</span>
                                            <span className="highlight-badge">PPC & Paid Ads</span>
                                            <span className="highlight-badge">Content Marketing</span>
                                            <span className="highlight-badge">Social Media Growth</span>
                                            <span className="highlight-badge">Email Automation</span>
                                            <span className="highlight-badge">Analytics & CRO</span>
                                        </div>
                                        <p>Master the complete digital marketing funnel from awareness to conversion. Learn proven strategies for organic and paid traffic growth, content creation, and performance optimization.</p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                        <div className="bg-primary text-white p-3 rounded-3 d-inline-block">
                                            <h4 className="h5 mb-0">Certification Included:</h4>
                                            <p className="mb-0 fw-bold">Digital Marketing Fundamentals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="program-card card">
                            <div className="card-body p-4 p-lg-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="program-icon">
                                            <i className="fas fa-palette"></i>
                                        </div>
                                        <h3 className="h2 mb-3">Branding & Graphic Design Fundamentals</h3>
                                        <div className="mb-4">
                                            <span className="highlight-badge">Brand Identity</span>
                                            <span className="highlight-badge">Logo Design</span>
                                            <span className="highlight-badge">Social Media Graphics</span>
                                            <span className="highlight-badge">Visual Storytelling</span>
                                            <span className="highlight-badge">Print Design</span>
                                        </div>
                                        <p>Develop compelling visual identities that resonate with your audience. Learn professional design techniques for digital and print media that elevate brand perception.</p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                        <div className="bg-primary text-white p-3 rounded-3 d-inline-block">
                                            <h4 className="h5 mb-0">Certification Included:</h4>
                                            <p className="mb-0 fw-bold">Branding & Creative Design Expert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="program-card card">
                            <div className="card-body p-4 p-lg-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="program-icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <h3 className="h2 mb-3">Website Development & UX/UI Design</h3>
                                        <div className="mb-4">
                                            <span className="highlight-badge">WordPress</span>
                                            <span className="highlight-badge">E-commerce</span>
                                            <span className="highlight-badge">UI/UX Principles</span>
                                            <span className="highlight-badge">Speed Optimization</span>
                                            <span className="highlight-badge">API Integration</span>
                                        </div>
                                        <p>Build professional websites with optimal user experience. From front-end development to performance optimization, gain the skills to create fast, secure, and responsive websites.</p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                        <div className="bg-primary text-white p-3 rounded-3 d-inline-block">
                                            <h4 className="h5 mb-0">Certification Included:</h4>
                                            <p className="mb-0 fw-bold">Web Development & UX Design Pro</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="program-card card">
                            <div className="card-body p-4 p-lg-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="program-icon">
                                            <i className="fas fa-robot"></i>
                                        </div>
                                        <h3 className="h2 mb-3">AI-Powered Automation & Marketing Tools</h3>
                                        <div className="mb-4">
                                            <span className="highlight-badge">AI Content</span>
                                            <span className="highlight-badge">Predictive Analytics</span>
                                            <span className="highlight-badge">Lead Generation</span>
                                            <span className="highlight-badge">Ad Optimization</span>
                                            <span className="highlight-badge">AI for SEO</span>
                                        </div>
                                        <p>Harness the power of artificial intelligence to automate and optimize marketing processes. Learn to implement AI tools that enhance efficiency and drive better results.</p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                        <div className="bg-primary text-white p-3 rounded-3 d-inline-block">
                                            <h4 className="h5 mb-0">Certification Included:</h4>
                                            <p className="mb-0 fw-bold">AI-Powered Marketing & Automation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="program-card card">
                            <div className="card-body p-4 p-lg-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="program-icon">
                                            <i className="fas fa-chart-line"></i>
                                        </div>
                                        <h3 className="h2 mb-3">Business Growth Strategies & Leadership</h3>
                                        <div className="mb-4">
                                            <span className="highlight-badge">Digital Branding</span>
                                            <span className="highlight-badge">Customer Acquisition</span>
                                            <span className="highlight-badge">Sales Automation</span>
                                            <span className="highlight-badge">Advanced CRO</span>
                                            <span className="highlight-badge">Scaling with AI</span>
                                        </div>
                                        <p>Develop strategic leadership skills to drive business growth in the digital age. Learn advanced techniques for customer acquisition, conversion optimization, and scaling operations.</p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                        <div className="bg-primary text-white p-3 rounded-3 d-inline-block">
                                            <h4 className="h5 mb-0">Certification Included:</h4>
                                            <p className="mb-0 fw-bold">Digital Growth & Leadership</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="workshop-section">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-center">
                                    <h2 className="display-5 fw-bold mb-5">Workshop & Live Masterclasses</h2>
                                    <div className="row g-4">
                                        <div className="col-md-3">
                                            <div className="feature-icon mx-auto">
                                                <i className="fas fa-chalkboard-teacher"></i>
                                            </div>
                                            <h3 className="h4">Expert-Led Training</h3>
                                            <p>Live Q&A sessions & interactive learning with industry professionals</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="feature-icon mx-auto">
                                                <i className="fas fa-laptop-code"></i>
                                            </div>
                                            <h3 className="h4">Hands-On Projects</h3>
                                            <p>Practical exercises & real-world case studies for applied learning</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="feature-icon mx-auto">
                                                <i className="fas fa-certificate"></i>
                                            </div>
                                            <h3 className="h4">Industry Certification</h3>
                                            <p>Validated credentials to enhance your professional profile</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="feature-icon mx-auto">
                                                <i className="fas fa-chart-bar"></i>
                                            </div>
                                            <h3 className="h4">Data-Driven Insights</h3>
                                            <p>Analytics & performance tracking techniques for measurable results</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 pt-3">
                                        <p className="lead mb-4">Need a tailored training program? We offer custom courses for businesses & teams!</p>
                                        <Link to="/enroll" className="btn btn-light btn-lg px-5">Inquire About Custom Training</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="enroll-section" id="enroll">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Enroll in Our Programs Today</h2>
                                <div className="row g-4 text-start mt-5">
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Location</h4>
                                                <p className="mb-0">Online & In-Person <br />(Based on availability)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-calendar-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Upcoming Batches</h4>
                                                <p className="mb-0">Next Training Date: <br /><strong>October 15, 2023</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-user-graduate fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 className="h5">Level</h4>
                                                <p className="mb-0">Beginner to Advanced <br />Courses for all skill levels</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="h5 mb-3">How to Register</h4>
                                    <Link to="mailto:academy@eaximo.com" className="btn btn-primary btn-lg px-5">
                                        <i className="fas fa-envelope me-2"></i> academy@eaximo.com
                                    </Link>
                                </div>
                                <div className="mt-5">
                                    <h3 className="display-6 fw-bold mb-4">Boost Your Skills & Grow Your Career with Eaximo Today!</h3>
                                    <Link to="mailto:academy@eaximo.com" className="btn btn-outline-primary btn-lg px-5">Get Started Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
                {/* <Consultation /> */}
            </main>
            <Footer />
        </>
    );
};

export default Academics;
