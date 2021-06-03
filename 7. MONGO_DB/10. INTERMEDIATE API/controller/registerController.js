import Joi from "joi";
const registerController = {
  async register(req, res, next) {
    // checklist for request
    //[] VALIDATE THE REQUEST
    //[] AUTHORIZE THE REQUEST
    //[] CHECK IF USER IS IN THE DATABASE OR NOT
    //[] PREPARE A MODEL
    //[] STORE IN DATABASE
    //[] GENERATE THE JWT TOKEN
    //[] SEND RESPONSE
    console.log("hiie");

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
    console.log("req");
    if (error) {
      return next(error);
      // we can throw error from here but this can take only async function error but if we want to throw error in async also then we can use this statement otherwise use below statement
      // throw Error();
    }
    res.status(200).send("data varified");
  },
};
export default registerController;
