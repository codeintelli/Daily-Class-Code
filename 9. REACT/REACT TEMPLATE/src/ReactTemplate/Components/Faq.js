import React from 'react'

const Faq = () => {
    return (
      <>
        <section className="faq section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>
                    Frequently<span> Asked </span>Question ?
                  </h2>
                </div>
              </div>
            </div>
            <div className="my-5"></div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div id="accordion">
                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-01"
                    >
                      <h3>100% Fluid Responsive</h3>
                      <i className="bx bx-plus add"></i>
                      <i className="bx bx-minus none"></i>
                    </div>
                    <div
                      className="collapse"
                      id="collapse-01"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dolor aut temporibus, itaque aspernatur officia
                          similique.Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Dolor aut temporibus, itaque
                          aspernatur officia similique.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-02"
                    >
                      <h3>Clean Code</h3>
                      <i className="bx bx-plus add"></i>
                      <i className="bx bx-minus none"></i>
                    </div>
                    <div
                      className="collapse"
                      id="collapse-02"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dolor aut temporibus, itaque aspernatur officia
                          similique.Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Dolor aut temporibus, itaque
                          aspernatur officia similique.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-03"
                    >
                      <h3>Data Free Code</h3>
                      <i className="bx bx-plus add"></i>
                      <i className="bx bx-minus none"></i>
                    </div>
                    <div
                      className="collapse"
                      id="collapse-03"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dolor aut temporibus, itaque aspernatur officia
                          similique.Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Dolor aut temporibus, itaque
                          aspernatur officia similique.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-04"
                    >
                      <h3>Awesome Code</h3>
                      <i className="bx bx-plus add"></i>
                      <i className="bx bx-minus none"></i>
                    </div>
                    <div
                      className="collapse"
                      id="collapse-04"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dolor aut temporibus, itaque aspernatur officia
                          similique.Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Dolor aut temporibus, itaque
                          aspernatur officia similique.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div
                      className="accordion-header collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-05"
                    >
                      <h3>Whole Code</h3>
                      <i className="bx bx-plus add"></i>
                      <i className="bx bx-minus none"></i>
                    </div>
                    <div
                      className="collapse collapsed"
                      id="collapse-05"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Dolor aut temporibus, itaque aspernatur officia
                          similique.Lorem ipsum dolor, sit amet consectetur
                          adipisicing elit. Dolor aut temporibus, itaque
                          aspernatur officia similique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Faq
