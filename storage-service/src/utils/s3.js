const AWS = require("aws-sdk");

exports.uploadToS3 = async (buffer, key) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: "image/jpeg",
  };
  return s3.upload(params).promise();
};