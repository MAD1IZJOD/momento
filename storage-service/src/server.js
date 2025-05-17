const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());

// Routes
app.use("/files", require("./routes/files"));
app.use("/shares", require("./routes/shares"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Storage service running on ${PORT}`));