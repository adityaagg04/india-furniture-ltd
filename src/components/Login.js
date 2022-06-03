import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <main className="login-container" onSubmit={(e) => handleSubmit(e)}>
        <form className="form-area">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="login-input"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="login-input"
          ></input>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>
        <Link to="/register">
          <button type="submit" className="register-submit-btn">
            Create New Account
          </button>
        </Link>
      </main>
    </>
  );
};

export default Login;
