const initialData = {
  roleList: [],
  userList: [],
  userlogin: [],
  loginErrer: null,
};
const pollingReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ROLE":
      return {
        ...state,
        roleList: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        userList: action.payload,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case "GET_USER_LOGIN":
      return {
        ...state,
        userlogin: action.payload,
      };
    case "GET_LOGIN_ERROR":
      return {
        ...state,
        loginErrer: action.payload,
      };

    default:
      return state;
  }
};
export default pollingReducer;
