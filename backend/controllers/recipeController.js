const Recipe = require("../models/recipeModel")




//Create a new Recipe --Admin
exports.createRecipe = async (req,res,next) => {
    const recipe = await Recipe.create(req.body);

    res.status(201).json({
        success: true,
        recipe
    })
};


//Get all Recipe
exports.getAllRecipe = async (req,res)=>{

    const recipes = await Recipe.findById();

    res.status(200).json({
        success: true,
        recipes
    })
};


//Get Recipe Details
exports.getRecipeDetails = async (req,res,next)=>{

    const recipe = await Recipe.findById(req.params.id);

    if(!recipe){
        return res.status(500).json({
            success: true,
            message: 'Recipe not found'
        });
    }

    res.status(200).json({
        success: true,
        recipe
    });
};



//Update a recipe --Admin
exports.updateRecipe = async (req,res,next)=>{

    let recipe = await Recipe.findById(req.params.id);

    if(!recipe){
        return res.status(500).json({
            success: false,
            message : "Recipe not found"
        });   
    }

    recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body,{
        runValidator : true,
        useFindAndModify : false 
    });

    res.status(200).json({
        success : true,
        recipe
    });
};


//Delete a recipe
exports.deleteRecipe = async (req, res, next) => {

    const recipe = await Recipe.findById(req.params.id);

    if(!recipe){
        return res.status(500).json({
            success : false,
            message : "Recipe not found"
        })
    }

    await recipe.remove();

    res.status(200).json({
        success : true,
        message : "recipe deleted successfully."
    })
};
