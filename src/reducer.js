export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null
  // REMOVE token below after finished developing
  // token:
  //   "BQA5TRPSI7iBeNWW1NyQkjmWaYxaCjhGJ9p_vWQ0sgvuhTPuCFjhH2Ml7tBvsagCL_lPTzOMxOTFA162aYJBOCxBKGPdu7jbNSXmB2iLEH8LueA9kEmFmluPNvYGGCM6bHMr5L1HkUdTKFI1_ytG50E_TCX2k5uqIkd209q-96MZy9c4A_gi",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      //return all of previous state and update the user
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
