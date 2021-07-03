import React from "react";

const Hero = () => {
  return (
    <>
      <section className="home d-flex align-items-center" data-scroll-index="0">
        <div className="effect-wrap">
          <i className="bx bx-plus effect effect-1"></i>
          <i className="bx bx-plus effect effect-2"></i>
          <i className="bx bx-circle effect effect-3"></i>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7">
              <div className="home-text">
                <h1>Best Mobile App for your Bussiness</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  eius minima sequi.
                </p>
                <div className="home-btn">
                  <a className="btn btn-l" data-scroll-nav="3">
                    Download App
                  </a>
                  <button className="btn btn-l video-play-btn">
                    <i className="bx bx-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 d-flex justify-content-center">
              <div className="home-img">
                <div className="circle"></div>
                <img src="./img/app-screenshots/1.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
