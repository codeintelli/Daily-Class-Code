import Joi from "joi";

const ProductValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  size: Joi.string().required(),
  image: Joi.string(),
});

export default ProductValidator;
