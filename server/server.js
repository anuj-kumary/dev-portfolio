const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();
const authRoutes = require("./authRoutes");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", authRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
