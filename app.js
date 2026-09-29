const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, This is from Rohan Kumar Mandal as Ethical Hacker, Learning and Implementing GitHub Actions CI/CD!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
