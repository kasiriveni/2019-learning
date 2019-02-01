const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => console.log(`example running on port${port}`));
