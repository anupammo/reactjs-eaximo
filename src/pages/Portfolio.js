import "./Portfolio.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHelmet from "../components/SeoHelmet";
import Portfolios from "../components/Portfolios";
import Testimonis from "../components/Testimonis";
import Consultation from "../components/Consultation";

const Portfolio = () => {
  return (
    <>
      <SeoHelmet
        title="Portfolio | Eaximo - Digital Marketing & AI Solutionss"
        description="Explore Eaximo's portfolio of digital marketing, web development, and AI-powered solutions. See how we've helped businesses grow."
        url="https://eaximo.com/portfolio"
        image="https://eaximo.com/meta-image/portfolio.jpg"
        meta={[
          {
            property: "og:title",
            content:
              "Portfolio | Eaximo - Digital Marketing & AI Solutionss",
          },
          {
            property: "og:description",
            content:
              "Explore Eaximo's portfolio of digital marketing, web development, and AI-powered solutions. See how we've helped businesses grow.",
          },
          {
            property: "og:image",
            content: "https://eaximo.com/meta-image/portfolio.jpg",
          },
          { property: "og:url", content: "https://eaximo.com/portfolio" },
          {
            name: "twitter:title",
            content:
              "Portfolio | Eaximo - Digital Marketing & AI Solutionss",
          },
          {
            name: "twitter:description",
            content:
              "Explore Eaximo's portfolio of digital marketing, web development, and AI-powered solutions. See how we've helped businesses grow.",
          },
          {
            name: "twitter:image",
            content: "https://eaximo.com/meta-image/portfolio.jpg",
          },
        ]}
      />

      <Navbar />
      <main>
        <header className="hero-about py-5">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="hero-title fw-bold pt-5">Our Digital Masterpieces</h1>
                <p className="lead mt-5">Explore our portfolio of successful projects where creativity meets technology to deliver exceptional results for our clients.</p>
                <p className="lead mt-4">Check out our <strong>Best Services</strong></p>
                <hr className="w-25" />
                <div className="d-flex flex-wrap gap-3 mb-5">
                  <div className="d-flex align-items-center">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Digital Marketing</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>SEO & Growth</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Website Design</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3 text-primary">
                      <i className="fas fa-check-circle fa-lg"></i>
                    </div>
                    <span>Web Development</span>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-3 mb-5">
                    <Link href="#portfolio-grid" className="btn btn-primary">View Projects</Link>
                    <Link href="#contact-form" className="btn btn-outline-light">Request a Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Portfolios />

        <section className="py-5 bg-light">
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="stats-card">
                            <h2 className="display-4 statNumber">250+</h2>
                            <p className="lead">Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stats-card">
                            <h2 className="display-4 statNumber">98%</h2>
                            <p className="lead">Client Satisfaction</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stats-card">
                            <h2 className="display-4 statNumber">150+</h2>
                            <p className="lead">Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="stats-card">
                            <h2 className="display-4 statNumber">15</h2>
                            <p className="lead">Industry Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-light">
            <div className="container mb-5">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="section-title">Trusted By Industry Leaders</h2>
                        <p className="lead">We've partnered with innovative companies across various sectors</p>
                    </div>
                </div>
                
                <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/280px-Google_2015_logo.svg.png" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Prime_Video_logo_%282024%29.svg/250px-Prime_Video_logo_%282024%29.svg.png" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Netflix_Animation_logo.svg/250px-Netflix_Animation_logo.svg.png" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/330px-Microsoft_logo_%282012%29.svg.png" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/330px-Meta_Platforms_Inc._logo.svg.png" alt="Client Logo" className="img-fluid client-logo" />
                    </div>
                </div>
            </div>
        </section>

        <Consultation />
                
        <Testimonis />
        
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
