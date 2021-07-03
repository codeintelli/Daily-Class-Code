import React from "react";

const Card = (props) => {
  const { title, sname, link, imagesrc } = props;
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={imagesrc} alt="mypic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{title}</span>
            <h3 className="card__title">{sname}</h3>
            <a href={link} target="_react">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
