import * as FollowAPIUtil from '../util/follow_api_util'

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS'
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

const receiveAllFollows = follows => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    }
}
 
const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

const removeFollow = follow => {
    return {
        type: REMOVE_FOLLOW,
        followId: follow.id
    }
}
 
export const fetchAllFollows = () => dispatch => {
    return FollowAPIUtil.fetchAllFollows()
        .then(follows => dispatch(receiveAllFollows(follows)))
}


export const createFollow = follow => dispatch => {
    return FollowAPIUtil.createFollow(follow)
        .then(follow => dispatch(receiveFollow(follow)))
}

export const deleteFollow = id => dispatch => {
    return FollowAPIUtil.deleteFollow(id)
        .then(follow => dispatch(removeFollow(follow)))
}