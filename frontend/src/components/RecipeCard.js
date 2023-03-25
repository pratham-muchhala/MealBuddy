import "./RecipeCard.css";

const RecipeCard = (props) => {
    return (
        <div className="result-card">
            <div className="left1">
                <div className="margherita">{props.label}</div>
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
                            <a href={props.recipeUrl} className="min">{`View Recipe >`}</a>
                        </div>
                        <div className="by-author1">
                            <div className="preparation-time">By:</div>
                            <i className="min">{props.source}</i>
                        </div>
                    </div>
                </div>
            </div>
            <img className="img-4334-1-icon1" alt="" src={props.img} />
        </div>
    );
};

export default RecipeCard;
