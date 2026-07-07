const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    fs.readdir("./file", (err, files) => {
        if (err) return res.status(500).send(err.message);

        res.render("index", { files });
    });
});

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./file/${req.params.filename}`, "utf-8", (err, filedata) => {
        if (err) return res.status(404).send("File not found");

        res.render('show', {filename : req.params.filename , filedata : filedata});
    });
});

app.post('/create', (req, res) => {
    fs.writeFile(
        `./file/${req.body.title.split(" ").join("")}`,
        req.body.details,
        (err) => {
            if (err) return res.status(500).send(err.message);

            res.redirect("/");
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});