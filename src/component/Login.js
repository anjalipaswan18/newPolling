import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginData } from "../api";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    loginData(dispatch, {
      email,
      password,
    });
  };
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-content">
          <h3 className="login-form-title">Login</h3>
          <div className="form-group mt-3">
            <label htmlFor="email">
              email:
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">
              password:
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {error !== "" && <p className="error-message">{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
