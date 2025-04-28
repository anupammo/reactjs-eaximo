import React from "react";
import Consultation from "../components/Consultation";
// import Connect from "../components/Connect";
// import Testimonis from "../components/Testimonis";
// import Counter from "../components/Counter"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Media.css";

const Media = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="hero-title display-4 fw-bold mt-5 pt-5">Capture, Create & Engage</h1>
                                <p className="lead mb-4">In today's digital world, <strong>high-quality visuals</strong> are the key to capturing attention and building brand trust.</p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <a href="#services" className="btn btn-primary btn-lg">Explore Services</a>
                                    <a href="#portfolio" className="btn btn-outline-light btn-lg">View Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Professional Media Solutions</h2>
                                <p className="lead">Eaximo's media services help businesses <strong>bring ideas to life</strong> through stunning visual content</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-camera"></i>
                                        </div>
                                        <h3 className="h4">Photography</h3>
                                        <p>Professional photography services that showcase your products, team, and brand in the best light.</p>
                                        <a href="#photography" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-video"></i>
                                        </div>
                                        <h3 className="h4">Videography</h3>
                                        <p>Engaging video content that tells your brand story and connects with your audience.</p>
                                        <a href="#videography" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4">
                                        <div className="service-icon">
                                            <i className="fas fa-film"></i>
                                        </div>
                                        <h3 className="h4">Animation</h3>
                                        <p>Creative motion graphics and animations that bring complex ideas to life.</p>
                                        <a href="#animation" className="btn btn-outline-primary mt-3">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="photography">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Photography Services</h2>
                                <p className="lead">Professional photography that captures your brand's essence</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-box-open fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Product Photography</h3>
                                            <p className="mb-0">E-commerce, catalogs, commercial shoots</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-user-tie fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Corporate & Team Portraits</h3>
                                            <p className="mb-0">Professional headshots & brand positioning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-calendar-alt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Event Photography</h3>
                                            <p className="mb-0">Seminars, launches, brand events</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-tshirt fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Lifestyle & Branding Shoots</h3>
                                            <p className="mb-0">Personal branding & influencer photography</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-utensils fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Food, Fashion & Real Estate</h3>
                                            <p className="mb-0">Visual storytelling for brands</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="media-category">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="me-3 text-primary">
                                            <i className="fas fa-magic fa-2x"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 mb-0">Photo Editing & Retouching</h3>
                                            <p className="mb-0">Enhancement, color correction & fixes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-5">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Capture Your Brand's Best Moments</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 my-5" id="videography">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Videography Services</h2>
                                <p className="lead">Professional video production that tells your brand story</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="h-100">
                                    <img src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Professional videography" className="img-fluid rounded-3 shadow" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-video"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Comprehensive Video Solutions</h3>
                                        <ul className="feature-list">
                                            <li><strong>Promotional & Corporate Videos</strong> - Brand commercials, company profiles</li>
                                            <li><strong>Event Coverage</strong> - Business functions, product launches</li>
                                            <li><strong>Social Media Shorts</strong> - Engaging content for Instagram & TikTok</li>
                                            <li><strong>Product Demos</strong> - Showcase features visually</li>
                                            <li><strong>Drone Videography</strong> - High-impact aerial footage</li>
                                            <li><strong>Video Editing</strong> - Professional post-production</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-4">
                            <a href="#contact" className="btn btn-primary btn-lg px-5">Create Stunning Videos That Make an Impact!</a>
                        </div>
                    </div>
                </section>
                
                <section className="py-5 bg-light" id="animation">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-film"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Animation & Motion Graphics</h3>
                                        <ul className="feature-list">
                                            <li><strong>2D/3D Explainer Videos</strong> - Visual storytelling for business</li>
                                            <li><strong>Logo & Intro Animation</strong> - Eye-catching reveals</li>
                                            <li><strong>Kinetic Typography</strong> - Animated text & data</li>
                                            <li><strong>Whiteboard Animation</strong> - Simplified sketch-style</li>
                                            <li><strong>Motion Graphics</strong> - Brand-enhancing animated content</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="#contact" className="btn btn-outline-primary">Bring Your Brand to Life</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-card card h-100">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="service-icon">
                                            <i className="fas fa-chess"></i>
                                        </div>
                                        <h3 className="h2 mb-4">Media Strategy & Planning</h3>
                                        <ul className="feature-list">
                                            <li><strong>Storyboarding</strong> - Planning compelling narratives</li>
                                            <li><strong>Content Calendar</strong> - Optimized publishing schedules</li>
                                            <li><strong>Brand Video Concepts</strong> - Custom visual branding</li>
                                            <li><strong>Moodboards & Style Guides</strong> - Pre-production strategy</li>
                                            <li><strong>On-Site Production</strong> - Seamless media execution</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="#contact" className="btn btn-outline-primary">Craft a Winning Strategy</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="portfolio-showcase" id="portfolio">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Our Media Portfolio</h2>
                                <p className="lead">See examples of our photography, videography, and animation work</p>
                            </div>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item">
                                    <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Product photography" className="img-fluid w-100" />
                                    <div className="portfolio-overlay">
                                        <h3 className="h5 mb-0">Product Photography</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item">
                                    <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Corporate video" className="img-fluid w-100" />
                                    <div className="portfolio-overlay">
                                        <h3 className="h5 mb-0">Corporate Videography</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item">
                                    <img src="https://images.pexels.com/photos/6330642/pexels-photo-6330642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Animation work" className="img-fluid w-100" />
                                    <div className="portfolio-overlay">
                                        <h3 className="h5 mb-0">Motion Graphics</h3>
                                    </div>
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

export default Media;
