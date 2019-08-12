import * as FriendshipAPIUtil from '../util/friendship_api_util'

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'

const receiveFriendship = friendship => {
    return {
        type: RECEIVE_FRIENDSHIP,
        friendship
    }
}

// const removeFriendship = friendship => {
//     return {
//         type: REMOVE_FRIENDSHIP,
//         friendshipId: friendship.id
//     }
// }

export const createFriendship = friendship => dispatch => {
    return FriendshipAPIUtil.createFriendship(friendship)
        .then(friendship => dispatch(receiveFriendship(friendship)))
}

// export const deleteFriendship = (songId, playlistId) => dispatch => {
//     return FriendshipAPIUtil.deleteFriendship(songId, playlistId)
//         .then(friendship => dispatch(removeFriendship(songId, playlistId)))
// }

