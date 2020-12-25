const express = require('express');
const app = express();
const ejs = require("ejs");
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const { json } = require('express');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

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

app.get("/input", (req, res) => {
    res.render("input");
})

app.get("/notFound", (req, res) => {
    res.render("404");
});

app.get("/page/:num", (req, res) => {
    var page_number = req.params.num;       
    res.render("index", { data: json_data, num: parseInt(page_number) });
});

app.post("/page", (req, res) =>{
    console.log(req.body);
    org = req.body.org;
    repo = req.body.repo;
    fetch(`https://api.github.com/repos/${org}/${repo}/issues`)
    .then(response => response.json())
    .then(data => {
        json_data = data;
    })
    .catch(e => console.error(e));

    res.redirect('/');
})
    
app.get("/issue/:num", (req, res) => {
    var index = req.params.num;
    if (!json_data[index])
        res.redirect("/notFound");
    else
        res.render("issue", { issue: json_data[index], num: parseInt(index)});
});

app.get("*", (req, res) => {
    res.redirect("/notFound");
});

var port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Running at port ${port}`); });