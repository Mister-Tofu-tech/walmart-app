const express = require('express');
const app = express();
const ejs = require("ejs");
const fetch = require('node-fetch');
const { json } = require('express');

// Fetch json data and store it in json_data
var json_data;
var org = "walmartlabs", repo = "thorax";
fetch(`https://api.github.com/repos/${org}/${repo}/issues`)
    .then(response => response.json())
    .then(data => {
        json_data = data;
    })
    .catch(e => console.error(e));

// Declare the public folder that we need
app.use(express.static("public"));
// Set Up template engine ejs
app.set("view engine", "ejs");

// Each route for the browser
app.get("/", (req, res) => {
    res.render("index", { data: json_data, num: 1 });
});


app.get("/:num", (req, res) => {
    var page_number = req.params.num;
    res.render("index", { data: json_data, num: page_number });
});
    
app.get("/issue/:num", (req, res) => {
    var page_number = req.params.num;
    res.render("issue", { issue: json_data[page_number], num: page_number});
});

var port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Running at port ${port}`); });