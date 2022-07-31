export default (state = [], action) => {
  switch (action.type) {
    case "ZODIAC_TYPE":
      return [action.payload];
    case "DAY":
      return [...state, action.payload];
    default:
      return state;
  }
};
