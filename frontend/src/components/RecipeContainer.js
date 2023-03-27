import "./RecipeContainer.css";

const RecipeContainer = () => {
  return (
    <div className="upload-recipe-div">
      <img
        className="pexels-rodnae-productions-5737-icon"
        alt=""
        src="/pexelsrodnaeproductions5737464-1@2x.png"
      />
      <div className="right1">
        <div className="headline1">
          <b className="share-your-culinary-container">
            <p className="share-your-culinary">Share Your Culinary</p>
            <p className="share-your-culinary">Creativity:</p>
          </b>
          <div className="submit-your-favorite-container">
            <p className="share-your-culinary">{`Submit Your Favorite Recipes `}</p>
            <p className="share-your-culinary">
              and Become Part of Our Community!
            </p>
          </div>
        </div>
        <a href="/AddRecipe" className="AddRecipe1">
        <div className="btn-upload1">
          <img className="btn-upload-item" alt="" src="/ellipse-21.svg" />
          <div className="upload-my-own">{`Upload My Own Recipe >`}</div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default RecipeContainer;
