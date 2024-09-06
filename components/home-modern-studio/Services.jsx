import React from 'react';

function Services() {
  return (
    <section className="services-inline section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">Roles</h6>
              <h2>Choose The Role You Want To Be</h2>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item d-flex align-items-center">
              <span className="num">01</span>
              <div>
                <span className="sub-title main-color mb-10">Role</span>
                <h2>
                  UI / UX <span className="fw-200">Web Design</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/page-services-details">
                  Learn more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
            <div className="item d-flex align-items-center">
              <span className="num">02</span>
              <div>
                <span className="sub-title main-color mb-10">Role</span>
                <h2>
                  SWE <span className="fw-200">Engineer</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/page-services-details">
                  Learn more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
            <div className="item d-flex align-items-center">
              <span className="num">03</span>
              <div>
                <span className="sub-title main-color mb-10">Role</span>
                <h2>
                  SEO / <span className="fw-200">Marketing</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/page-services-details">
                  Learn more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
            <div className="item d-flex align-items-center">
              <span className="num">04</span>
              <div>
                <span className="sub-title main-color mb-10">Role</span>
                <h2>
                  PDM <span className="fw-200">Manager</span>
                </h2>
              </div>
              <div className="ml-auto">
                <a href="/page-services-details">
                  Learn more <span className="ti-arrow-top-right ml-10"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Services;
