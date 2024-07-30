const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "users.json");

// Load initial data from JSON file
let users = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

// Authenticate user
const authenticateUser = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        res.json({ authenticated: true });
    } else {
        res.status(401).json({ authenticated: false });
    }
};

module.exports = {
    authenticateUser,
};
