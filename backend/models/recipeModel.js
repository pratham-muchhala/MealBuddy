const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({

    name:{
        type : String,
        required: [true, "Please enter a Recipe name."]
    },
    description : {
        type : String,
        required: [true, "Please enter a Recipe Description."]
    },
    ingredients: {
        type : Array,
        required: [true, "Please enter a ingredients of Recipe."]
    },
    time : {
        type : Number
    },
    images : [
        {
            public_id : {
                type : String,
                required: true
            },
            url : {
                type : String,
                required: true
            }
        }
    ],
    numOfReview : {
        type : Number,
        default : 0
    },
    reviews : [
        {
            name : {
                type : String,
                required : true
            },
            rating : {
                type : Number,
                required : true
            },
            comment : {
                type : String,
            },
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    },
});



module.exports = mongoose.model("Recipe",recipeSchema);