const rateLimit = require("express-rate-limit");

// Limit to 10 uploads per minute per IP
exports.uploadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many uploads. Wait a minute.",
});