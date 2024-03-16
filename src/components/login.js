import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setEmail }) => {
  // Destructure setEmail from props
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: emailInput,
      password: password,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          console.log("Login successful");
          setEmail(emailInput); // Update email in App.js state
          navigate("/");
        } else {
          navigate("/register");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err));

    setEmailInput("");
    setPassword("");
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            required
            className="form-control"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
