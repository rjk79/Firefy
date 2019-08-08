// import { merge } from 'lodash'
// import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

// const followsReducer = (state = {}, action) => {
//     Object.freeze(state)
//     switch (action.type) {
//         case RECEIVE_ALL_FOLLOWS:
//             return action.follows
//         case RECEIVE_FOLLOW:
//             return merge({}, state, { [action.follow.id]: action.follow })
//         case REMOVE_FOLLOW:
//             let newState = merge({}, state)
//             delete newState[action.followId]
//             return merge({}, newState)
//         default:
//             return state;
//     }
// }

// export default followsReducer