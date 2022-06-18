import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="Email"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="Password"
          className="loginInput"
          placeholder="ENter your password..."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">
          <Link className="link" to={"/register"}>
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
