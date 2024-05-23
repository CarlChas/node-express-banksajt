// const express = require("express") // Common.js module
import express from "express" //ES6 modules
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes - Endpoints - Behöver url + http-metod för att triggas
//Method GET
app.get("/whatever", (req, res) => {
    //Det som triggas kallas för "routehandler"
    res.send("Hello from route '/'")
})

//Method POST
app.post("/whatever", (req, res) => {

    const { a, b } = req.body

    res.send("A POST-request")
})

//Method PUT
app.put("/whatever", (req, res) => {
    res.send("A PUT-request")
})

//Method DELETE
app.delete("/whatever", (req, res) => {
    res.send("A DELETE-request")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})