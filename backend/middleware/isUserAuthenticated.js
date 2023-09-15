// check for JWT token
// verify the token

const jwt = require("jsonwebtoken");
require("dotenv").config();

// Define a secret key for JWT verification (change this to your actual secret)
const secretKey = process.env.TOKEN_KEY;

function isUserAuthenticated(req, res, next) {
  // Get the token from the request headers
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // If the token is valid, you can access the decoded information
    // in subsequent middleware or routes using req.user
    req.user = decoded;

    // Proceed to the next middleware or route
    next();
  });
}

module.exports = isUserAuthenticated;
