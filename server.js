const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary DB (JSON file)
const USERS_FILE = "./users.json";

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function writeUsers(data) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));
}

// Register API
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  const users = readUsers();

  if (users.some(u => u.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  users.push({ name, email, password });
  writeUsers(users);

  res.json({ message: "Registration successful" });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
