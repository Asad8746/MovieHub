export default (state = {}, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
