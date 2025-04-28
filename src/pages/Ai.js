import React from "react";
import Consultation from "../components/Consultation";
import Connect from "../components/Connect";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Ai.css";

const Ai = () => {
    return (
        <>
            <Navbar />
            <main>
                <header className="ai-hero py-5" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h1 className="display-4 fw-bold mb-4 mt-5">Revolutionizing Business with AI-Powered Solutions</h1>
                                <p className="lead mb-4">AI-driven marketing and automation are <strong>reshaping digital strategies</strong>, making processes smarter, faster, and <strong>data-driven</strong>. Eaximo offers <strong>next-gen AI services</strong>, from <strong>automated content creation and chatbots</strong> to <strong>predictive analytics and business automation</strong>, ensuring businesses stay ahead in the competitive digital landscape.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <a href="#contact" className="btn btn-primary btn-lg border-0 px-4">Get AI Solutions</a>
                                    <a href="#services" className="btn btn-outline-light btn-lg px-4">Our AI Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <section className="py-5 my-5" id="services">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10 text-center">
                                <span className="feature-badge">AI-Powered Services</span><br />
                                <h2 className="section-title">Our AI-Powered Services</h2>
                                <p className="lead">Transform your business with cutting-edge artificial intelligence solutions</p>
                            </div>
                        </div>
                        
                        <ul className="nav nav-pills mb-5 justify-content-center flex-wrap" id="services-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="content-tab" data-bs-toggle="pill" data-bs-target="#content" type="button">AI Content</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seo-tab" data-bs-toggle="pill" data-bs-target="#seo" type="button">AI in SEO</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="chatbots-tab" data-bs-toggle="pill" data-bs-target="#chatbots" type="button">Chatbots</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="automation-tab" data-bs-toggle="pill" data-bs-target="#automation" type="button">Automation</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="data-tab" data-bs-toggle="pill" data-bs-target="#data" type="button">Data Insights</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="visual-tab" data-bs-toggle="pill" data-bs-target="#visual" type="button">Visual AI</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="custom-tab" data-bs-toggle="pill" data-bs-target="#custom" type="button">Custom AI</button>
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="services-tabContent">
                            <div className="tab-pane fade show active" id="content" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-blog"></i>
                                                </div>
                                                <h3 className="h4">AI Blog Writing</h3>
                                                <p className="text-muted">Data-optimized, AI-assisted content creation with human editing for quality assurance.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">ChatGPT</span>
                                                    <span className="tool-badge">Jasper</span>
                                                    <span className="tool-badge">Copy.ai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-share-alt"></i>
                                                </div>
                                                <h3 className="h4">AI Social Media Posts</h3>
                                                <p className="text-muted">Automated captions, tweets, and engaging content tailored to your brand voice.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Writesonic</span>
                                                    <span className="tool-badge">Copy.ai</span>
                                                    <span className="tool-badge">ChatGPT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-shopping-cart"></i>
                                                </div>
                                                <h3 className="h4">AI Product Descriptions</h3>
                                                <p className="text-muted">High-quality e-commerce copywriting at scale for your product catalog.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Jasper</span>
                                                    <span className="tool-badge">Copy.ai</span>
                                                    <span className="tool-badge">ChatGPT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Optimize Your Content Creation with AI Today!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="seo" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-search"></i>
                                                </div>
                                                <h3 className="h4">AI Keyword Research</h3>
                                                <p className="text-muted">AI-driven SEO optimization with advanced content clustering and keyword analysis.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Semantic search analysis</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Competitor content gaps</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Topic cluster generation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-chart-line"></i>
                                                </div>
                                                <h3 className="h4">Predictive SEO</h3>
                                                <p className="text-muted">AI tools for improved search rankings with predictive performance analysis.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Ranking prediction</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Content gap analysis</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Algorithm update forecasting</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-ad"></i>
                                                </div>
                                                <h3 className="h4">AI Ad Copy Generation</h3>
                                                <p className="text-muted">Automated high-converting ad copies for PPC campaigns across platforms.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Platform-specific optimization</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>A/B variant generation</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Performance prediction</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Boost SEO & PPC Campaigns with AI-Powered Insights!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="chatbots" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fab fa-whatsapp"></i>
                                                </div>
                                                <h3 className="h4">WhatsApp Chatbots</h3>
                                                <p className="text-muted">AI-driven customer engagement through WhatsApp Business API integration.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">ManyChat</span>
                                                    <span className="tool-badge">Tidio</span>
                                                    <span className="tool-badge">Dialogflow</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-robot"></i>
                                                </div>
                                                <h3 className="h4">AI Customer Support</h3>
                                                <p className="text-muted">Automated query resolution & virtual assistants for 24/7 customer service.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Botpress</span>
                                                    <span className="tool-badge">Dialogflow</span>
                                                    <span className="tool-badge">IBM Watson</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-filter"></i>
                                                </div>
                                                <h3 className="h4">Lead Qualification Bots</h3>
                                                <p className="text-muted">AI-based lead scoring & filtering to prioritize your sales pipeline.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">ManyChat</span>
                                                    <span className="tool-badge">Drift</span>
                                                    <span className="tool-badge">Intercom</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Enhance Customer Engagement with AI Chatbots!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="automation" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-tasks"></i>
                                                </div>
                                                <h3 className="h4">Workflow Automation</h3>
                                                <p className="text-muted">AI-driven task automation for business process efficiency and productivity.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Process mapping</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Smart triggers</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Adaptive learning</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-users"></i>
                                                </div>
                                                <h3 className="h4">CRM Automation</h3>
                                                <p className="text-muted">Smarter customer management solutions with AI-powered CRM integrations.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>HubSpot AI</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Zoho AI</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Salesforce Einstein</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-mail-bulk"></i>
                                                </div>
                                                <h3 className="h4">Email Automation</h3>
                                                <p className="text-muted">AI-driven personalized email sequencing for maximum engagement.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Behavioral triggers</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Predictive send times</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Dynamic content</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Optimize Workflows & Drive Growth with AI Automation!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="data" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-chart-bar"></i>
                                                </div>
                                                <h3 className="h4">AI Data Dashboards</h3>
                                                <p className="text-muted">Custom analytics tools for business intelligence with AI-powered insights.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Custom KPI tracking</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Predictive analytics</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Automated reporting</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-user-clock"></i>
                                                </div>
                                                <h3 className="h4">Behavior Prediction</h3>
                                                <p className="text-muted">AI-driven insights for anticipating customer actions and marketing strategies.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Churn prediction</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Purchase likelihood</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Customer lifetime value</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-chart-pie"></i>
                                                </div>
                                                <h3 className="h4">Market Forecasting</h3>
                                                <p className="text-muted">AI-powered industry trend analysis for strategic business scaling.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Demand forecasting</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Competitor analysis</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Pricing optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Turn Data into Insights with AI-Powered Analytics!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="visual" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-paint-brush"></i>
                                                </div>
                                                <h3 className="h4">AI Graphic Design</h3>
                                                <p className="text-muted">AI-assisted templates and automated branding materials creation.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Midjourney</span>
                                                    <span className="tool-badge">Canva AI</span>
                                                    <span className="tool-badge">Adobe Firefly</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-trademark"></i>
                                                </div>
                                                <h3 className="h4">AI Brand Design</h3>
                                                <p className="text-muted">AI-powered creative branding and logo ideation services.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Looka</span>
                                                    <span className="tool-badge">Brandmark</span>
                                                    <span className="tool-badge">Midjourney</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-video"></i>
                                                </div>
                                                <h3 className="h4">AI Video Editing</h3>
                                                <p className="text-muted">AI-enhanced editing, scene selection and content optimization.</p>
                                                <div className="mt-3">
                                                    <span className="tool-badge">Runway ML</span>
                                                    <span className="tool-badge">Synthesia</span>
                                                    <span className="tool-badge">Descript</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Enhance Creativity with AI-Driven Visual Solutions!</a>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="custom" role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-brain"></i>
                                                </div>
                                                <h3 className="h4">Custom AI Models</h3>
                                                <p className="text-muted">Tailored AI model training for specific business needs and datasets.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Data preparation</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Model training</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Performance optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-cogs"></i>
                                                </div>
                                                <h3 className="h4">Process Automation</h3>
                                                <p className="text-muted">Workflow optimization using machine learning for business processes.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Document processing</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>Decision automation</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Anomaly detection</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="service-card card h-100">
                                            <div className="card-body p-4">
                                                <div className="ai-icon">
                                                    <i className="fas fa-code"></i>
                                                </div>
                                                <h3 className="h4">AI App Integration</h3>
                                                <p className="text-muted">AI-powered application development with custom integrations.</p>
                                                <ul className="list-unstyled">
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>OCR technology</li>
                                                    <li className="mb-1"><i className="fas fa-check-circle text-ai-purple me-2"></i>NLP applications</li>
                                                    <li><i className="fas fa-check-circle text-ai-purple me-2"></i>Computer vision</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-5">
                                    <a href="#contact" className="btn btn-primary btn-lg bg-ai-purple border-0 px-5">Develop Advanced AI Solutions for Your Business!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title">Why Choose Eaximo for AI-Powered Services?</h2>
                                <p className="lead">We deliver measurable results through innovative AI solutions</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-rocket"></i>
                                    </div>
                                    <div>
                                        <h3 className="h5">Cutting-Edge AI</h3>
                                        <p className="mb-0">Integrating the latest AI technologies into business processes for maximum efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <h3 className="h5">Data-Driven Marketing</h3>
                                        <p className="mb-0">Predictive analytics & AI automation for smarter marketing decisions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <div>
                                        <h3 className="h5">Custom AI Solutions</h3>
                                        <p className="mb-0">Tailored AI implementations for branding, sales growth, and operations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <div>
                                        <h3 className="h5">Enhanced Engagement</h3>
                                        <p className="mb-0">AI-driven chatbot interactions and automation for better customer experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Consultation />

                <Connect />
            </main>
            <Footer />
        </>
    );
};

export default Ai;
