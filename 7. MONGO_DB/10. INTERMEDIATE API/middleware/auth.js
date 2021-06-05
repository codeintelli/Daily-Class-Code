import CustomErrorHandler from "../services/CustomErrorHandler";
import JwtService from "../services/JwtService";

const auth = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return next(CustomErrorHandler.unAuthorized());
  }
  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const { _id, role } = await JwtService.verify(token);
    const user = {
      _id,
      role,
    };
    req.user = user;
    next();
    console.log("data");
  } catch (err) {
    return next(err);
  }
};

export default auth;
