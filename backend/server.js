// const express = require("express") // Common.js module
import express from "express" //ES6 modules

const app = express()
const PORT = process.env.PORT || 3000

// Routes - Endpoints - Behöver url + http-metod för att triggas
//Method GET
app.get("/", (req, res) => {
    //Det som triggas kallas för "routehandler"
    res.send("Hello from route '/'")
})

//Method POST
app.post("/whatever", (req, res) => {
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