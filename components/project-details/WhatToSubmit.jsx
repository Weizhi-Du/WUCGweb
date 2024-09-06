/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function WhatToSubmit() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">What to Submit</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <p className="fz-18">
                    For your project submission, please include the following:
                  </p>
                  <ul className="fz-18">
                    <li><strong>Project Overview:</strong> Briefly explain the problem you're solving and how your solution works.</li>
                    <li><strong>GitHub Repository:</strong> Include all code files, clearly labeled, with setup instructions.</li>
                    <li><strong>Demo Video:</strong> A 2-3 minute video demonstrating your solution in action.</li>
                    <li><strong>Team Details:</strong> List of all team members and their roles.</li>
                  </ul>
                  <p className="fz-18">
                    Make sure your project is submitted before the deadline!
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

export default WhatToSubmit;
