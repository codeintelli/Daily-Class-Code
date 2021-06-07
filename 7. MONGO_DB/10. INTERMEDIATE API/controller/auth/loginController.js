import Joi from "joi";
import { REFRESH_SECURE } from "../../config/";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User, RefreshToken } from "../../model";
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
    let accesstoken, refresh_token;
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
      refresh_token = JwtService.sign(
        {
          _id: user._id,
          role: user.role,
        },
        "1y",
        REFRESH_SECURE
      );

      await RefreshToken.create({ token: refresh_token });
    } catch (err) {
      return next(err);
    }
    res.status(200).json({
      token: accesstoken,
      message: "login successfully",
      refresh_token: refresh_token,
    });
  },

  async logout(req, res, next) {
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });
    const { error } = refreshSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    try {
      const data = await RefreshToken.deleteOne({
        token: req.body.refresh_token,
      });
    } catch (Err) {
      return next(
        new Error("something went wrong in the database" + err.message)
      );
    }
    res.json({ message: "logout successfully" });
  },
};
export default loginController;
