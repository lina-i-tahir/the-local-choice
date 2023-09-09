require("dotenv").config();
const jwt = require("jsonwebtoken");
const {createSecretToken} = require("../utils/SecretToken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "1m",
  });
};
