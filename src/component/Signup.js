import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getRole } from "../actions";
import { getRoles } from "../api";
import "./sign.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");

  const roleList = useSelector((state) => state.pollingReducer.roleList);
  const roles = Object.values(roleList);

  useEffect(() => {
    console.log("roles", roles);
  }, [roles]);

  useEffect(() => {
    getRoles(dispatch);
  }, []);

  return (
    <div className="signup-main-comtainer">
      <h3>Signup</h3>
      <div className="signup-input">
        <h3>Register</h3>
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
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
export default Signup;
