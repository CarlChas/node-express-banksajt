// const express = require("express") // Common.js module
import express from "express" //ES6 modules

const app = express()
const PORT = process.env.PORT || 3000

// Routes - Endpoints - Behöver url + http-metod för att triggas
app.get("/", (req, res) => {
    //Det som triggas kallas för "routehandler"
    res.send("Hello from route '/'")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})