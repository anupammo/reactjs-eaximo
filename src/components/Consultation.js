import React from "react";
import { Link } from "react-router-dom";
import styles from './Consultation.module.css';

const Consultation = () => {
    return (
        <section className={`${styles.statsSection} text-white`}>
            <div className="boxes py-3">
                <div className="container my-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="text-light fw-bold mb-4">
                                <span className='text-gradient'>Ready to Transform Your Business?</span>
                            </h2>
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
            </div>
        </section>
    );
};

export default Consultation;
