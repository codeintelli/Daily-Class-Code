import React from "react";
import Arrdata from "./Arrdata";
import Card from "./Card";

const NetflixApp = () => {
  return (
    <Card
      imgsrc={Arrdata[2].imgsrc}
      title={Arrdata[2].title}
      sname={Arrdata[2].sname}
      link={Arrdata[2].link}
    />
  );
};

export default NetflixApp;
