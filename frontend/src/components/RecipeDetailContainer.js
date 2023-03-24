import "./RecipeDetailContainer.css";

const RecipeDetailContainer = () => {
  return (
    <div className="left1">
      <div className="margherita">Margherita</div>
      <div className="by-author1">
        <div className="by-author2">
          <div className="preparation-time">By:</div>
          <i className="min">Pratham Muchhala</i>
        </div>
      </div>
      <div className="prep-time">
        <div className="prep-time1">
          <div className="preparation-time">Preparation time:</div>
          <i className="min">30 min.</i>
        </div>
      </div>
      <div className="ingredients-checklist">
        <div className="checked-ingredient">
          <div className="checkbox-material-design">
            <div className="checkbox-material-design1">
              <div className="box">
                <img className="box-child" alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
          <div className="min">Ingredient 1</div>
        </div>
        <div className="checked-ingredient">
          <div className="checkbox-material-design">
            <div className="checkbox-material-design3">
              <input className="shape" type="checkbox" />
            </div>
          </div>
          <div className="min">Ingredient 2</div>
        </div>
        <div className="checked-ingredient">
          <div className="checkbox-material-design">
            <div className="checkbox-material-design3">
              <input className="shape" type="checkbox" />
            </div>
          </div>
          <div className="min">Ingredient 3</div>
        </div>
        <div className="checked-ingredient">
          <div className="checkbox-material-design">
            <div className="checkbox-material-design3">
              <input className="shape" type="checkbox" />
            </div>
          </div>
          <div className="min">Ingredient 4</div>
        </div>
        <div className="checked-ingredient">
          <div className="checkbox-material-design">
            <div className="checkbox-material-design3">
              <input className="shape" type="checkbox" />
            </div>
          </div>
          <div className="min">Ingredient 5</div>
        </div>
      </div>
      <div className="method-div">
        <div className="method">Method</div>
        <div className="lorem-ipsum-dolor-container">
          <p className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque efficitur arcu, eget bibendum ligula bibendum posuere.
            Proin posuere bibendum varius. Suspendisse ullamcorper et nisi a
            aliquet. Fusce mi nisi, malesuada nec orci ut, congue pharetra ex.
            Etiam vitae commodo mauris. Nulla faucibus neque vitae dolor
            hendrerit ultrices. Sed egestas commodo diam nec hendrerit. Cras at
            lectus in odio rutrum pretium vel quis odio. Donec vulputate elit
            vitae lectus condimentum varius. Nullam sollicitudin elit in velit
            hendrerit, a sodales nunc pellentesque. Ut sit amet facilisis dui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailContainer;
