const createError = require("http-errors");
const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    if (!user) {
      next(createError(400, "Try again!"));
    }
    user.password = undefined;
    res.status(201).send({ data: [user] });
  } catch (error) {
    next(error);
  }
};
