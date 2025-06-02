import "./Blog.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHelmet from "../components/SeoHelmet";

const Blog = () => {
  return (
    <>
      <SeoHelmet
        title="Digital Marketing, SEO & AI Insights | Eaximo Blog"
        description="Stay ahead in digital marketing with expert SEO tips, branding strategies, AI automation insights, and web development trends. Read the latest from Eaximo."
        url="https://eaximo.com/blog"
        image="https://eaximo.com/meta-image/blog.jpg"
        meta={[
          {
            property: "og:title",
            content: "Digital Marketing, SEO & AI Insights | Eaximo Blog",
          },
          {
            property: "og:description",
            content:
              "Stay ahead in digital marketing with expert SEO tips, branding strategies, AI automation insights, and web development trends. Read the latest from Eaximo.",
          },
          {
            property: "og:image",
            content: "https://eaximo.com/meta-image/blog.jpg",
          },
          { property: "og:url", content: "https://eaximo.com/blog" },
          {
            name: "twitter:title",
            content: "Digital Marketing, SEO & AI Insights | Eaximo Blog",
          },
          {
            name: "twitter:description",
            content:
              "Stay ahead in digital marketing with expert SEO tips, branding strategies, AI automation insights, and web development trends.",
          },
          {
            name: "twitter:image",
            content: "https://eaximo.com/meta-image/blog.jpg",
          },
        ]}
      />
      <Navbar />
      <main>
        <header className="hero-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="hero-title display-4 fw-bold my-5">
                  Your Digital Growth Resource
                </h1>
                <p className="lead my-5 pb-5">
                  Explore industry insights, expert strategies, and practical
                  tips to enhance your digital presence, boost website rankings,
                  and optimize marketing automation.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/topics" className="btn btn-primary btn-lg">
                    Explore Topics
                  </Link>
                  <Link
                    to="/subscribe"
                    className="btn btn-outline-light btn-lg"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-5 my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="section-title mb-5">
                  Welcome to the Eaximo Blog
                </h2>
                <p className="lead mb-5">
                  Whether you're a{" "}
                  <strong>business owner, marketer, or tech enthusiast</strong>,
                  our blog keeps you informed on{" "}
                  <strong>cutting-edge trends and actionable strategies</strong>{" "}
                  in digital marketing, SEO, AI, and web development.
                </p>
                <div
                  className="alert alert-primary d-inline-flex align-items-center"
                  role="alert"
                >
                  <i className="fas fa-lightbulb me-2"></i>
                  <div>
                    Want to stay updated? Subscribe to our newsletter for
                    exclusive insights!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light" id="topics">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="section-title my-5">
                  Trending Topics on Eaximo Blog
                </h2>
                <p className="lead">
                  Expert insights on digital marketing and technology
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="topic-card card h-100">
                  <div className="card-body p-4">
                    <div className="topic-icon">
                      <i className="fas fa-search"></i>
                    </div>
                    <h3 className="h4 mb-4">SEO & Website Optimization</h3>
                    <div className="article-list">
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How to Rank #1 on Google with Advanced SEO Techniques
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          On-Page vs. Off-Page SEO: Key Differences & Best
                          Practices
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Website Speed Optimization – Reduce Load Time & Boost
                          Performance
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Local SEO Strategies for Small Businesses
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          AI-Powered SEO: The Future of Search Engine
                          Optimization
                        </Link>
                      </div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary mt-3">
                      View All SEO Articles
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="topic-card card h-100">
                  <div className="card-body p-4">
                    <div className="topic-icon">
                      <i className="fas fa-palette"></i>
                    </div>
                    <h3 className="h4 mb-4">Branding & Design Strategies</h3>
                    <div className="article-list">
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How to Build a Unique Brand Identity That Stands Out
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Logo Design Trends: What Works for Modern Businesses
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Social Media Graphics That Drive Engagement
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          The Psychology Behind Color Choices in Branding
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How Rebranding Can Transform Your Business
                        </Link>
                      </div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary mt-3">
                      View All Branding Articles
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="topic-card card h-100">
                  <div className="card-body p-4">
                    <div className="topic-icon">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <h3 className="h4 mb-4">Digital Marketing Insights</h3>
                    <div className="article-list">
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          PPC vs. Organic Marketing – Which Drives Better
                          Results?
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Social Media Growth Tactics: How to Increase
                          Engagement
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Lead Generation Strategies for B2B & B2C Companies
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How AI & Automation are Changing Digital Marketing
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          Data-Driven Marketing – Using Analytics to Improve
                          Campaigns
                        </Link>
                      </div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary mt-3">
                      View All Marketing Articles
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="topic-card card h-100">
                  <div className="card-body p-4">
                    <div className="topic-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <h3 className="h4 mb-4">
                      AI-Powered Tools & Tech Innovations
                    </h3>
                    <div className="article-list">
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How AI Chatbots Improve Customer Engagement
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          The Role of Predictive Analytics in Digital Strategy
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          AI-Generated Content – Can It Replace Human Writers?
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          How AI Personalization Enhances Marketing Automation
                        </Link>
                      </div>
                      <div className="article-item">
                        <Link to="/" className="text-dark fw-bold">
                          AI Trends in Web Development – Smarter UI/UX Solutions
                        </Link>
                      </div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary mt-3">
                      View All AI Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 my-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="section-title">
                  Featured Case Studies & Success Stories
                </h2>
                <p className="lead">
                  Real-world examples of our digital strategies in action
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-4">
                <div className="case-study-card card h-100">
                  <div className="card-body p-4">
                    <span className="badge bg-primary mb-2">Case Study</span>
                    <h3 className="h5 mb-3">
                      How Eaximo Helped XYZ Brand Scale Their SEO Rankings
                    </h3>
                    <p className="mb-0">
                      Discover how our SEO strategy increased organic traffic by
                      450% in 6 months for an e-commerce client.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="case-study-card card h-100">
                  <div className="card-body p-4">
                    <span className="badge bg-primary mb-2">Success Story</span>
                    <h3 className="h5 mb-3">
                      Real Client Success – Boosting Social Media Conversions by
                      300%
                    </h3>
                    <p className="mb-0">
                      Learn how our social media optimization techniques
                      dramatically improved conversion rates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="case-study-card card h-100">
                  <div className="card-body p-4">
                    <span className="badge bg-primary mb-2">Case Study</span>
                    <h3 className="h5 mb-3">
                      AI-Powered Strategies that Increased Website Traffic for
                      ABC Company
                    </h3>
                    <p className="mb-0">
                      See how implementing AI tools helped a client achieve
                      record-breaking website visits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="case-study-card card h-100">
                  <div className="card-body p-4">
                    <span className="badge bg-primary mb-2">Success Story</span>
                    <h3 className="h5 mb-3">
                      The Impact of Digital Branding on E-Commerce Sales Growth
                    </h3>
                    <p className="mb-0">
                      How a complete brand overhaul led to 200% increase in
                      online sales for a retail client.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="case-study-card card h-100">
                  <div className="card-body p-4">
                    <span className="badge bg-primary mb-2">Case Study</span>
                    <h3 className="h5 mb-3">
                      Redesigning a Business Website - Before & After SEO
                      Results
                    </h3>
                    <p className="mb-0">
                      A detailed analysis of how website redesign combined with
                      SEO boosted lead generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <div className="alert alert-primary d-inline-block" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-lightbulb me-2 fa-lg"></i>
                  <div>
                    Want tailored insights for your business?{" "}
                    <Link to="/" className="alert-link">
                      Contact our experts today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="subscribe-section" id="subscribe">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white display-5 fw-bold mb-4">
                  Subscribe & Stay Updated
                </h2>
                <p className="lead mb-5">
                  Sign up for exclusive tips, trends, and strategies delivered
                  straight to your inbox!
                </p>

                <form className="row g-3 justify-content-center">
                  <div className="col-md-8">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-light btn-lg w-100"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>

                <div className="mt-5">
                  <h4 className="h5 mb-3">Follow us on Social Media:</h4>
                  <div className="d-flex justify-content-center">
                    <Link to="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="/" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="social-icon">
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to="/" className="btn btn-outline-light btn-lg px-5">
                    Dive into expert-driven digital insights now!
                  </Link>
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

export default Blog;
