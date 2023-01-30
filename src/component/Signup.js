import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRoles, signUpData } from "../api";
import "./sign.css";
function Signup() {
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const roleList = useSelector((state) => state.pollingReducer.roleList);
  const roles = Object.values(roleList);
  const dispatch = useDispatch();
  useEffect(() => {
    getRoles(dispatch);
  }, []);
  const registeredEmails = [];
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password || !selectedRole) {
      setError("All fields are required.");
      return;
    }
    if (!firstName) {
      setError("First name is required.");
      return;
    }
    if (!lastName) {
      setError("Last name is required.");
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
    if (registeredEmails.includes(email)) {
      setError("Email already exists.");
      return;
    }
    registeredEmails.push(email);
    signUpData(dispatch, {
      firstName,
      lastName,
      email,
      password,
      selectedRole,
    });
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-content">
          <h3 className="signup-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastNmae">
              Last Name:
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>
              Role:
              <select
                id="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">Select a role</option>
                {roles.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {error !== "" && <p className="error-message">{error}</p>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="login" className="btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Signup;
