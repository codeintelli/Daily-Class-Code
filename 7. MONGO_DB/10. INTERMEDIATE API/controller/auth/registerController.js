import Joi from "joi";
import { REFRESH_SECURE } from "../../config/";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User, RefreshToken } from "../../model";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
const registerController = {
  async register(req, res, next) {
    // checklist for request
    //$$ VALIDATE THE REQUEST
    //$$ AUTHORIZE THE REQUEST
    //$$ CHECK IF USER IS IN THE DATABASE OR NOT
    //[] PREPARE A MODEL
    //[] STORE IN DATABASE
    //[] GENERATE THE JWT TOKEN
    //[] SEND RESPONSE

    // backend validation
    const validateRegister = Joi.object({
      name: Joi.string().required().min(3).max(30).messages({
        "string.base": "name should be a type text",
        "string.empty": "name cant be empty field",
        "string.min": `name should have minimum length of {3}`,
        "any.required": "name is required field",
      }),
      email: Joi.string().required().email(),
      password: Joi.string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      repeatPassword: Joi.ref("password"),
      role: Joi.string(),
    });

    console.log(req.body);
    const { error } = validateRegister.validate(req.body);

    if (error) {
      return next(error);
      // we can throw error from here but this can take only async function error but if we want to throw error in async also then we can use this statement otherwise use below statement
      // throw Error();
    }
    // [] CHECK IF USER IS IN THE DATABASE OR NOT
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExists("this email is already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // prepare the model
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password: hashedPassword, role });
    let result, accesstoken, refresh_token;
    try {
      result = await user.save();
      // token
      accesstoken = JwtService.sign({
        _id: result._id,
        role: result.role,
      });
      refresh_token = JwtService.sign(
        {
          _id: result._id,
          role: result.role,
        },
        "1y",
        REFRESH_SECURE
      );

      await RefreshToken.create({ token: refresh_token });
    } catch (err) {
      return next(err);
    }

    res
      .status(200)
      .send({ data: result, token: accesstoken, refresh_token: refresh_token });
  },
};
export default registerController;
