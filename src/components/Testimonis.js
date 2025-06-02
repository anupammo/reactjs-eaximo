const Testimonis = () => {
    return (
        <section className="py-5 my-5" id="testimonials">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="section-title">Client Testimonials</h2>
                        <p className="lead">What our clients say about our work</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="testimonial-card card h-100">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <img src="/testimonis/sarah-johnson.webp" className="testimonial-img me-3" alt="Client testimonial" width={74} height={74} />
                                    <div>
                                        <h3 className="h5 mb-1">Sarah Johnson</h3>
                                        <p className="text-muted mb-0">CEO, TechStart Inc.</p>
                                    </div>
                                </div>
                                <p className="mb-0">Eaximo transformed our online presence with their SEO expertise and web development skills! Our organic traffic increased by 300% in just 6 months.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-card card h-100">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <img src="/testimonis/michael-chen.webp" className="testimonial-img me-3" alt="Client testimonial" width={74} height={74} />
                                    <div>
                                        <h3 className="h5 mb-1">Michael Chen</h3>
                                        <p className="text-muted mb-0">Marketing Director, GlobalRetail</p>
                                    </div>
                                </div>
                                <p className="mb-0">Their branding &amp; design strategies helped us establish a stronger identity in a competitive market. The team is professional, creative, and results-driven.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-card card h-100">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <img src="/testimonis/emily-rodriguez.webp" className="testimonial-img me-3" alt="Client testimonial" width={74} height={74} />
                                    <div>
                                        <h3 className="h5 mb-1">Emily Rodriguez</h3>
                                        <p className="text-muted mb-0">Founder, GreenLife Organics</p>
                                    </div>
                                </div>
                                <p className="mb-0">The AI-powered marketing tools Eaximo implemented saved us 20 hours per week in manual work while improving our campaign performance by 45%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonis;