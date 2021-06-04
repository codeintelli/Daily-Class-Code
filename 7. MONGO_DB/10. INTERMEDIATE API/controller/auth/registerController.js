import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User } from "../../model";
import bcrypt from "bcrypt";
const registerController = {
  async register(req, res, next) {
    // checklist for request
    //[ + ] VALIDATE THE REQUEST
    //[ + ] AUTHORIZE THE REQUEST
    //[ + ] CHECK IF USER IS IN THE DATABASE OR NOT
    //[] PREPARE A MODEL
    //[] STORE IN DATABASE
    //[] GENERATE THE JWT TOKEN
    //[] SEND RESPONSE

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
    const { name, email, password } = req.body;
    const user = { name, email, password: hashedPassword };
    try {
      const result = await User.save();
    } catch (err) {
      return next(err);
    }

    res.status(200).send("data varified");
  },
};
export default registerController;
