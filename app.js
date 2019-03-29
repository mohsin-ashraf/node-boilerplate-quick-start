const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index");
});

// Handling Invalid Requests.
app.use((req, res) => {
  res.json({
    error: "page not found"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
