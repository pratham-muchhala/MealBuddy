const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { getAllRecipes } = require('../controllers/recipeController');


// creating router
const router = express.Router();

router.get('/getall', isAuthenticatedUser, getAllRecipes);


module.exports = router;
