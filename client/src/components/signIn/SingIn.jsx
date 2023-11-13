import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitLogin = async () => {
    console.log(email, password);
    let data = await fetch("http://localhost:3000/api/singin");
    let result = await data.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="button" className="btn" onClick={submitLogin}>
            Login
          </button>
          <div className="register-link">
            <p>
              Dont`t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
