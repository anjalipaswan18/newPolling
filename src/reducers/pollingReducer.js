const initialData = {
  roleList: [],
  userList: [],
  userlogin: [],
  loginErr: null,
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
    case "GET_USER_LOGIN":
      return {
        ...state,
        userlogin: action.payload,
      };

    default:
      return state;
  }
};
export default pollingReducer;
