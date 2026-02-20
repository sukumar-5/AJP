const express = require("express");
const app = express();

app.use(express.json());

app.get('/Add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide valid numbers" });
    }

    res.json({ operation: "Addition", num1, num2, result: num1 + num2 });
});

app.get('/Subtract', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide valid numbers" });
    }

    res.json({ operation: "Subtraction", num1, num2, result: num1 - num2 });
});

app.get('/Multiplication', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide valid numbers" });
    }

    res.json({ operation: "Multiplication", num1, num2, result: num1 * num2 });
});

app.get('/Division', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide valid numbers" });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    res.json({ operation: "Division", num1, num2, result: num1 / num2 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express REST API running on http://localhost:${port}`);
});   