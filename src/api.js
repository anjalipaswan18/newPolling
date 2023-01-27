// import { getRole } from "./actions";

// export const getRoles = (dispatch) =>
//   fetch("https://pollapi.innotechteam.in/role/list")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((response) => {
//       dispatch(getRole(response));
//     });

// export const login = (dispatch, email, password) =>
//   fetch("https://pollapi.innotechteam.in/user/login", {
//     method: "POST",
//     body: {
//       email: email,
//       password: password,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((response) => {
//       dispatch(getRole(response));
//     });

// export const Signup = (dispatch, email, password) =>
//   fetch("https://pollapi.innotechteam.in/user/Signup", {
//     method: "POST",
//     body: {
//       email: email,
//       password: password,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((response) => {
//       dispatch(getRole(response));
//     });

import axios from "axios";
import { getRole } from "./actions";

export const getRoles = (dispatch) => {
  axios
    .get("https://pollapi.innotechteam.in/role/list")
    .then((response) => {
      dispatch(getRole(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const login = (dispatch, email, password) => {
//   axios
//     .post("https://pollapi.innotechteam.in/user/login", { email, password })
//     .then((response) => {
//       dispatch(getRole(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const Signup = (dispatch, email, password) => {
//   axios
//     .post("https://pollapi.innotechteam.in/user/Signup", { email, password })
//     .then((response) => {
//       dispatch(getRole(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
