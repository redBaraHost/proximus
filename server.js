const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("PROX")); 

app.listen(process.env.PORT || 8080, "0.0.0.0");

