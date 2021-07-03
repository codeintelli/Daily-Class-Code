import Arrdata from "./Arrdata";
import Card from "./Card";

/* 
map function in javascript

Array.map(callback(currentValue,index,array), thisValue);
This function have three arguments for the callback (currentValue, index, array)
currentValue -> required, the current element being processed in the array.
index -> Optional, the index of the current element being processed in the array.
array -> Optional, the array map was called upon.
And thisValue is to use as this when executing callback.

*/



function MapData() {
  return (
    <>
      <h1 className="heading_style">Top 5 netflix Series</h1>;
      {Arrdata.map((value, index) => {
        console.log(value);
        return (
          <Card
            key={value.id}
            // key={Math.random()}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        );
      })}
    </>
  );
}
export default MapData;
