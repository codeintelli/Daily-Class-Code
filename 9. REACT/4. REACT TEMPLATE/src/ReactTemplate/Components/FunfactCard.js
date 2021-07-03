import React from "react";

const FunfactCard = (props) => {
  return (
    <>
      <div className="col-sm-6">
        <div data-tilt className="js-tilt">
          <div className={props.color}>
            <h3>{props.number}</h3>
            <span>{props.heading}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunfactCard;
