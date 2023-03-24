import { useMemo } from "react";
import "./BestCard.css";

const BestCard = ({
  img,
  recipeName,
  ratings,
  recipeOwner,
  btnViewBoxSizing,
  cTABoxSizing,
  yesDisplay,
}) => {
  const btnViewStyle = useMemo(() => {
    return {
      boxSizing: btnViewBoxSizing,
    };
  }, [btnViewBoxSizing]);

  const cTAStyle = useMemo(() => {
    return {
      boxSizing: cTABoxSizing,
    };
  }, [cTABoxSizing]);

  const yesStyle = useMemo(() => {
    return {
      display: yesDisplay,
    };
  }, [yesDisplay]);

  return (
    <div className="best-card">
      <div className="content">
        <div className="img-and-name">
          <img className="img-icon" alt="" src={img} />
          <div className="recipe-name">{recipeName}</div>
        </div>
        <div className="rating-and-by">
          <div className="rating">
            <div className="rating1">Rating:</div>
            <div className="div">{ratings}</div>
          </div>
          <div className="by-author">
            <div className="by">By</div>
            <div className="pratham-muchhala">{recipeOwner}</div>
          </div>
        </div>
        <div className="btn-view" style={btnViewStyle}>
          <button className="cta" style={cTAStyle}>
            <div className="yes2" style={yesStyle}>{`View Recipe >`}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCard;
