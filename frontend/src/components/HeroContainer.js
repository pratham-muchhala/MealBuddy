import "./HeroContainer.css";

const HeroContainer = () => {
  return (
    <div className="header-generator-div">
      <div className="left">
        <div className="headline">
          <b className="stop-wasting-food-container">
            <p className="stop-wasting">Stop Wasting</p>
            <p className="stop-wasting">Food:</p>
          </b>
          <div className="get-personalized-recipe-container">
            <p className="stop-wasting">
              Get Personalized Recipe Recommendations
            </p>
            <p className="stop-wasting">Based on Your Ingredients</p>
          </div>
        </div>
        <button className="btn-upload">
          <img className="btn-upload-child" alt="" src="/ellipse-2.svg" />
          <div className="generate-recipe">{`Generate Recipe >`}</div>
        </button>
      </div>
      <img className="header-img-icon" alt="" src="/headerimg@2x.png" />
    </div>
  );
};

export default HeroContainer;
