import React from "react";
const DownloadApp = () => {
  return (
    <>
      <section
        className="app-download section-padding"
        id="ripple-effect"
        data-scroll-index="3"
        style={{ background: "url('./img/download-app-bg.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>
                  download <span>Application</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="my-5"></div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-4">
              <div data-tilt className="js-tilt">
                <div className="app-download-item">
                  <i className="bx bxl-play-store"></i>
                  <h3>Google Play</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore eius quasi labore repellendus
                  </p>
                  <a href="#" className="btn btn-2">
                    Download{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div data-tilt className="js-tilt">
                <div className="app-download-item">
                  <i className="bx bxl-apple"></i>
                  <h3>Apple Store</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore eius quasi labore repellendus
                  </p>
                  <a href="#" className="btn btn-2">
                    Download
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div data-tilt className="js-tilt">
                <div className="app-download-item glass">
                  <i className="bx bxl-windows"></i>
                  <h3>Microsoft Store</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore eius quasi labore repellendus
                  </p>
                  <a href="#" className="btn btn-2">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
