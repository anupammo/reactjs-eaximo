import React from "react";

const Consultation = () => {
    return (
        <section className="py-5 bg-primary text-white">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="lead mb-5">Whether you need one service or a complete digital transformation, Eaximo has the expertise to help you succeed in today's competitive landscape.</p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <a href="/contact" className="btn btn-light btn-lg px-5">Get Started</a>
                            <a href="tel:+917474460058" className="btn btn-outline-light btn-lg px-5"><i className="fas fa-phone me-2"></i>Call Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;