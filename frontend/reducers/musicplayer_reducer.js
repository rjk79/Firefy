import { RECEIVE_QUEUE, ADD_TO_QUEUE, DELETE_QUEUE, DELETE_FROM_QUEUE } from '../actions/musicplayer_actions';


//action.songs is an array of songs
const songQueueReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_QUEUE:
            return action.songs;
        // case ADD_TO_QUEUE:
        //     let newState = []
        //     state.forEach(song => newState.push(song))
        //     return newState.concat(action.song)
        case DELETE_FROM_QUEUE:
            let newState = []
            state.forEach(song => newState.push(song))
            return newState.slice(1)
        // case DELETE_QUEUE:
        //     return []
        default:
            return state;
    }
}

// const musicplayerReducer = (state)



export default songQueueReducer