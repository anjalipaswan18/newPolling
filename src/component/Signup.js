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
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password || !selectedRole) {
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
    signUpData(dispatch, {
      firstName,
      lastName,
      email,
      password,
      selectedRole,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!firstName || !lastName || !email || !password || !selectedRole) {
  //     setError("All fields are required.");
  //     return;
  //   }
  //   signUpData(dispatch, {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     selectedRole,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   signUpData(dispatch, {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     selectedRole,
  //   });
  // };
  return (
    <div className="signup-main-comtainer">
      <h3>Signup</h3>
      <div className="signup-input">
        <h3>Register</h3>
        <form className="signup-input" onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="role">
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
          {error !== "" && <p className="error-message">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
