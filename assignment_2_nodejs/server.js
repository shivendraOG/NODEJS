const os = require("os");
const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS middleware
app.use(cors());

app.get("/api/os", (req, res) => {
  try {
    const info = {
      platform: os.platform(),
      arch: os.arch(),
      user: os.userInfo(),
      totalmem: os.totalmem(),
      freemem: os.freemem(),
      uptime: os.uptime(),
      cpus: os.cpus(),
    };

    res.json(info);
  } catch (err) {
    console.error("Failed to get OS info", err);
    res.status(500).json({ error: "Failed to get OS info" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`OS API server listening on http://localhost:${PORT}`)
);
