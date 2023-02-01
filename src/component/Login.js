import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginData } from "../api";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const storeError = useSelector((state) => state.pollingReducer.loginErrer);
  const storeUserlogin = useSelector((state) => state.pollingReducer.userlogin);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (email && password) {
      try {
        setError("");
        await loginData(dispatch, {
          email,
          password,
        });
        if (storeError) {
          setError(storeError);
        }
      } catch (error) {
        console.log(error, storeError);
      }
    } else {
      setError("All fields are required.");
      return;
    }
  };
  useEffect(() => {
    setError(storeError);
  }, [storeError]);
  useEffect(() => {
    if (storeUserlogin) {
    }
  }, [storeUserlogin]);

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
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
