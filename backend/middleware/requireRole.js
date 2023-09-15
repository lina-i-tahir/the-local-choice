function requireRole(requiredRole) {
    return function (req, res, next) {
      if (req.user && req.user.role === requiredRole) {
        next(); // role is correct, proceed to the next middleware
      } else {
        res.status(403).json({ message: "Forbidden: Insufficient permissions" });
      }
    };
}

module.exports = requireRole;