import React, { useEffect, useState } from 'react';

const Portfolios = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Define the filter options
  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'SEO & Marketing', value: 'seo' },
    { label: 'Web Development', value: 'web' },
    { label: 'Branding', value: 'branding' },
    { label: 'AI Solutions', value: 'ai' }
  ];

  // Define the portfolio items
  const portfolioItems = [
    {
      id: 1,
      category: 'seo',
      image:
        'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'SEO Project',
      categoryLabel: 'SEO',
      title: 'GlobalTech SEO Transformation',
      description:
        'Increased organic traffic by 220% for a SaaS platform through comprehensive SEO strategy.',
      tags: ['Keyword Research', 'Content Strategy', 'Technical SEO'],
      link: '#',
      linkText: 'View Case Study'
    },
    {
      id: 2,
      category: 'web',
      image:
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Web Development Project',
      categoryLabel: 'Web Development',
      title: 'Luxury Resort Booking Platform',
      description:
        'Custom booking system with real-time availability and payment processing.',
      tags: ['React.js', 'Node.js', 'Payment Gateway'],
      link: '#',
      linkText: 'View Project'
    },
    {
      id: 3,
      category: 'branding',
      image:
        'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Branding Project',
      categoryLabel: 'Branding',
      title: 'EcoLife Rebranding',
      description:
        'Complete brand identity redesign for sustainable products company.',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      link: '#',
      linkText: 'View Project'
    },
    {
      id: 4,
      category: 'ai',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'AI Project',
      categoryLabel: 'AI Solutions',
      title: 'Retail Analytics AI Platform',
      description:
        'Predictive analytics solution for retail inventory optimization.',
      tags: ['Machine Learning', 'Data Visualization', 'Predictive Analytics'],
      link: '#',
      linkText: 'View Project'
    },
    {
      id: 5,
      category: 'seo',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'SEO Project',
      categoryLabel: 'SEO',
      title: 'E-commerce SEO Strategy',
      description:
        'Tripled organic revenue for fashion e-commerce store in 6 months.',
      tags: ['E-commerce SEO', 'Content Marketing', 'Link Building'],
      link: '#',
      linkText: 'View Case Study'
    },
    {
      id: 6,
      category: 'web',
      image:
        'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Web Development Project',
      categoryLabel: 'Web Development',
      title: 'FinTech Dashboard',
      description:
        'Real-time financial dashboard for investment tracking and analytics.',
      tags: ['Vue.js', 'API Integration', 'Data Security'],
      link: '#',
      linkText: 'View Project'
    }
  ];

  // Filter the portfolio items based on active filter
  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Optional: Smooth scrolling for any anchor links (if needed)
  useEffect(() => {
    const handleAnchorClick = (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <section className="py-5" id="portfolio-filter">
          <div className="container">
              <div className="row justify-content-center mb-5">
                  <div className="col-lg-8 text-center">
                      <h2 className="section-title">Our Featured Work</h2>
                      <p className="lead">Browse through our successful projects across various industries and services</p>
                  </div>
              </div>

              <div>
                {/* Filter Buttons */}
                <div className="text-center mb-5">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter.value}
                      className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter.value)}
                      data-filter={filter.value}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Portfolio Grid */}
                <div className="row g-4" id="portfolio-grid">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="col-lg-4 col-md-6 portfolio-item"
                      data-category={item.category}
                    >
                      <div className="portfolio-card">
                        <div className="position-relative">
                          <img src={item.image} className="portfolio-img" alt={item.alt} />
                          <span className="portfolio-category">{item.categoryLabel}</span>
                        </div>
                        <div className="p-4">
                          <h3 className="h5 mb-2">{item.title}</h3>
                          <p className="text-muted small mb-3">{item.description}</p>
                          <div>
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="portfolio-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a href={item.link} className="btn btn-sm btn-outline-primary mt-3">
                            {item.linkText}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                
              <div className="text-center mt-5">
                  <a href="#contact-form" className="btn btn-primary btn-lg px-5">Start Your Project Today</a>
              </div>
          </div>
      </section>
    </>
  );
};

export default Portfolios;
