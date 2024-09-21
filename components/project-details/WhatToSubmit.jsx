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
                    <li className="mb-3">
                      <strong>Submission Format:</strong> Teams must submit a public GitHub repository. The repository should contain all source code, documentation, and a README file. The README file must include at least the following:
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Team Member Information:</strong> The names, majors, and roles of each team member.
                        </li>
                        <li className="mb-2">
                          <strong>Product Overview:</strong> A brief introduction to the product's core functionality, technical stack, and design concept.
                        </li>
                        <li className="mb-2">
                          <strong>(Optional: Bonus Points) Installation and Usage Guide:</strong> If the judges intend to run or test the product, the README should provide clear steps and dependency instructions.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Demo Video:</strong> A 2-3 minute video demonstrating your solution in action.
                    </li>
                    <li className="mb-3">
                      <strong>Team Details:</strong> List of all team members and their roles.
                    </li>
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
