const express = require('express');
const { getAllRecipe,createRecipe, updateRecipe, deleteRecipe, getRecipeDetails } = require('../controllers/recipeController');

const router = express.Router();

router.route("/recipes").get(getAllRecipe);

router.route("/recipe/new").post(createRecipe);

router.route("/recipe/:id").get(getRecipeDetails);

router.route("/recipe/:id").put(updateRecipe);

router.route("/recipe/:id").delete(deleteRecipe);





module.exports = router; 