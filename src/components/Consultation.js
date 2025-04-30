import React from "react";
import { Link } from "react-router-dom";

const Consultation = () => {
    return (
        <section className="stats-section text-white py-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
                        <p className="lead mb-5">Whether you need one service or a complete digital transformation, Eaximo 
                            has the expertise to help you succeed in today's competitive landscape.</p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            {/* Ensure 'to' prop is included in Link */}
                            <Link to="/contact" className="btn btn-light btn-lg px-5">Contact us</Link>
                            <Link to="tel:919474460058" className="btn btn-outline-light btn-lg px-5">Call Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;
