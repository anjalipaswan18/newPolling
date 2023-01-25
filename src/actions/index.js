export const getRole = (role) => {
  return {
    type: "GET_ROLE",
    payload: role,
  };
};
