import React from "react";
import Funfactcard from "./FunfactCard";
import { FunfactData } from "./ArrData";
const FunFact = () => {
  return (
    <>
      <section className="fun-facts section-padding">
        <div className="container">
          <div className="row">
            <div
              className="
              col-lg-6 col-md-5
              d-flex
              align-items-center
              justify-content-center
            "
            >
              <div className="fun-fact-img">
                <img src="img/app-screenshots/2.png" alt="fun-facts" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="section-title">
                <h2>
                  fun <span>facts</span>
                </h2>
                <p className="fun-facts-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero, iure magnam corporis exercitationem animi nulla quia
                  repellendus suscipit ducimus enim illum voluptates sit nobis
                  cumque mollitia ex fuga, deleniti eos.
                </p>
                <div className="row">
                  {FunfactData.map((elem) => {
                    return (
                      <>
                        <Funfactcard
                          number={elem.number}
                          heading={elem.Heading}
                          color={elem.color}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
