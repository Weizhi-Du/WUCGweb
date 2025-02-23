/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8 md-mb80">
            <div className="row lg-marg align-items-center">
              <div className="col-md-6">
                <div className="img1 sm-mb50">
                  <img src="/assets/imgs/arw3.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <h3 className="mb-30">
                    We believe in the power of{' '}
                    <span className="fw-300">Group</span>{' '}
                    <span className="fw-300">Work.</span>
                  </h3>
                  <p>
                    Our club's course helper has already assisted many members and students 
                    in finding their ideal courses and excelling in them.
                  </p>

                  {/* <a href="/page-404" className="underline main-color mt-40">
                    <span className="text">
                      More About Us <i className="ti-arrow-top-right"></i>
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="numbers mt-80">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">100%</h3>
                      <h6 className="p-color sub-title">
                        Club Member Satisfaction
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">15</h3>
                      <h6 className="p-color sub-title">People Fixed Their Schedule</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src="/assets/imgs/intro/04.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
