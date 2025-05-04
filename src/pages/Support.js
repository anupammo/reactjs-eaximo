import { Link } from 'react-router-dom';
import React from "react";
import Consultation from "../components/Consultation";
import Connect from "../components/Connect";
// import Testimonis from "../components/Testimonis";
// import Counter from "../components/Counter"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Support.css";

const Support = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="tech-hero py-5" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="display-4 fw-bold mb-4 mt-5">Reliable IT & Tech Support for Your Business Growth</h1>
                                <p className="lead mb-4">In today's digital-first world, <strong>efficient IT solutions</strong> are crucial for <strong>seamless business operations, security, and productivity</strong>. Eaximo offers <strong>end-to-end IT support, app development, software solutions, and technical consulting</strong> to help businesses <strong>scale with confidence</strong>.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link to="/contact" className="btn btn-primary btn-lg px-4">Get IT Support</Link>
                                    <Link to="/services" className="btn btn-outline-light btn-lg px-4">Our Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5 my-5" id="services">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10 text-center">
                                <span className="feature-badge">IT & Tech Solutions</span><br />
                                <h2 className="section-title">Our IT & Tech Support Services</h2>
                                <p className="lead">Comprehensive technology solutions tailored to your business requirements</p>
                            </div>
                        </div>
                        
                        <ul className="nav nav-pills mb-5 justify-content-center" id="services-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="app-dev-tab" data-bs-toggle="pill" data-bs-target="#app-dev" type="button">App Development</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="software-dev-tab" data-bs-toggle="pill" data-bs-target="#software-dev" type="button">Software Solutions</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="tech-support-tab" data-bs-toggle="pill" data-bs-target="#tech-support" type="button">Tech Support</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pro-tools-tab" data-bs-toggle="pill" data-bs-target="#pro-tools" type="button">Pro Tools</button>
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="services-tabContent">
                            <div className="tab-pane fade show active" id="app-dev" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fab fa-android"></i>
                                                </div>
                                                <h3 className="h4">Android App Development</h3>
                                                <p className="text-muted">Native and hybrid solutions for Android devices with optimized performance and security.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Kotlin/Java development</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Material Design UI</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Play Store optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fab fa-apple"></i>
                                                </div>
                                                <h3 className="h4">iOS App Development</h3>
                                                <p className="text-muted">Custom applications for Apple devices with Swift and Objective-C expertise.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>SwiftUI/UIKit</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>App Store compliance</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Apple ecosystem integration</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                                <h3 className="h4">Cross-Platform Development</h3>
                                                <p className="text-muted">Unified mobile experiences with Flutter and React Native frameworks.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Single codebase</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Cost-effective</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Native-like performance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <Link to="/contact" className="btn btn-primary btn-lg px-5">Develop a Powerful Mobile App Today!</Link>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="software-dev" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-laptop-code"></i>
                                                </div>
                                                <h3 className="h4">Custom Software</h3>
                                                <p className="text-muted">Tailor-made business solutions designed for your specific operational needs.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Requirement analysis</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Modular architecture</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Scalable solutions</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-cloud"></i>
                                                </div>
                                                <h3 className="h4">SaaS Development</h3>
                                                <p className="text-muted">Cloud-based applications for modern businesses with subscription models.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Multi-tenancy</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Subscription billing</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>API integrations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-project-diagram"></i>
                                                </div>
                                                <h3 className="h4">Workflow Automation</h3>
                                                <p className="text-muted">Efficiency-driven digital solutions to streamline your business processes.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Process mapping</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>RPA solutions</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Integration APIs</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <Link to="/contact" className="btn btn-primary btn-lg px-5">Build Custom Software That Powers Your Business!</Link>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="tech-support" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-headset"></i>
                                                </div>
                                                <h3 className="h4">IT Helpdesk Support</h3>
                                                <p className="text-muted">Fast resolution services via email, chat, and ticket-based systems.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>24/7 availability</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Remote assistance</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Knowledge base</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-shield-alt"></i>
                                                </div>
                                                <h3 className="h4">Cybersecurity</h3>
                                                <p className="text-muted">Protection against cyber threats with comprehensive security measures.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>SSL certificates</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Firewall setup</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Malware scanning</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-server"></i>
                                                </div>
                                                <h3 className="h4">Hosting & Server Support</h3>
                                                <p className="text-muted">Reliable uptime and seamless maintenance for your digital infrastructure.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Server monitoring</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Performance tuning</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Disaster recovery</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <Link to="/contact" className="btn btn-primary btn-lg px-5">Ensure Seamless Tech Support & Security!</Link>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="pro-tools" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fab fa-github"></i>
                                                </div>
                                                <h3 className="h4">Version Control</h3>
                                                <p className="text-muted">Efficient project management with Git/GitHub setup and best practices.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Repository setup</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Branch strategies</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Code reviews</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-code-branch"></i>
                                                </div>
                                                <h3 className="h4">DevOps Support</h3>
                                                <p className="text-muted">CI/CD pipeline setup for automated testing and deployment workflows.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Docker/Kubernetes</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>Jenkins/GitHub Actions</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Infrastructure as Code</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="tech-icon">
                                                    <i className="fas fa-file-alt"></i>
                                                </div>
                                                <h3 className="h4">Technical Documentation</h3>
                                                <p className="text-muted">Professional documentation for your apps and software solutions.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>API documentation</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-primary me-2"></i>User manuals</li>
                                                    <li><i className="fas fa-check-circle text-primary me-2"></i>Technical specifications</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <Link to="/contact" className="btn btn-primary btn-lg px-5">Optimize Your IT Workflow Today!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo for IT & Tech Support?</h2>
                                <p className="lead">We deliver measurable results through innovative technology solutions</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="card bg-transparent shadow-sm border-0">
                                    <div className="card-body">
                                        <p className="text-primary text-center display-5"><i className="fas fa-expand"></i></p>
                                        <h3 className="text-center h5 mb-4">Scalable Solutions</h3>
                                        <p className="mb-0">Tailored tech that grows with your business needs and user demands.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card bg-transparent shadow-sm border-0">
                                    <div className="card-body">
                                        <p className="text-primary text-center display-5"><i className="fas fa-user-tie"></i></p>
                                        <h3 className="text-center h5 mb-4">Expert Consultation</h3>
                                        <p className="mb-0">Professional guidance for infrastructure optimization and tech strategy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card bg-transparent shadow-sm border-0">
                                    <div className="card-body">
                                        <p className="text-primary text-center display-5"><i className="fas fa-lock"></i></p>
                                        <h3 className="text-center h5 mb-4">Security Focus</h3>
                                        <p className="mb-0">Data protection and cybersecurity built into every solution we provide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card bg-transparent shadow-sm border-0">
                                    <div className="card-body">
                                        <p className="text-primary text-center display-5"><i className="fas fa-headset"></i></p>
                                        <h3 className="text-center h5 mb-4">Dedicated Support</h3>
                                        <p className="mb-0">Reliable tech assistance, maintenance, and continuous updates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* <Testimonis /> */}
                
                <Consultation />
                
                <Connect />
            </main>
            <Footer />
        </>
    );
};

export default Support;
