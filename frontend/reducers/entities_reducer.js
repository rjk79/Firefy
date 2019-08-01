import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistReducer from "./playlists_reducer";
import songsReducer from "./songs_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistReducer,
    songs: songsReducer
})


export default entitiesReducer