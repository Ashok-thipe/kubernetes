const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", async (req, res) => {
    const { name, email } = req.body;

    try {
        const response = await axios.post("http://backend:5000/submit", {
            name: name,
            email: email
        });

        res.send(response.data);
    } catch (error) {
        res.send("Error submitting data");
    }
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
