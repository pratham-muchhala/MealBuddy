import RecipeDetailContainer from "../components/RecipeDetailContainer";
import "./Recipe.css";

const Recipe = () => {
  return (
    <div className="recipe">
      <div className="nav-bar1">
        <div className="btn-logo1">
          <div className="btn-logo-item" />
          <div className="mealbuddy2">MealBuddy</div>
        </div>
        <div className="nav-items1">
          <input className="search1" type="text" placeholder="Search" />
          <button className="login3">
            <div className="login4">Login</div>
          </button>
          <div className="hamburger1">
            <div className="line-div" />
            <div className="hamburger-child1" />
            <div className="line-div" />
          </div>
        </div>
      </div>
      <div className="main1">
        <RecipeDetailContainer />
        <img className="img-4334-1-icon" alt="" src="/img-4334-1@2x.png" />
      </div>
    </div>
  );
};

export default Recipe;
