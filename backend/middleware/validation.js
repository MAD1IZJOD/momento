exports.validateEvent = (req, res, next) => {
  const { eventId } = req.body;
  if (!eventId || typeof eventId !== "string") {
    return res.status(400).json({ error: "Invalid event ID" });
  }
  next();
};