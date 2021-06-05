import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User } from "../../model";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
const loginController = {
  async login(req, res, next) {
    //   validation
    const loginValidation = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    console.log(req.body);
    const { error } = loginValidation.validate(req.body);

    if (error) {
      return next(error);
    }
    let accesstoken;
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      accesstoken = JwtService.sign({
        _id: user._id,
        role: user.role,
      });
    } catch (err) {
      return next(err);
    }
    res.status(200).json({ token: accesstoken, message: "login successfully" });
  },
};
export default loginController;
