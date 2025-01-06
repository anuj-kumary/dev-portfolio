const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const sendEmailRoutes = require("./routes/sendEmailRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/send-email",sendEmailRoutes);
app.get("/", (_req, res) => {
  res.status(200).json({ message: `Server is running on port ${PORT}` });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
