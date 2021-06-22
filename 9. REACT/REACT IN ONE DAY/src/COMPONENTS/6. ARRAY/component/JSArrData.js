import Arrdata from "./Arrdata";
import Card from "./Card";


function ArrayData() {
  return (
    <>
      <h1 className="heading_style">Top 5 netflix Series</h1>
      <Card
        imgsrc={Arrdata[0].imgsrc}
        title={Arrdata[0].title}
        sname={Arrdata[0].sname}
        link={Arrdata[0].link}
      />

      <Card
        imgsrc={Arrdata[1].imgsrc}
        title={Arrdata[1].title}
        sname={Arrdata[1].sname}
        link={Arrdata[1].link}
      />
      <Card
        imgsrc={Arrdata[2].imgsrc}
        title={Arrdata[2].title}
        sname={Arrdata[2].sname}
        link={Arrdata[2].link}
      />
      <Card
        imgsrc={Arrdata[3].imgsrc}
        title={Arrdata[3].title}
        sname={Arrdata[3].sname}
        link={Arrdata[3].link}
      />
      <Card
        imgsrc={Arrdata[4].imgsrc}
        title={Arrdata[4].title}
        sname={Arrdata[4].sname}
        link={Arrdata[4].link}
      />
    </>
  );
}
export default ArrayData;
