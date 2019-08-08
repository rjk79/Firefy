export const RECEIVE_QUEUE = 'RECEIVE_QUEUE'
export const DELETE_QUEUE = 'DELETE_QUEUE'
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const DELETE_FROM_QUEUE = 'DELETE_FROM_QUEUE'
 
//when you click a song ***********
export const receiveQueue = songs => {
    return {
        type: RECEIVE_QUEUE,
        songs,
    }
}
//when player finishes the song************
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

