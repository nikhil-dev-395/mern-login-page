import "./SingUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendDataToBackend = async () => {
    console.log(name, email, password);
    try {
      let data = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await data.json();
      console.log(result);
      if (result) {
        navigate("/");
      }
      if (result.exists) {
        alert("this user is already exist");
      } else {
        alert("this user is not existed you can proceed");
      }
    } catch (error) {
      console.log("error occurred at signup in client", error);
    }
  };

  return (
    <>
      <>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="name"
                id=""
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="email"
                id=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button type="type" className="btn" onClick={sendDataToBackend}>
              SingUp
            </button>
            <div className="register-link">
              <p>
                you already have an account? <Link to="/login">login</Link>
              </p>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default SingUp;
