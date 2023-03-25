import LoginForm from "../components/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
      <div className="eat-save-share-container">
        <p className="eat">Eat</p>
        <p className="eat">Save</p>
        <p className="eat">Share</p>
        <p className="eat">Repeat!</p>
      </div>
    </div>
  );
};

export default Login;
