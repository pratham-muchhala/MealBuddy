import IngredientContainer from "./IngredientContainer";
import "./RecipeFormContainer.css";

const RecipeFormContainer = () => {
  return (
    <div className="content1">
      <b className="give-your-recipe">Add Recipe</b>
      <div className="input-title">
        <div className="recipe-title-input">
          <div className="give-your-recipe">Give your recipe a title</div>
        </div>
      </div>
      <div className="ingredients-div">
        <b className="add-ingredients">Add Ingredients</b>
        <div className="add-all">
          <div className="ingredients-container">
            <IngredientContainer group1="/group-1.svg" />
            <IngredientContainer
              group1="/group-11.svg"
              propAlignItems="flex-start"
            />
            <IngredientContainer
              group1="/group-11.svg"
              propAlignItems="flex-start"
            />
          </div>
          <div className="plus">
            <div className="plus-child" />
            <img className="plus-item" alt="" src="/group-3.svg" />
            <div className="plus-child" />
          </div>
        </div>
      </div>
      <div className="method-div1">
        <b className="add-method">Add Method</b>
        <div className="input-description">
          <div className="give-your-recipe">
            Describe the steps to prepare the dish.
          </div>
        </div>
      </div>
      <div className="upload-container-wrapper">
        <div className="upload-container">
          <div className="upload-picture">Upload Picture</div>
          <div className="btn-select-file">
            <div className="select-file">Select File</div>
          </div>
        </div>
      </div>
      <div className="btn-upload-recipe-wrapper">
        <div className="btn-upload-recipe">
          <div className="select-file">Upload Recipe</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFormContainer;
