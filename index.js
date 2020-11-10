const express = require('express');
const app = express();
const ejs = require("ejs");
const fetch = require('node-fetch');
const { json } = require('express');

var json_data;
fetch('https://api.github.com/repos/walmartlabs/thorax/issues')
    .then(response => response.json())
    .then(data => {
        json_data = data;
    })
    .catch(e => console.error(e));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    var page_num = json_data.length / 10;
    console.log(page_num);
    res.render("index", { data: json_data, num: 1});
})

app.get("/:num", (req, res) => {
    res.render("index", { data: json_data, num: req.params.num });
})

app.listen(5000, () => {
    console.log("App listening at 5000!!");
});