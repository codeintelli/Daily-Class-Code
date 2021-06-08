import { User } from "../model";
import CustomErrorHandler from "../services/CustomErrorHandler";

const admin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    if (user.role === "admin") {
      next();
    } else {
      return next(CustomErrorHandler.unAuthorized());
    }
  } catch (err) {
    return next(CustomErrorHandler.ServerError());
  }
};
export default admin;
