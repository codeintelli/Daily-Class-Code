import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-xl-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={props.img} alt="Card " />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
