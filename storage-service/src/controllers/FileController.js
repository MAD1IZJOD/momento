const AWS = require("aws-sdk");
const sharp = require("sharp");
const s3 = new AWS.S3();
const admin = require("firebase-admin");
admin.initializeApp();

class FileController {
  // Upload to AWS S3
  async uploadToS3(file, eventId) {
    const compressed = await sharp(file.buffer).jpeg({ quality: 70 }).toBuffer();
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: `events/${eventId}/${Date.now()}.jpg`,
      Body: compressed,
      ContentType: "image/jpeg",
    };
    await s3.upload(params).promise();
    return params.Key;
  }

  // Upload to Firebase Storage
  async uploadToFirebase(file, eventId) {
    const bucket = admin.storage().bucket();
    const fileName = `events/${eventId}/${Date.now()}.jpg`;
    const fileRef = bucket.file(fileName);
    await fileRef.save(file.buffer);
    return fileName;
  }
}

module.exports = new FileController();
