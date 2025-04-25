import React from "react";
import Counter from "../components/Counter"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />            
            <main>
                <section className="py-5 my-5" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Digital marketing team working" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">About Eaximo</h2>
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
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="services">
                    <div className="container">
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
                                        <h3 className="h4">SEO Services</h3>
                                        <p className="text-muted">Optimize your website to rank higher on Google and drive organic traffic with our proven SEO strategies.</p>
                                        <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <h3 className="h4">Web Development</h3>
                                        <p className="text-muted">Build fast, scalable, and responsive business websites that convert visitors into customers.</p>
                                        <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-bullhorn"></i>
                                        </div>
                                        <h3 className="h4">Social Media Marketing</h3>
                                        <p className="text-muted">Strengthen brand presence and connect with your audience through targeted social campaigns.</p>
                                        <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-robot"></i>
                                        </div>
                                        <h3 className="h4">AI Marketing</h3>
                                        <p className="text-muted">Enhance efficiency with our smart AI-powered tools for marketing automation and analytics.</p>
                                        <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <a href="#" className="btn btn-primary btn-lg">Discover All Services</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="why-us">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo?</h2>
                                <p className="lead">We deliver measurable results through innovative strategies</p>
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
                
                <section className="stats-section">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-3 col-6">
                                <div className="text-center text-white py-4">
                                    <div className="stat-number">
                                        <Counter target={500} />
                                    </div>
                                    <h3 className="h5">Projects</h3>
                                    <p className="mb-0">Completed Successfully</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="text-center text-white py-4">
                                    <div className="stat-number">
                                        <Counter target={120} />
                                    </div>
                                    <h3 className="h5">Clients</h3>
                                    <p className="mb-0">Satisfied Worldwide</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="text-center text-white py-4">
                                    <div className="stat-number">
                                        <Counter target={10} />
                                    </div>
                                    <h3 className="h5">Years</h3>
                                    <p className="mb-0">Of Experience</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="text-center text-white py-4">
                                    <div className="stat-number">
                                        <Counter target={15} />
                                    </div>
                                    <h3 className="h5">Countries</h3>
                                    <p className="mb-0">We Serve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="testimonials">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Client Testimonials</h2>
                                <p className="lead">What our clients say about our work</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="testimonial-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                className="testimonial-img me-3" alt="Client testimonial" />
                                            <div>
                                                <h5 className="mb-1">Sarah Johnson</h5>
                                                <p className="text-muted mb-0">CEO, TechStart Inc.</p>
                                            </div>
                                        </div>
                                        <p className="mb-0">"Eaximo transformed our online presence with their SEO expertise and web development skills! Our organic traffic increased by 300% in just 6 months."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                className="testimonial-img me-3" alt="Client testimonial" />
                                            <div>
                                                <h5 className="mb-1">Michael Chen</h5>
                                                <p className="text-muted mb-0">Marketing Director, GlobalRetail</p>
                                            </div>
                                        </div>
                                        <p className="mb-0">"Their branding & design strategies helped us establish a stronger identity in a competitive market. The team is professional, creative, and results-driven."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                className="testimonial-img me-3" alt="Client testimonial" />
                                            <div>
                                                <h5 className="mb-1">Emily Rodriguez</h5>
                                                <p className="text-muted mb-0">Founder, GreenLife Organics</p>
                                            </div>
                                        </div>
                                        <p className="mb-0">"The AI-powered marketing tools Eaximo implemented saved us 20 hours per week in manual work while improving our campaign performance by 45%."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h2 className="display-5 fw-bold mb-4">Ready to boost your online visibility?</h2>
                                <p className="lead mb-5">Contact Eaximo today for a free consultation and let's discuss how we can grow your business together.</p>
                                <a href="#contact" className="btn btn-light btn-lg px-5">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Get In Touch</h2>
                                <p className="lead">Let's discuss your project and how we can help</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-4">Contact Information</h3>
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-map-marker-alt fa-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="h6 mb-1">Our Office</h4>
                                                <p className="mb-0">123 Business Ave, Suite 456<br />New York, NY 10001</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-envelope fa-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="h6 mb-1">Email Us</h4>
                                                <p className="mb-0">contact@eaximo.com<br />support@eaximo.com</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start">
                                            <div className="me-3 text-primary">
                                                <i className="fas fa-phone-alt fa-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="h6 mb-1">Call Us</h4>
                                                <p className="mb-0">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
