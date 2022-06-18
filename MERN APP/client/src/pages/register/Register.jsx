import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="Email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="Password"
          className="registerInput"
          placeholder="ENter your password..."
        />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton">
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
