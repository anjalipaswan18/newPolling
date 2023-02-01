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
    const res = await axios.post(
      "https://pollapi.innotechteam.in/user/register",
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        roleId: parseInt(user.selectedRole),
      }
    );
    console.log(res);
    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: res.data.response,
    });
  } catch (error) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error.response.data,
    });
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
    console.log(response);
    dispatch({ type: "GET_LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GET_LOGIN_ERROR", payload: error.response.data.message });
  }
};
