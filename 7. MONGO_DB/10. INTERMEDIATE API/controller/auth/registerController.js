import Joi from "joi";

const registerController = {
  register(req, res, next) {
    // checklist for request
    //[] VALIDATE THE REQUEST
    //[] AUTHORIZE THE REQUEST
    //[] CHECK IF USER IS IN THE DATABASE OR NOT
    //[] PREPARE A MODEL
    //[] STORE IN DATABASE
    //[] GENERATE THE JWT TOKEN
    //[] SEND RESPONSE

    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeatPassword: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
  },
};

export default registerController;
