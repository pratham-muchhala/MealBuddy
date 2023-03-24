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