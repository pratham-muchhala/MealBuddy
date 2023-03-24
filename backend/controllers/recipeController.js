const catchAsyncError = require('../middleware/catchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');
const axios = require('axios');



exports.getAllRecipes = catchAsyncError(async (req, res, next) => {

    let { query } = req.body;

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    axios.get('https://api.edamam.com/api/recipes/v2', {
        params: {
            type: 'public',
            q: query,
            app_id: '07a1c426',
            app_key: 'abcfc53d8328c80fb34db2d6a5047271'
        }
    }).then(function (response) {

        let recipes = [];
        let recipe = {}
        for (let i = 0; i < 10; i++) {
            recipe = {
                label: response.data.hits[i].recipe.label,
                image: response.data.hits[i].recipe.image,
                source: response.data.hits[i].recipe.source,
                url: response.data.hits[i].recipe.url,
                ingredientLines: response.data.hits[i].recipe.ingredientLines
            }
            recipes.push(recipe);
        }

        res.status(201).json({
            success: true,
            recipes
        })
    }).catch(function (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            error:error
        })
    })

    // res.status(201).json({
    //     success: true,
    //     query
    // })

});


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