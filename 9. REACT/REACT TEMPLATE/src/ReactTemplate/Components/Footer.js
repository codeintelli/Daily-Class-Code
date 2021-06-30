import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-col">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quos tempore dolor.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-col">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Latest Blogs</a>
                  </li>
                  <li>
                    <a href="#">App Services</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-col">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#" data-scroll-goto="0">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" data-scroll-goto="1">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" data-scroll-goto="2">
                      Screenshots
                    </a>
                  </li>
                  <li>
                    <a href="#" data-scroll-goto="5">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" data-scroll-goto="4">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-col">
                <h3>Social</h3>
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <p className="copyright-text">&copy;2021 @ The Code Intelli</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
