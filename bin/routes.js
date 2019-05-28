const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const controller = require("./Controller");
app.use(bodyParser.json());


app.get("/", (req, resp)=>{
    res.send("My Music v1")
})

app.get("/users", (req, resp)=>{
    controller.getUsers(req, resp);
})

exports.app = app