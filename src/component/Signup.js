import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRoles, signUpData } from "../api";
import Popup from "./Popup";
import "./sign.css";
function Signup() {
  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const roleList = useSelector((state) => state.pollingReducer.roleList);
  const [error, setError] = useState("");
  const storeError = useSelector((state) => state.pollingReducer.error);
  const storeUser = useSelector((state) => state.pollingReducer.user);

  const roles = Object.values(roleList);
  const user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    selectedRole: "",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getRoles(dispatch);
  }, []);
  const registeredEmails = [];
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    user.email = email;
    user.selectedRole = selectedRole;
    setError("");

    if (!firstName || !lastName || !email || !password || !selectedRole) {
      setError("All fields are required.");
      return;
    }
    if (!firstName) {
      setError("First name is required.");
      return;
    }
    if (lastName.length < 4) {
      setError("Last name must be 4 charactor ");
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
    signUpData(dispatch, user);
  };
  useEffect(() => {
    // console.log(storeError);
    setError(storeError);
  }, [storeError]);
  useEffect(() => {
    // console.log(storeUser);
    if (storeUser) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [storeUser]);

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-content">
          <h3 className="signup-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastNmae">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
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
          </div>
          {showPopup === true && <Popup />}
        </div>
      </form>
    </div>
  );
}
export default Signup;
