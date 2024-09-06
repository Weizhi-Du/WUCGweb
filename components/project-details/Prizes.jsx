import React from 'react';

function Prizes() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">Prizes</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <p className="fz-18">
                    We have exciting prizes up for grabs for the best teams:
                  </p>
                  <ul className="fz-18">
                    <li><strong>1st Place:</strong> $300, JBL Speaker</li>
                    <li><strong>2nd Place:</strong> $200, Apple Airpods</li>
                    <li><strong>3rd Place:</strong> $100, Keyboards</li>
                    <li><strong>4th Place:</strong> $50, xBox Controller</li>
                    <li><strong>Best Newcomer Award:</strong> T-Shirts</li>
                    <li><strong>Special Category Prizes:</strong> Prizes for the most creative project, best design, and most impactful solution!</li>
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

export default Prizes;
