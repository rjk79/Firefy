import * as LikeAPIUtil from '../util/like_api_util'

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const fetchAllLikes = () => dispatch => {
    return LikeAPIUtil.fetchAllLikes()
        .then(likes => dispatch(receiveAllLikes(likes)))
}

 
export const createLike = like => dispatch => {
    
    return LikeAPIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}

//songId
export const deleteLike = id => dispatch => {
    return LikeAPIUtil.deleteLike(id)
        .then(like => dispatch(removeLike(like)))
}