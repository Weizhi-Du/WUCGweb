/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function WhatToBuild() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">What to Build</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <p className="fz-18">
                    Participants are encouraged to build solutions that address challenges related to our theme, which will be revealed at the beginning of the hackathon. Possible projects include:
                  </p>
                  <ul className="fz-18">
                    <li>Web or mobile applications</li>
                    <li>Machine learning models</li>
                    <li>Hardware-based solutions</li>
                    <li>Creative tools to improve daily life or solve global problems</li>
                  </ul>
                  <p className="fz-18">
                    Be creative! We welcome out-of-the-box projects that showcase your team's innovation and technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToBuild;
