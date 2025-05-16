const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

exports.compressAndSave = async (filePath) => {
  const outputPath = path.join(__dirname, "../temp/compressed.jpg");
  await sharp(filePath)
    .resize(800)
    .jpeg({ quality: 70 })
    .toFile(outputPath);
  return outputPath;
};