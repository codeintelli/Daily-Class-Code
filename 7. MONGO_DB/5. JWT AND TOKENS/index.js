require("dotenv").config({ path: "./config.env" });
const jwt = require("jsonwebtoken");

const createToken = async () => {
  // jwt.sign generate the token
  console.log(process.env.SECRET_KEY);
  const token = await jwt.sign(
    { _id: "shiva_mahadev" },
    process.env.SECRET_KEY
  );
  console.log(token);
  // jwt.verify verify the tokens
  const verify = await jwt.verify(token, process.env.SECRET_KEY);
  console.log(verify);
};

createToken();
