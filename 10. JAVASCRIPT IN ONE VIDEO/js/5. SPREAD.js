// * SPARSE OPERATOR

// case1:
  const fullname = ["shiva", "sankar"];
  const biodata = [1, ...fullname, 23, "male"];
  console.log(fullname);
  console.log(biodata);
  // case2:
  const shootingGame = [
    "GTA5",
    "FARCRY",
    "PUBG",
    "RECEDENTI EVIL",
    "FAUJI",
    "FREE FIRE",
  ];
  const RacingGame = ["NFS PAYBACK", "ASPHALT 8", "ASPHALT 9", "MOTOGP"];
  const collection_game = [...shootingGame, ...RacingGame];
  console.log(collection_game);
// case3:
  const shootingGame = [
    "GTA5",
    "FARCRY",
    "PUBG",
    "RECEDENTI EVIL",
    "FAUJI",
    "FREE FIRE",
  ];
  var [firstname, secondname, ...remaining] = shootingGame;
  console.log("first Name      ", firstname);
  console.log("second Name      ", secondname);
  console.log("remaining     ", remaining);


  let demo = {
    fname: "shiva",
    lname: "sankar",
  };
  let final = {
    id: 23,
    ...demo,
    age: 34,
    gender: "male",
  };
  console.log(final);
};
