import { getRole } from "./actions";
import axios from "axios";
export const getRoles = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://pollapi.innotechteam.in/role/list"
    );
    dispatch(getRole(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const signUpData = async (dispatch, user) => {
  try {
    await axios.post("https://pollapi.innotechteam.in/user/register", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      roleId: parseInt(user.selectedRole),
    });
    // dispatch(signUpData(response.data));
  } catch (error) {
    console.log(error);
  }
};
export const loginData = async (dispatch, userlogin) => {
  try {
    const response = await axios.post(
      "https://pollapi.innotechteam.in/user/login",
      {
        email: userlogin.email,
        password: userlogin.password,
      }
    );
    dispatch(loginData(response.data));
  } catch (error) {
    console.log(error.response.data.message);
  }
};
