import { Link } from 'react-router-dom';
import React from "react";
// import Consultation from "../components/Consultation";
// import Connect from "../components/Connect";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Careers.css";

const Careers = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="careers-hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold mt-5 pt-5">Build the Future of Digital Innovation</h1>
                                <p className="lead mb-4">Join our team of digital marketing professionals, web developers, and branding experts.</p>
                                <div className="d-flex flex-wrap gap-3 mb-5 pb-5">
                                    <Link to="/openings" className="btn btn-primary btn-lg">View Open Positions</Link>
                                    <Link to="/apply" className="btn btn-outline-light btn-lg">How to Apply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Work at Eaximo?</h2>
                                <p className="lead">We foster creativity, expertise, and collaboration to drive digital transformation</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-lightbulb fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Innovative Work Culture</h3>
                                    </div>
                                    <p>A space that encourages learning, growth & collaboration with some of the brightest minds in digital marketing and technology.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-chart-line fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Professional Development</h3>
                                    </div>
                                    <p>Upskill with hands-on training, workshops & mentorship programs designed to accelerate your career growth.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-laptop-house fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Flexible Opportunities</h3>
                                    </div>
                                    <p>Full-time, freelance, and remote roles available to suit your lifestyle and career aspirations.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-rocket fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Career Growth Pathways</h3>
                                    </div>
                                    <p>Clear progression opportunities in digital marketing, IT, and AI solutions with regular performance reviews.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-globe fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Impactful Projects</h3>
                                    </div>
                                    <p>Work with top-tier clients and global brands on projects that make a real difference in the digital landscape.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefit-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-users fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Collaborative Team</h3>
                                    </div>
                                    <p>Join a diverse team of passionate thinkers, problem-solvers, and innovators reshaping the digital landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="openings">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Current Job Openings</h2>
                                <p className="lead">Explore exciting opportunities to join our growing team</p>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="job-category">Digital Marketing & SEO Roles</h3>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-search job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">SEO Specialist</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                        <span className="highlight-badge">Remote</span>
                                                    </div>
                                                    <p>Keyword strategy, technical SEO, link building & analytics. Minimum 3 years experience with proven track record.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-pen-fancy job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Content Marketing Manager</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                        <span className="highlight-badge">Hybrid</span>
                                                    </div>
                                                    <p>Blog writing, video scripts & social media copywriting. Must have portfolio of published work.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-ad job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Google & Meta Ads Expert</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Contract</span>
                                                        <span className="highlight-badge">Remote</span>
                                                    </div>
                                                    <p>PPC campaign management, retargeting & conversion optimization. Certifications preferred.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-hashtag job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Social Media Manager</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                    </div>
                                                    <p>Growth strategies, organic engagement & influencer partnerships. Experience with analytics tools required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="job-category">Design & Creative Roles</h3>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-palette job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Graphic Designer</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                        <span className="highlight-badge">Freelance</span>
                                                    </div>
                                                    <p>Brand identity design, marketing materials, UI/UX graphics. Proficiency in Adobe Creative Suite required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-video job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Video Editor & Animator</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Contract</span>
                                                    </div>
                                                    <p>Motion graphics, video marketing, corporate video editing. Portfolio demonstrating creative storytelling required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-camera job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Photographer & Videographer</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Part-time</span>
                                                        <span className="highlight-badge">On-site</span>
                                                    </div>
                                                    <p>Event coverage, branding shoots & creative storytelling. Must have own professional equipment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="job-category">Web Development & IT Support</h3>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fab fa-wordpress job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">WordPress Developer</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                        <span className="highlight-badge">Remote</span>
                                                    </div>
                                                    <p>Custom theme development, CMS configuration & plugin integration. Minimum 2 years WordPress experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-code job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Software Engineer</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                    </div>
                                                    <p>Web applications, AI integration, CRM automation & API development. Strong JavaScript/Python skills required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-headset job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Technical Support Specialist</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                        <span className="highlight-badge">Hybrid</span>
                                                    </div>
                                                    <p>Website troubleshooting, hosting support & cybersecurity services. Customer service experience preferred.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="job-category">AI & Automation Roles</h3>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-robot job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">AI Content Creator</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Freelance</span>
                                                        <span className="highlight-badge">Remote</span>
                                                    </div>
                                                    <p>AI-generated blog writing, chatbot scripting & automated copywriting. Experience with GPT models preferred.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-brain job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">AI-Powered Marketing Strategist</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Full-time</span>
                                                    </div>
                                                    <p>Predictive analytics, lead scoring & ad optimization. Experience with AI marketing tools required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-comments job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">AI Chatbot Developer</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Contract</span>
                                                    </div>
                                                    <p>Conversational AI development & customer support automation. NLP experience preferred.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="job-category">Internship & Freelance Opportunities</h3>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-user-graduate job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Digital Marketing Intern</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Internship</span>
                                                        <span className="highlight-badge">3-6 months</span>
                                                    </div>
                                                    <p>SEO research, content creation & campaign assistance. Perfect for marketing students.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="job-card card h-100">
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-start">
                                                <div className="me-3 text-primary">
                                                    <i className="fas fa-laptop-code job-icon"></i>
                                                </div>
                                                <div>
                                                    <h4 className="mb-2">Web Development Intern</h4>
                                                    <div className="mb-3">
                                                        <span className="highlight-badge">Internship</span>
                                                        <span className="highlight-badge">3-6 months</span>
                                                    </div>
                                                    <p>Front-end development & CMS support. Basic HTML/CSS/JS knowledge required.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="hero-section py-5" id="apply">
                    <div className="container">
                        <div className="apply-section">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2 className="display-5 fw-bold mb-4">How to Apply</h2>
                                    <div className="row g-4 text-start">
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3">
                                                    <i className="fas fa-paper-plane fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Send Your Resume</h4>
                                                    <p className="mb-0">careers@eaximo.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3">
                                                    <i className="fas fa-briefcase fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Attach Your Portfolio</h4>
                                                    <p className="mb-0">Share your best work samples</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3">
                                                    <i className="fas fa-star fa-2x"></i>
                                                </div>
                                                <div>
                                                    <h4 className="h5">Mention Your Expertise</h4>
                                                    <p className="mb-0">Highlight key skills & experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="lead mt-4">Have questions? <Link to="mailto:hr@eaximo.com" className="text-white">Reach out to our HR team</Link></p>
                                    <Link to="mailto:careers@eaximo.com" className="btn btn-light btn-lg mt-3 px-5">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <Consultation />

                <Connect /> */}
            </main>
            <Footer />
        </>
    );
};

export default Careers;
