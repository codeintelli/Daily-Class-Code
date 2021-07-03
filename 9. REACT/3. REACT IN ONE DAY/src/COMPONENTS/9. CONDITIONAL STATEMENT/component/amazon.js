import React from "react";
import Arrdata from "./Arrdata";
import Card from "./Card";

const Amazon = () => {
  return (
    <Card
      imgsrc={Arrdata[0].imgsrc}
      title={Arrdata[0].title}
      sname={Arrdata[0].sname}
      link={Arrdata[0].link}
    />
  );
};

export default Amazon;
