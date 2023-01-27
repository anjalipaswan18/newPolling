const initialData = {
  roleList: [],
};
const pollingReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ROLE":
      return {
        ...state,
        roleList: action.payload,
      };
    default:
      return state;
  }
};

export default pollingReducer;
