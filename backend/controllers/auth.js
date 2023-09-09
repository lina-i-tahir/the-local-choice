const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.signUp = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await User.create({ firstName, lastName, email, password });
      res
        .status(201)
        .json({ message: "User signed up successfully", success: true, user });
    } catch (error) {
      console.error(error);
    }
  };