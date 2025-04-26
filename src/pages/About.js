import React from "react";
import Consultation from "../components/Consultation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="hero-about py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold pt-5">About Eaximo</h1>
                                <p className="lead mb-4">Transforming brands, boosting online visibility, and driving business success through innovative digital solutions.</p>
                                <a href="#team" className="btn btn-primary btn-lg">Meet Our Team</a>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Eaximo team working together" className="img-fluid rounded-3 shadow" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">Our Story</h2>
                                <p className="lead mb-4">Welcome to <strong>Eaximo</strong>, a forward-thinking <strong>digital marketing agency</strong> committed to transforming brands, boosting online visibility, and driving business success.</p>
                                <p>With expertise in <strong>SEO, branding, web development, and AI-powered strategies</strong>, we empower businesses to maximize their digital potential using innovative solutions. Our mission is simple—deliver measurable growth, build impactful brand identities, and craft data-driven marketing strategies that resonate with target audiences.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Vision & Mission</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="value-card h-100">
                                    <div className="value-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>To be the go-to agency for <strong>high-performance digital marketing solutions</strong>, integrating creativity, technology, and strategy to drive exceptional results for our clients.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="value-card h-100">
                                    <div className="value-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>Helping businesses <strong>scale online</strong>, enhance visibility, and drive engagement through <strong>SEO, digital marketing, branding, and AI automation</strong> tailored to their unique needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Core Values</h2>
                                <p className="lead">The principles that guide everything we do</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="value-card">
                                    <div className="value-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3>Results-Oriented Approach</h3>
                                    <p>We prioritize <strong>ROI-driven</strong> strategies that generate leads and conversions, ensuring every campaign delivers measurable business impact.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="value-card">
                                    <div className="value-icon">
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <h3>Innovation & Creativity</h3>
                                    <p>Pushing boundaries with <strong>cutting-edge marketing solutions</strong> tailored for digital growth, blending creativity with technology.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="value-card">
                                    <div className="value-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h3>Client-Centric Focus</h3>
                                    <p>Your success is our priority. We craft <strong>custom digital solutions</strong> that align perfectly with your business objectives and goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light" id="team">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Meet Our Team</h2>
                                <p className="lead">Passionate experts dedicated to your digital success</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card card h-100">
                                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        className="team-img" alt="Founder & CEO" />
                                    <div className="card-body text-center">
                                        <h4 className="mb-1">Alex Johnson</h4>
                                        <p className="text-muted">Founder & CEO</p>
                                        <p className="small">Visionary leader driving strategic growth and innovation.</p>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card card h-100">
                                    <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        className="team-img" alt="Digital Marketing Strategist" />
                                    <div className="card-body text-center">
                                        <h4 className="mb-1">Sarah Chen</h4>
                                        <p className="text-muted">Digital Marketing Strategist</p>
                                        <p className="small">Expert in SEO, paid ads, and lead generation strategies.</p>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card card h-100">
                                    <img src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        className="team-img" alt="Creative Designer" />
                                    <div className="card-body text-center">
                                        <h4 className="mb-1">Michael Rodriguez</h4>
                                        <p className="text-muted">Creative Designer</p>
                                        <p className="small">Crafting visual brand identities & UI/UX solutions.</p>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card card h-100">
                                    <img src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        className="team-img" alt="AI & Automation Specialist" />
                                    <div className="card-body text-center">
                                        <h4 className="mb-1">David Kim</h4>
                                        <p className="text-muted">AI & Automation Specialist</p>
                                        <p className="small">Optimizing marketing workflows through AI-driven insights.</p>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <a href="contact.html" className="btn btn-primary btn-lg">Work With Our Team</a>
                        </div>
                    </div>
                </section>
                
                <Consultation />
            </main>
            <Footer />
        </>
    );
};

export default About;
