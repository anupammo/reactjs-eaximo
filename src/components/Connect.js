import React from "react";

const Connect = () => {
    return (
        <section className="py-5" id="contact">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="lead">Let's discuss how we can help your business grow</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body p-5">
                                <h3 className="h4 mb-4">Contact Information</h3>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3 text-primary">
                                        <i className="fas fa-map-marker-alt fa-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Our Office</h4>
                                        <p className="mb-0">123 Digital Avenue, Suite 200 <br />San Francisco, CA 94107</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3 text-primary">
                                        <i className="fas fa-envelope fa-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Email Us</h4>
                                        <p className="mb-0">hello@eaximo.com <br />support@eaximo.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary">
                                        <i className="fas fa-phone-alt fa-lg"></i>
                                    </div>
                                    <div>
                                        <h4 className="h6 mb-1">Call Us</h4>
                                        <p className="mb-0">+91 (947) 446-0058 <br />Mon-Fri, 9am-6pm PST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-5">
                                <h3 className="h4 mb-4">Send Us a Message</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                        <div className="col-12">
                                            <select className="form-select">
                                                <option defaultValue="option1">I'm interested in...</option>
                                                <option>AI-Powered Services</option>
                                                <option>IT &amp; Tech Support</option>
                                                <option>Digital Marketing</option>
                                                <option>Web Development</option>
                                                <option>Multiple Services</option>
                                                <option>Other Inquiry</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" placeholder="Tell us about your project..." required=""></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
