import RecipeRow from "./RecipeRow";
import "./BestMealBuddyContainer.css";

const BestMealBuddyContainer = () => {
  return (
    <div className="main-best-div">
      <b className="best-of-mealbuddy">Best of MealBuddy</b>
      <div className="best-container">
        <RecipeRow ratings="3.4/5" recipeOwner="Pratham Muchhala" />
        <RecipeRow ratings="3.4/5" recipeOwner="Pratham Muchhala" />
      </div>
    </div>
  );
};

export default BestMealBuddyContainer;
