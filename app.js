// ================================
// *            REQUIRE
// ================================

const express = require("express");
const app = express();

const { projects } = require("./data.json");

// ================================
// *          MIDDLEWARE
// ================================

app.use("/static", express.static("public"));
app.set("view engine", "pug");

// ================================
// *            ROUTES
// ================================

app.get("/", (req, res) => {
    res.render("index", { projects: projects });
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/project", (req, res) => {
    res.redirect("/");
});
app.get("/project/:id", (req, res, next) => {
    const id = req.params.id;
    if (id >= 0 && id <= 4) {
        res.locals.project = projects[id];
        res.render("project");
    } else {
        const err = new Error("I don't have that much projects yet...");
        err.status = 404;
        next(err);
    }
});

app.use((req, res, next) => {
    const err = new Error("Look elsewhere, there's nothing here");
    err.status = 404;
    next(err);
});

// ================================
// *       ERROR HANDLER
// ================================

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status);
    res.render("error", { err });
    next();
});
// ================================
// *            START
// ================================
app.listen(3000, () => {
    console.log("the application is running on localhost:3000");
});
