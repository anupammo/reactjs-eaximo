import React from "react";

const Contacts = () => {
  return (
    <>
      <section className="py-5 my-5" id="contact-info">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Contact Details</h2>
              <p className="lead">
                Connect with Eaximo's digital experts today
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt text-dark fs-1 mb-4"></i>
                </div>
                <h3 className="h4 mb-3">Office Address</h3>
                <p className="mb-0">
                  123 Business Avenue, Suite 456
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt text-dark fs-1 mb-4"></i>
                </div>
                <h3 className="h4 mb-3">Phone</h3>
                <p className="mb-0">
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri: 9am-6pm EST
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope text-dark fs-1 mb-4"></i>
                </div>
                <h3 className="h4 mb-3">Email &amp; Website</h3>
                <p className="mb-0">
                  info@eaximo.com
                  <br />
                  www.eaximo.com
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <h4 className="h5 mb-3">Social Media Handles</h4>
            <div className="d-flex justify-content-center">
              <a className="social-icon" href="https://www.linkedin.com/" data-discover="true" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in bg-primary text-white"></i>
              </a>
              <a className="social-icon" href="https://www.instagram.com/" data-discover="true" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram bg-primary text-white"></i>
              </a>
              <a className="social-icon" href="https://www.youtube.com/" data-discover="true" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube bg-primary text-white"></i>
              </a>
              <a className="social-icon" href="https://twitter.com/" data-discover="true" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter bg-primary text-white"></i>
              </a>
              <a className="social-icon" href="https://www.facebook.com/" data-discover="true" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f bg-primary text-white"></i>
              </a>
            </div>
            <div
              className="lead alert border bg-primary text-white d-inline-flex align-items-center mt-4"
              role="alert"
            >
              <i className="fas fa-lightbulb me-2 fs-3"></i>
              <div className="fs-6">
                Want to stay updated? Follow us for industry insights &amp;
                digital trends!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
