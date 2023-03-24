import HeroContainer from "../components/HeroContainer";
import BestMealBuddyContainer from "../components/BestMealBuddyContainer";
import RecipeContainer from "../components/RecipeContainer";
import ContactForm from "../components/ContactForm";
import "./Index.css";

const Index = () => {
  return (
    <div className="index1">
      <div className="nav-bar">
        <div className="btn-logo">
          <div className="btn-logo-child" />
          <a href="/" className="mealbuddy1">MealBuddy</a>
        </div>
        <div className="nav-items">
          <input className="search" type="text" placeholder="Search" />
          <a href="/login" className="login1">
            <div className="login2">Login</div>
          </a>
          <div className="hamburger">
            <div className="hamburger-child" />
            <div className="hamburger-item" />
            <div className="hamburger-child" />
          </div>
        </div>
      </div>
      <div className="main">
        <HeroContainer />
        <BestMealBuddyContainer />
        <RecipeContainer />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
