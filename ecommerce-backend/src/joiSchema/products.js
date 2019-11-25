import Joi from "joi";

const schemas = {
  productDetail: Joi.object().keys({
    product_id: Joi.number().required()
  })
};

module.exports = schemas;
