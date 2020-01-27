export default (state = {}, action) => {
  switch (action.type) {
    case "MOVIES_LIST":
      return { ...state, ...action.payload };
    case "CHANGE_PAGE":
      console.log(action.payload);
      console.log(state);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
