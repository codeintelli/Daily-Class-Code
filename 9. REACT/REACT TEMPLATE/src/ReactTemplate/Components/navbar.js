import React from "react";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Code Intelli
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <i className="bx bxs-category"></i>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-capitalize"
                  href="#"
                  data-scroll-nav="0"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  data-scroll-nav="1"
                >
                  features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  data-scroll-nav="2"
                >
                  screenshots
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  data-scroll-nav="4"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  data-scroll-nav="5"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  data-scroll-nav="6"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
