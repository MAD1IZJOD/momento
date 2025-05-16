const express = require("express");
const router = express.Router();
const FileController = require("../controllers/FileController");
const { validateAuth } = require("../middleware/auth");

router.post("/upload", validateAuth, async (req, res) => {
  try {
    const { eventId } = req.query;
    const fileKey = await FileController.uploadToS3(req.files.photo, eventId);
    res.json({ success: true, url: fileKey });
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;