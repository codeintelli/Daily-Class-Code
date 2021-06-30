import React from "react";

const AppScreenshot = () => {
  return (
    <>
      <section className="app-screenshot section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>
                  app <span>screenshots</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="owl-carousel screenshot-carousel">
              <div className="screenshot-item">
                <img src="img/app-screenshots/1.png" alt="" />
              </div>

              <div className="screenshot-item">
                <img src="img/app-screenshots/2.png" alt="" />
              </div>

              <div className="screenshot-item">
                <img src="img/app-screenshots/3.png" alt="" />
              </div>

              <div className="screenshot-item">
                <img src="img/app-screenshots/1.png" alt="" />
              </div>

              <div className="screenshot-item">
                <img src="img/app-screenshots/2.png" alt="" />
              </div>

              <div className="screenshot-item">
                <img src="img/app-screenshots/3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppScreenshot;
