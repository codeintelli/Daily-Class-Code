import NetflixData from "./netflixelse";
import Amazon from "./amazon";

let favseries = "netflix";

const Ternary = () => {
  return (
    <>
      <h1 className="heading_style">Top 5 netflix Series</h1>
      {favseries === "netflix" ? <NetflixData /> : <Amazon />}
    </>
  );
};
export default Ternary;
