const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res
      .status(500)
      .json({
        message:
          "Authentication error: You must be logged in to access this resource.",
      });
  }
  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err)
      res
        .status(500)
        .json({
          message: "Token verification failed: Invalid or expired token.",
        });
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res
        .status(500)
        .json({
          message:
            "Access denied. You must be logged in as a user to perform this action.",
        });
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(500)
        .json({
          message:
            "Access denied. You must be an admin to perform this action.",
        });
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
