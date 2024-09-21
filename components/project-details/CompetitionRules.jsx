/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function CompetitionRules() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">Competition Rules</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <ul className="fz-18">
                    <li className="mb-3">
                      <strong>Competition Time</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Official Competition Time:</strong> From 12:00 PM on September 21, 2024, to 1:00 PM on September 22, 2024.
                        </li>
                        <li className="mb-2">
                          <strong>Optimization and Presentation Stage:</strong> Between 1:00 PM and 2:00 PM on September 22, teams are allowed to fine-tune and improve their products for the final presentation. However, the judging will be based on the product submitted before 1:00 PM.
                        </li>
                        <li className="mb-2">
                          <strong>Submission Deadline:</strong> All teams must submit their projects via a GitHub repository by 1:00 PM on September 22, 2024. Late submissions will not be accepted. Please allow sufficient time for uploading and verifying submissions.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>No Substantive Work Before the Competition</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          Any substantive development or coding work before the official start of the competition is strictly prohibited. Participants may brainstorm and plan the product but are not allowed to write any code or set up systems. This rule ensures fairness and encourages teams to focus on efficient development during the competition period.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Team Size and Grouping Rules</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          During the competition, participants are allowed to freely form and change teams, and they are encouraged to adjust the team according to skills and needs. However, by the time the product is submitted, the team size cannot exceed four people. Teams exceeding the limit will not be scored.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration Rules</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          Any participant has the right to assist others, including members of other teams or staff. This open collaborative atmosphere encourages knowledge sharing and teamwork. However, no participant or staff member is obligated to provide help, and the final product is still the responsibility of each team.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Use of AI</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>AI Tools:</strong> Participants are allowed to use any generative AI tools (such as code generation, text generation, etc.) to assist in project development, except for specifically noted limitations (e.g., "Dijkstra's Coding Contest" cannot use AI tools). Participants must ensure that AI-generated content is legally compliant and should note the use of AI tools in their submissions.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Code Originality and Intellectual Property</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          The product submitted by the team must be original and cannot directly use someone else's codebase or product unless the resources are open source and suitable for this type of competition. Judges have the right to request proof of code originality and take measures against violations.
                        </li>
                        <li className="mb-2">
                          After the competition, participants retain the intellectual property rights to their submitted products, but the organizers reserve the right to display or share outstanding works.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3">
                      <strong>Dijkstra's Coding Contest Restrictions</strong>
                      <ul className="mt-2">
                        <li className="mb-2">
                          <strong>Special AI Limitation:</strong> No generative AI tools are allowed in the "Dijkstra's Coding Contest." Other parts of the competition are not subject to this restriction, but participants are still expected to complete core tasks independently.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h5 className="mt-4">Additional Information</h5>
                  <ul className="fz-18">
                    <li className="mb-3">
                      <strong>Support During the Competition:</strong> The organizers will provide technical and non-technical support but do not guarantee that every issue will be resolved promptly. Participants should strive to solve problems independently and seek help from other teams or staff when necessary.
                    </li>
                    <li className="mb-3">
                      <strong>Judging Panel:</strong> The panel will consist of experts from technology, design, and business fields, who will provide comprehensive and impartial evaluations of each product. The decisions made by the judges are final and cannot be appealed.
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

export default CompetitionRules;
