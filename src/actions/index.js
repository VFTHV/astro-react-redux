import astrology from "../apis/astrology";

export const addZodiac = (zodiacType) => (dispatch) => {
  dispatch({ type: "ZODIAC_TYPE", payload: zodiacType });
  window.history.pushState({}, undefined, "/day");
};

export const addDay = (day) => {
  return {
    type: "DAY",
    payload: day,
  };
};

export const fetchAstro = () => async (dispatch, getState) => {
  const terms = getState().api;
  console.log(terms);
  const response = await astrology.post(`?sign=${terms[0]}&day=${terms[1]}`);

  dispatch({ type: "FETCH_ASTRO", payload: response });
};

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
