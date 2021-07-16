import React from "react";

const Index = () => {
  {
    /* case 1: */
  }
  const fullname = ["Nimsha", "Anjali", "Karishma", "Rinkal"];
  const bioData = ["my friend name is", ...fullname];
  const bioData2 = ["my friend name is", fullname];
  console.log("with Spread Operator", bioData);
  console.log("without Spread Operator", bioData2);
  // case 2:-

  const shootingGame = ["GTA5", "PUBG", "FARCRY"];
  const racingGame = ["Nfs", "asphalt", "nfs2"];

  const collectionGame2 = shootingGame + racingGame;
  const collectionGame = [...shootingGame, ...racingGame];
  var [firstname, secondname, ...remaining] = collectionGame;
  console.log(collectionGame[1], collectionGame[0]);
  console.log("firstname", remaining);
  // console.log(collectionGame2);

  const circle = { Radius: "10" };
  const coloredCircle = { ...circle, color: "black" };
  console.log(coloredCircle);

  let RegistrationUser = {
    fname: "shiva",
    lname: "mahadev",
  };
  let finalResult = {
    email: "shiva@gmail.com",
    ...RegistrationUser,
  };
  console.log(finalResult);

  return <></>;
};

export default Index;
