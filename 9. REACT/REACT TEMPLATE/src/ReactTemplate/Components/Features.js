import React from "react";
import FeatureCard from "./FeatureCardSection";
import { FeaturesData } from "./ArrData";
const Features = () => {
  return (
    <>
      <section className="features section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2>
                  awesome <span>Features</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="my-5"></div>
          <div className="row">
            <div className="owl-carousel features-carousel">
              {FeaturesData.map((elem) => {
                return (
                  <>
                    <FeatureCard
                      icon={elem.icon}
                      heading={elem.heading}
                      subheading={elem.subheading}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
