import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="footer">
      <div className="content-above-divider">
        <div className="contacts">
          <div className="div1">+91 70217 65902</div>
          <div className="supportpersonalcom">support@mealbuddy.com</div>
        </div>
        <div className="quick-link">
          <div className="quick-links">Quick Links</div>
          <div className="meal-planner-parent">
            <div className="meal-planner">Meal Planner</div>
            <div className="employee-database">Best Of Meal Buddy</div>
            <div className="profile">Profile</div>
            <div className="upload-recipe">Upload Recipe</div>
          </div>
          <div className="quick-link-child" />
        </div>
        <div className="subscribe">
          <div className="subscribe1">Subscribe</div>
          <input
            className="get-updates"
            type="text"
            placeholder="Get recipe updates"
          />
        </div>
      </div>
      <div className="divider" />
      <div className="content-under-divider">
        <img className="social-links-icon" alt="" src="/social-links.svg" />
        <div className="product-of-wrapper">
          <div className="product-of">
            <span>{`A product of `}</span>
            <span className="mealbuddy5">MealBuddy</span>
          </div>
        </div>
        <div className="pricing-wrapper">
          <div className="product-of">
            © 2023 MealBuddy. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
