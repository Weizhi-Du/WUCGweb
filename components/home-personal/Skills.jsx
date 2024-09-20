import React from 'react';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                We&apos;re proud to share our <br />
                <span className="opacity-7">diverse range of workshops.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/1.png" alt="" />
                </div>
                <span className="value">Nextjs</span>
              </div>
              <h6 className="fz-18">Advance with web development</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/2.png" alt="" />
                </div>
                <span className="value">ReactJS</span>
              </div>
              <h6 className="fz-18">Intro to web development</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/3.png" alt="" />
                </div>
                <span className="value">Figma</span>
              </div>
              <h6 className="fz-18">Start with UI/UX</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/7.png" alt="" />
                </div>
                <span className="value">OpenAi</span>
              </div>
              <h6 className="fz-18">Integrate AI into your project</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/5.png" alt="" />
                </div>
                <span className="value">Linux</span>
              </div>
              <h6 className="fz-18">Basic of Linux</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/6.png" alt="" />
                </div>
                <span className="value">AWS</span>
              </div>
              <h6 className="fz-18">Deploy your project on cloud</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
