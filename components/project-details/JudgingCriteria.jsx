import React from 'react';

function JudgingCriteria() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">Judging Criteria</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <p className="fz-18">
                    Projects will be judged based on the following criteria:
                  </p>
                  <ul className="fz-18">
                    <li><strong>Innovation (25%):</strong> How original and creative is the solution?</li>
                    <li><strong>Technical Skill (25%):</strong> Complexity and technical execution of the project.</li>
                    <li><strong>User Experience (20%):</strong> Is the project easy to use and accessible?</li>
                    <li><strong>Impact (20%):</strong> How well does the project solve the identified problem?</li>
                    <li><strong>Presentation (10%):</strong> Clarity and effectiveness of your demo and submission materials.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JudgingCriteria;
