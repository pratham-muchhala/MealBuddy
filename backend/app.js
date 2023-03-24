const express = require('express');

const app = express();

app.use(express.json());



//Route Imports
const recipe = require("./routes/recipeRoute");

app.use("/api/mealbuddy",recipe);



module.exports = app
