// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // Allow all origins (or specify your React URL)

// Endpoint to get hotels
app.get("/api/hotels", async (req, res) => {
  try {
    const response = await axios.get(
      "https://data.xotelo.com/api/list?location_key=g297930&offset=0&limit=30&sort=best_value"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
