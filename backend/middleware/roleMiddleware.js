const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }
    next();
  };
};

module.exports = authorizeRole;
