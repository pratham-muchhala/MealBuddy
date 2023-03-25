import RegistrationForm from "../components/RegistrationForm";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <RegistrationForm />
      <div className="welcome-to-the-container">
        <p className="welcome">{`Welcome `}</p>
        <p className="welcome">to the</p>
        <p className="welcome">MealBuddy!</p>
      </div>
    </div>
  );
};

export default Register;
