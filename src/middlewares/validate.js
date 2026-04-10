const Joi = require("joi");

const schoolSchema = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(5).required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

exports.validateSchool = (req, res, next) => {
  const { error } = schoolSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};