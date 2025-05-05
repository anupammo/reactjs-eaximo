import React from "react";
import { Link } from 'react-router-dom';
import SeoHelmet from "../components/SeoHelmet";
import Consultation from "../components/Consultation";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
    return (
        <>
            <SeoHelmet
                title="About Eaximo | Digital Marketing Experts Driving Business Success"
                description="Learn about Eaximo, a cutting-edge digital marketing agency specializing in SEO, branding, web solutions, and AI-powered services. Meet our expert team and discover our mission."
                url="https://anupammo.github.io/reactjs-eaximo/#/about"
                image="https://anupammo.github.io/reactjs-eaximo/meta-image/about.jpg"
            />
            <Navbar />
            <main>
                <header className="hero-about py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold pt-5">About Eaximo</h1>
                                <p className="lead mb-4">Transforming brands, boosting online visibility, and driving business success through innovative digital solutions.</p>
                                <Link to="/team" className="btn btn-primary btn-lg">Meet Our Team</Link>
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

                <Team />

                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo?</h2>
                                <p className="lead">What sets us apart in the digital marketing landscape</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-rocket fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Proven Track Record</h3>
                                    </div>
                                    <p>We have helped businesses achieve <strong>higher rankings</strong>, <strong>better conversions</strong>, and <strong>stronger brand presence</strong> through our data-backed strategies.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-graduation-cap fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Industry Expertise</h3>
                                    </div>
                                    <p>Specialized knowledge in <strong>SEO, web solutions, social media marketing, and AI-powered automation</strong> to give you a competitive edge.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-database fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Data-Driven Strategies</h3>
                                    </div>
                                    <p>Every decision we make is backed by <strong>analytics, research, and customer insights</strong> to ensure maximum impact for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-tools fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Comprehensive Services</h3>
                                    </div>
                                    <p>From <strong>branding &amp; web design</strong> to <strong>PPC ads &amp; lead generation</strong>, we offer end-to-end digital solutions under one roof.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-users fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Dedicated Team</h3>
                                    </div>
                                    <p>Our <strong>passionate experts</strong> work closely with you to understand your goals and deliver customized solutions that drive results.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="why-card">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-headset fa-2x"></i>
                                        </div>
                                        <h3 className="h4 mb-0">Ongoing Support</h3>
                                    </div>
                                    <p>We provide <strong>continuous optimization</strong> and support to ensure your digital presence keeps growing and evolving with your business.</p>
                                </div>
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

export default About;
