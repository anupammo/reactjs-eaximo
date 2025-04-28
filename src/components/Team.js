import React from "react";
import "./Team.css"

const Team = () => {
    return (
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
    );
};

export default Team;