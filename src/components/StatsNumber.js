// import React from "react";
// import { Link } from 'react-router-dom';
import Counter from "../components/Counter";

const StatsNum = () => {
    return (
        <section className="stats-section py-5">
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-3 col-6">
                        <div className="text-center text-white py-4">
                            <div className="stat-number">
                                <Counter target={500} />
                            </div>
                            <h3 className="text-white h5">Projects</h3>
                            <p className="mb-0">Completed Successfully</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="text-center text-white py-4">
                            <div className="stat-number">
                                <Counter target={120} />
                            </div>
                            <h3 className="text-white h5">Clients</h3>
                            <p className="mb-0">Satisfied Worldwide</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="text-center text-white py-4">
                            <div className="stat-number">
                                <Counter target={10} />
                            </div>
                            <h3 className="text-white h5">Years</h3>
                            <p className="mb-0">Of Experience</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="text-center text-white py-4">
                            <div className="stat-number">
                                <Counter target={15} />
                            </div>
                            <h3 className="text-white h5">Countries</h3>
                            <p className="mb-0">We Serve</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsNum;