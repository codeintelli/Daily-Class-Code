import React from "react";
import "./Netflix.css";
import ArrData from "./Details";
import Card from "./Card";
const NetfliCard = () => {
  return (
    <>
      <h1 className="heading_style">Top 5 Netflix Series</h1>

      {ArrData.map(function (elem, index) {
        return (
          <>
            <Card
              id={elem.id}
              imagesrc={elem.imgsrc}
              title={elem.title}
              sname={elem.sname}
              link={elem.link}
            />
          </>
        );
      })}
    </>
  );
};

export default NetfliCard;
