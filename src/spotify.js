// https://developer.spotify.com/

/* link to spotify auth api*/
/* redirect back with access token*/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http:%2F%2Flocalhost:3000/";
const clientId = `${process.env.REACT_APP_CLIENT_ID}`;
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// split the tocken from the url and return value
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #access_token=BQAHO...-gWcAk5qd...&
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
