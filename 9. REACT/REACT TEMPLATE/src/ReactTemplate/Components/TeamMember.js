import React from "react";

const TeamMember = () => {
  return (
    <>
      <section className="team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>
                  Team <span>Member</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="my-5"></div>

          <div className="row">
            <div className="owl-carousel team-carousel">
              <div className="team-item">
                <img src="img/team/1.jpg" alt="" />
                <h3>Nimisha Badiyani</h3>
                <span>UI Design</span>
              </div>

              <div className="team-item">
                <img src="img/team/2.jpg" alt="" />
                <h3>Nimisha Badiyani</h3>
                <span>UI Design</span>
              </div>

              <div className="team-item">
                <img src="img/team/3.jpg" alt="" />
                <h3>Aakash Patel</h3>
                <span>UI Design</span>
              </div>

              <div className="team-item">
                <img src="img/team/4.jpg" alt="" />
                <h3>Dushyant Khoda</h3>
                <span>UI Design</span>
              </div>

              <div className="team-item">
                <img src="img/team/5.jpg" alt="" />
                <h3>Nimisha Badiyani</h3>
                <span>UI Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
