import { getRole } from "./actions";

export const getRoles = (dispatch) =>
  fetch("https://pollapi.innotechteam.in/role/list")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      dispatch(getRole(response));
    });

export const login = (dispatch, email, password) =>
  fetch("https://pollapi.innotechteam.in/user/login", {
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      dispatch(getRole(response));
    });

export const Signup = (dispatch, email, password) =>
  fetch("https://pollapi.innotechteam.in/user/Signup", {
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      dispatch(getRole(response));
    });
