const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "public", "users.json");

let users = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

const authenticateUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
};

module.exports = {
  authenticateUser,
};
