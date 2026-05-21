const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/pokemon", (req, res) => {
  res.json({
    name: "Pikachu",
    type: "Electric",
    level: 5
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});