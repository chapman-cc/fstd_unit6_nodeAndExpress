// ================================
// *            REQUIRE
// ================================

const express = require("express");
const app = express();

const data = require("./data.json");

// ================================
// *          MIDDLEWARE
// ================================

app.set("view engine", "pug");
app.use("/static", express.static("public"));

// ================================
// *            ROUTES
// ================================

app.get("/", (req, res) => {
    res.render("index")
});
app.get("/about", (req, res) => {
    res.render("about")
});

// TODO: project or projects, need to be dynamic
app.get("/project/:id", (req, res) => {
    res.render("project")
});

// TODO: HANDLE ERROR 404
// ================================
// *            START
// ================================
app.listen(3000, () => {
    console.log("the application is running on localhost:3000");
});
