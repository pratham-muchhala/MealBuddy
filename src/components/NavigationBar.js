import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="nav-bar3">
      <button className="btn-logo3">
        <div className="rectangle-div" />
        <div className="mealbuddy5">MealBuddy</div>
      </button>
      <div className="nav-items2">
        <input className="search3" type="text" placeholder="Search" />
        <button className="login5">
          <div className="login6">Login</div>
        </button>
        <div className="hamburger2">
          <div className="hamburger-child3" />
          <div className="hamburger-child4" />
          <div className="hamburger-child3" />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
