export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ASTRO":
      return action.payload;
    default:
      return state;
  }
};
