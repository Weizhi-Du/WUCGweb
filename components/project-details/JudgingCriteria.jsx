/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function JudgingCriteria() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">Scoring Criteria (100 points)</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <ul className="fz-18">
                    <li className="mb-3">
                      <strong>Technology - 30 points</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Technical Stack:</strong> The complexity and diversity of the technical stack used by the team will directly influence the score. Utilizing cutting-edge or emerging technologies, open-source tools, and appropriate architecture design will be considered a bonus.
                        </li>
                        <li className="mb-2">
                          <strong>Feature Complexity:</strong> The richness and practicality of the product's features will impact the score. Products with complex and useful functionalities that involve advanced technical implementations will receive higher scores. Teams are encouraged to innovate and implement complex algorithms, but the functionalities must remain practical and reliable.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Design - 25 points</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Innovation:</strong> Unique design concepts and innovative user experiences are key factors in the design score. The product should introduce new, unseen ideas or offer a fresh perspective and solutions in existing markets.
                        </li>
                        <li className="mb-2">
                          <strong>Aesthetic Design:</strong> The aesthetics and user-friendliness of the UI/UX will affect the score. The user experience should be intuitive, clean, and visually appealing, making it easy for users to navigate and engage.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Business - 25 points</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Meeting Market Needs:</strong> The product's ability to address real market demands is the core of the business score. Judges will focus on the product's business viability, market potential, and ability to solve pain points.
                        </li>
                        <li className="mb-2">
                          <strong>Market Positioning:</strong> Participants need to clearly articulate the target audience and market positioning of their product. High-scoring products should target a specific user group and have a clear business model.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Presentation - 15 points</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Product Presentation:</strong> How the team presents their product during the final demo is crucial. A high-quality presentation should be concise and clear, effectively communicating the product's core functionalities and value.
                        </li>
                        <li className="mb-2">
                          <strong>Technical and Business Explanation:</strong> The presentation should not only showcase the product but also explain its technical implementation and business potential in a way that non-technical individuals can understand its value.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Diversity of Majors - 5 points</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Integration of Multiple Disciplines:</strong> Whether the team integrates knowledge from different fields (e.g., computer science, design, marketing, etc.) during product development will directly influence the score. Collaboration across multiple disciplines can provide the product with diverse perspectives and more comprehensive solutions.
                        </li>
                      </ul>
                    </li>
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
