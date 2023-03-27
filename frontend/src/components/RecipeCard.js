import "./RecipeCard.css";
const axios = require('axios');

const RecipeCard = (props) => {
    axios.get('http://localhost:3030/recipe/recipe/:id', {
    params : { id: props}
    }).then(function (result) {
        for (let i = 0; i < 10; i++) {
        console.log(i)
            setRecipes([...recipes, {
            name: result.data.hits[i].recipe.name,
            description: result.data.hits[i].recipe.description,
            ingredients: result.data.hits[i].recipe.ingredients,
            public_id: result.data.hits[i].recipe.public_id,
            url: result.data.hits[i].recipe.url
            }])
    }

    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div className="result-card">
            <div className="left1">
                <div className="margherita">{props.name}</div>
                <div className="div2">
                    <div className="text">
                        <div className="prep-time">
                            <div className="preparation-time">Ingredients:</div>
                            <i className="pizza-dough-mozzarella">
                                {props.ingredients}
                            </i>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="view-recipe">
                            <a href={props.description} className="min">{`View Recipe Description >`}</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="img-4334-1-icon1" alt="" src={props.url} />
        </div>
    );
};

export default RecipeCard;
