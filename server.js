const express = require("express");
//const fs = require("fs");
const cors = require("cors");  // Ensures frontend can communicate with backend
const bodyParser = require("body-parser");
//const jsonfile = require("jsonfile")
//const { Low, JSONFile } = require('lowdb');
const app = express();
const PORT = 5000;
const filePath = "./database.json";

app.use(cors());  // Allows requests from React
app.use(bodyParser.json());  // Parses incoming JSON requests

const db = new Low(new JSONFile('db.json'));
db.data ||= { contacts: [] };

app.post("/save", async (req, res) => {
    console.log("Received data:", req.body);  // Check if data is coming from React

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "No data received" });
    }

    const { name, email, phone, message } = req.body;

    // Append new data to the in-memory object
    db.data.users.push({ name, email, phone, message });

    // Save the data to the file
    await db.write();

    res.json({ message: "Data saved successfully!", data: db.data });
   
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
