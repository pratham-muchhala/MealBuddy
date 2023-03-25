import BestCard from "./BestCard";
import "./RecipeRow.css";

const RecipeRow = ({ ratings, prathamMuchhala, recipeOwner }) => {
  return (
    <div className="best-row">
      <BestCard
        img="/img@2x.png"
        recipeName="Recipe Name"
        ratings={ratings}
        recipeOwner={recipeOwner}
      />
      <BestCard
        img="/img@2x.png"
        recipeName="Recipe Name"
        ratings={ratings}
        recipeOwner={recipeOwner}
        btnViewBoxSizing="border-box"
        cTABoxSizing="border-box"
        yesDisplay="inline-block"
      />
      <BestCard
        img="/img@2x.png"
        recipeName="Recipe Name"
        ratings={ratings}
        recipeOwner={recipeOwner}
        btnViewBoxSizing="border-box"
        cTABoxSizing="border-box"
        yesDisplay="inline-block"
      />
    </div>
  );
};

export default RecipeRow;
