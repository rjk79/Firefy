import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistReducer from "./playlists_reducer";
import songsReducer from "./songs_reducer";
import albumsReducer from "./albums_reducer";
import artistsReducer from "./artists_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistReducer,
    songs: songsReducer,
    albums: albumsReducer,
    artists: artistsReducer,
})


export default entitiesReducer