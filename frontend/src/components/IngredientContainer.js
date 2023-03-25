import { useMemo } from "react";
import "./IngredientContainer.css";

const IngredientContainer = ({ group1, propAlignItems }) => {
  const ingredientInputStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  return (
    <div className="ingredient-container">
      <div className="ingredient-input" style={ingredientInputStyle}>
        <div className="ingredient-11">Ingredient 1</div>
      </div>
      <div className="number-input">
        <div className="gm">Number</div>
      </div>
      <div className="number-input1">
        <div className="gm">gm</div>
        <img className="number-input-child" alt="" src={group1} />
      </div>
    </div>
  );
};

export default IngredientContainer;
