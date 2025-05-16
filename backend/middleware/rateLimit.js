const rateLimit = require("express-rate-limit");

// Limit API calls to 100/hour per IP
exports.apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: "Too many requests. Try again in an hour.",
});