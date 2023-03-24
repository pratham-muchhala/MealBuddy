import RecipeFormContainer from "../components/RecipeFormContainer";
import "./AddRecipe.css";

const AddRecipe = () => {
  return (
    <div className="add-recipe">
      <div className="nav-bar2">
        <div className="btn-logo2">
          <div className="btn-logo-inner" />
          <div className="mealbuddy3">MealBuddy</div>
        </div>
        <div className="nav-items2">
          <input className="search2" type="text" placeholder="Search" />
          <button className="login5">
            <div className="login6">Login</div>
          </button>
          <div className="hamburger2">
            <div className="hamburger-child3" />
            <div className="hamburger-child4" />
            <div className="hamburger-child3" />
          </div>
        </div>
      </div>
      <button className="secondary">
        <div className="no1">Back</div>
      </button>
      <RecipeFormContainer />
    </div>
  );
};

export default AddRecipe;
