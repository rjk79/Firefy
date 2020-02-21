import { RECEIVE_QUEUE, RECEIVE_CURRENT_SONG_ID, RESET_QUEUE } from '../actions/musicplayer_actions';
import {merge} from 'lodash'

//action.songs is an array of songs
const musicplayerReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_QUEUE:
            return { queue: action.songs, currSongId: action.currSongId }
        case RECEIVE_CURRENT_SONG_ID:
            let newState = merge({}, state)
            newState["currSongId"] = action.currSongId //makes or updates the value
            return newState
        case RESET_QUEUE:
            return {}
        // case ADD_TO_QUEUE:
        //     let newState = []
        //     state.forEach(song => newState.push(song))
        //     return newState.concat(action.song)
        // case DELETE_FROM_QUEUE:
        //     let newState = []
        //     state.forEach(song => newState.push(song))
        //     return newState.slice(1)
        // case DELETE_QUEUE:
        //     return []
        default:
            return state;
    }
}

// const musicplayerReducer = (state)



export default musicplayerReducer