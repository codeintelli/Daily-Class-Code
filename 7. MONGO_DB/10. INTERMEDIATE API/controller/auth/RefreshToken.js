import Joi from "joi";
import { REFRESH_SECURE } from "../../config/";
import { User, RefreshToken } from "../../model";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/JwtService";
const refreshToken = {
  async refresh(req, res, next) {
    //   validation
    const refreshValidation = Joi.object({
      refresh_token: Joi.string().required(),
    });
    console.log(req.body);
    const { error } = refreshValidation.validate(req.body);

    if (error) {
      return next(error);
    }

    // checking in database
    let refresh_token, userId, accesstoken;
    try {
      refresh_token = await RefreshToken.findOne({
        token: req.body.refresh_token,
      });
      console.log("sssssss " + refresh_token);
      if (!refresh_token) {
        return next(CustomErrorHandler.unAuthorized("Invalid Token"));
      }

      try {
        const { _id } = await JwtService.verify(
          refresh_token.token,
          REFRESH_SECURE
        );
        userId = _id;
        console.log(_id);
      } catch (err) {
        return next(CustomErrorHandler.unAuthorized("Invalid Token"));
      }
    } catch (err) {
      return next(CustomErrorHandler.unAuthorized("Invalid Token"));
    }
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return next(CustomErrorHandler.unAuthorized("No User FOund"));
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
    res.json({ message: "login successfully", refresh_token, accesstoken });
  },
};
export default refreshToken;
