const express = require("express");
const db = require("../db"); // Import PostgreSQL connection
const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new user
router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await db.one(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
