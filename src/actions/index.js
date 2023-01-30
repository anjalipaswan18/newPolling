export const getRole = (role) => {
  return {
    type: "GET_ROLE",
    payload: role,
  };
};
export const signUpData = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};
export const loginData = (userlogin) => {
  return {
    type: "GET_USER_LOGIN",
    payload: userlogin,
  };
};
