import { User } from "../../model/index";
import CustomErrorHandler from "../../services/CustomErrorHandler";
const userController = {
  async me(req, res, next) {
    try {
      console.log("1");
      const user = await User.findOne({ _id: req.user._id }).select({
        password: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      });
      console.log("2");
      if (!user) {
        return next(CustomErrorHandler.UserNotFound());
      }
      console.log("3");
      res.json(user);
    } catch (err) {
      return next(err);
    }
  },
};
export default userController;
