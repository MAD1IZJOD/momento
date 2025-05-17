const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

router.get("/:eventId", async (req, res) => {
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Prefix: `events/${req.params.eventId}/`,
      Expires: 3600, // 1-hour accessible link
    };
    
    const url = await s3.getSignedUrlPromise("listObjectsV2", params);
    res.json({ url });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate share link" });
  }
});

module.exports = router;