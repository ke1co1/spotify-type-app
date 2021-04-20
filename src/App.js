import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// bridge for sportify api
const spotify = new SpotifyWebApi();

function App() {
  //connect with datalayer
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //return token object
    const hash = getTokenFromUrl();
    // pull the token object from browser window
    const _token = hash.access_token;
    //clear token object from window object
    window.location.hash = "";

    //storing the token
    if (_token) {
      // store token state to datalayer
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // provide access token for spotifywebapi
      spotify.setAccessToken(_token);
      //get user info
      spotify.getMe().then((user) => {
        //dispatch user object to datalayer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1E8H8Wp1SCf2xX").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch, token]);

  return (
    //BEM
    <div className="App">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
