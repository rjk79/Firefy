export const RECEIVE_QUEUE = 'RECEIVE_QUEUE'
export const RECEIVE_CURRENT_SONG_ID = 'RECEIVE_CURRENT_SONG_ID'
export const RESET_QUEUE = 'RESET_QUEUE'
// export const RECEIVE_FORWARD = 'RECEIVE_FORWARD'
// export const RECEIVE_BACK = 'RECEIVE_BACK'
// export const DELETE_QUEUE = 'DELETE_QUEUE'
// export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
// export const DELETE_FROM_QUEUE = 'DELETE_FROM_QUEUE'
  
//when you click a song 
export const receiveQueue = (songs, currSongId) => {
    return {
        type: RECEIVE_QUEUE,
        songs,
        currSongId
    }
}
export const receiveCurrentSongId = id => {
    return {
        type: RECEIVE_CURRENT_SONG_ID,
        currSongId: id
    }
}
export const resetQueue = () => {
    return {
        type: RESET_QUEUE,
    }
}









//want to know all the songs and where we're starting
//when player manually removes the song************
export const deleteFromQueue = () => {
    return {
        type: DELETE_FROM_QUEUE,
    }
}

export const deleteQueue = () => {
    return {
        type: DELETE_QUEUE,
    }
}

//on a right click...
export const addToQueue = song => {
    return {
        type: ADD_TO_QUEUE,
        song
    }
}



//dont need to access anything from the database



// export const receiveQueueSong = song => {
//     return {
//         type: RECEIVE_QUEUE_SONG,
//         song
//     }
// }

// export const receiveCurrentSong = song => {
//     return {
//         type: RECEIVE_CURRENT_SONG
//         song
//     }
// }

