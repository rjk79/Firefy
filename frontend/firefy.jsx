import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllPlaylists, fetchPlaylist } from './actions/playlist_actions';
import { fetchAlbum } from './actions/album_actions';
import { createPlaylisting } from './util/playlisting_api_util';
import { fetchAllSearches, deleteAllSearches } from './actions/search_actions';


document.addEventListener("DOMContentLoaded", () => {
    
    let store; //sets the state's current user memo, deletes the windows memo
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else {
        store = configureStore()
    }

    //testing
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchAllPlaylists = fetchAllPlaylists
    window.fetchPlaylist = fetchPlaylist
    window.fetchAlbum = fetchAlbum
    window.createPlaylisting = createPlaylisting
    window.fetchAllSearches = fetchAllSearches
    window.deleteAllSearches = deleteAllSearches
    //testing



    let root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})
