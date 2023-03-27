const express = require('express');
<<<<<<< Updated upstream
=======
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
>>>>>>> Stashed changes
const { getAllRecipe,createRecipe, updateRecipe, deleteRecipe, getRecipeDetails } = require('../controllers/recipeController');

const router = express.Router();

<<<<<<< Updated upstream
router.route("/recipes").get(getAllRecipe);

router.route("/recipe/new").post(createRecipe);

router.route("/recipe/:id").get(getRecipeDetails);

router.route("/recipe/:id").put(updateRecipe);

router.route("/recipe/:id").delete(deleteRecipe);
=======
// router.get('/getallrecipe', isAuthenticatedUser, getAllRecipes);
>>>>>>> Stashed changes

router.route("/getallrecipe").get(getAllRecipe);

router.route("/recipe/new").post(createRecipe);

router.route("/recipe/:id").get(getRecipeDetails);

router.route("/recipe/:id").put(updateRecipe);

router.route("/recipe/:id").delete(deleteRecipe);




module.exports = router; 