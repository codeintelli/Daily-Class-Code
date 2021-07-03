import React from "react";
// import Arrdata from "./Arrdata";
// import Card from "./Card";
import NetflixData from "./netflixelse";
import Amazon from "./amazon";

// let favseries = "amazon";
let favseries = "netflix";
const Fav = () => {
  if (favseries === "netflix") {
    return <NetflixData />;
  } else {
    return <Amazon />;
  }
};

// const Fav = () => {
//   if (favseries === "netflix") {
//     return (
//       <Card
//         imgsrc={Arrdata[0].imgsrc}
//         title={Arrdata[0].title}
//         sname={Arrdata[0].sname}
//         link={Arrdata[0].link}
//       />
//     );
//   } else {
//     return (
//       <Card
//         imgsrc={Arrdata[2].imgsrc}
//         title={Arrdata[2].title}
//         sname={Arrdata[2].sname}
//         link={Arrdata[2].link}
//       />
//     );
//   }
// };

const IfElse = () => {
  return (
    <>
      <h1 className="heading_style">Top 5 netflix Series</h1>
      <Fav />
    </>
  );
};
export default IfElse;
