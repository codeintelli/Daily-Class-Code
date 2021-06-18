import React from "react";
import Card from "./Card";
import Arr from "./Arr";
const NetflixArr = () => {
  return (
    <>
      <div className="row">
        {/* <Card title={Arr[0].title} desc={Arr[0].dec} img={Arr[0].img} />
        <Card title={Arr[1].title} desc={Arr[1].desc} img={Arr[1].img} />
        <Card title={Arr[2].title} desc={Arr[2].desc} img={Arr[2].img} />
        <Card title={Arr[3].title} desc={Arr[3].desc} img={Arr[3].img} /> */}
        {/* 
 arr.map function always want return 
 */}
        {Arr.map(function (curelem, index) {
          return (
            <>
              <Card
                title={curelem.title}
                desc={curelem.desc}
                img={curelem.img}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default NetflixArr;
