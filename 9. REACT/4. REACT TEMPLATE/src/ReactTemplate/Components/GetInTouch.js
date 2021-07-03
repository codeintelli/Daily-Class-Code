import React from "react";

const GetInTouch = () => {
  return (
    <>
      <section className="contact section-padding" data-scroll-index="6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>
                  Get In <span>Touch ?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-5"></div>
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="contact-info">
                <h3>For Any Query And Support</h3>
                <div className="contact-info-item">
                  <i className="bx bx-location-plus"></i>
                  <h3>Company Location</h3>
                  <p>199 xyz gali, New Delhi</p>
                </div>

                <div className="contact-info-item">
                  <i className="bx bx-envelope"></i>
                  <h3>Write to us at</h3>
                  <p>info@gmail.com</p>
                </div>

                <div className="contact-info-item">
                  <i className="bx bxs-phone-call"></i>
                  <h3>Call us on</h3>
                  <p>+91 2222 2222 **</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="contact-form">
                <form action="">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="number"
                          placeholder="Your Phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your Subject"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          placeholder="Your Message"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        id="custom"
                        value="Send Message"
                        className="btn btn-2"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
