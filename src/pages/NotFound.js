import "./NotFound.css";
// import React from "react";

const NotFound = () => {
  return (
    <>
        <div className="hero-home">
            <div className="floating"></div>
            <div className="floating"></div>
            <div className="floating"></div>
            <div className="floating"></div>
            
            <section className="error-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="error-container text-center">
                                {/* Animated broken chain */}
                                {/* <div className="chain-container">
                                    <div className="chain-link"><i className="fas fa-link"></i></div>
                                    <div className="chain-link"><i className="fas fa-link"></i></div>
                                    <div className="chain-link broken"><i className="fas fa-unlink"></i></div>
                                    <div className="chain-link"><i className="fas fa-link"></i></div>
                                </div> */}
                                
                                {/* Glitch effect 404 text */}
                                <h1 className="error-code glitch" data-text="404">404</h1>
                                
                                <h2 className="error-title">Page Not Found</h2>
                                
                                <p className="error-message">
                                    The page you are looking for might have been removed, had its name changed, 
                                    or is temporarily unavailable. Let's get you back on track.
                                </p>
                                
                                <a href="./" className="btn btn-primary btn-lg">
                                    <i className="fas fa-home me-2"></i>Return to Homepage
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  );
};

export default NotFound;
