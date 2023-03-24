import "./RecipeCard.css";

const RecipeCard = (props) => {
    return (
        <div className="result-card">
            <div className="left1">
                <div className="margherita">{props.label}</div>
                <div className="div2">
                    <div className="text">
                        <div className="prep-time">
                            <div className="preparation-time">Preparation time:</div>
                            <i className="min">30 min.</i>
                        </div>
                        <div className="prep-time">
                            <div className="preparation-time">Ingredients:</div>
                            <i className="pizza-dough-mozzarella">
                                Pizza dough, mozzarella cheese, olive oil, sugar...
                            </i>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="view-recipe">
                            <div className="min">{`View Recipe >`}</div>
                        </div>
                        <div className="by-author1">
                            <div className="preparation-time">By:</div>
                            <i className="min">Pratham Muchhala</i>
                        </div>
                    </div>
                </div>
            </div>
            <img className="img-4334-1-icon1" alt="" src="/img-4334-1@2x.png" />
        </div>
    );
};

export default RecipeCard;
