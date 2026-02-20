const express = require("express")

const app = express()

app.use(express.json())

app.get('/RESTapi', (req, res) => {
    res.json({ message: "hello " })
})

app.get('/about', (req, res) => {
    res.json({ message: "This is the about page" })
})

app.get('/users', (req, res) => {
    res.json({ message: "List of users" })
})

app.get('/products', (req, res) => {
    res.json({ message: "List of products" })
})

app.get('/contact', (req, res) => {
    res.json({ message: "Contact us page" })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Express Rest api running on http://localhost:${port}`)
})